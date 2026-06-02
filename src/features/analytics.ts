const STORAGE_KEY = 'dallasConferenceAnalytics';

type TrackableAction = 'register_desktop' | 'register_mobile' | 'qr_paypal' | 'qr_cashapp';

interface AnalyticsData {
  register_desktop: number;
  register_mobile: number;
  qr_paypal: number;
  qr_cashapp: number;
  lastUpdated?: string;
}

function readData(): AnalyticsData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<AnalyticsData>) : {};
    return {
      register_desktop: parsed.register_desktop ?? 0,
      register_mobile: parsed.register_mobile ?? 0,
      qr_paypal: parsed.qr_paypal ?? 0,
      qr_cashapp: parsed.qr_cashapp ?? 0,
      lastUpdated: parsed.lastUpdated,
    };
  } catch {
    return { register_desktop: 0, register_mobile: 0, qr_paypal: 0, qr_cashapp: 0 };
  }
}

function writeData(data: AnalyticsData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function trackClick(action: TrackableAction): void {
  const analyticsData = readData();
  analyticsData[action]++;
  analyticsData.lastUpdated = new Date().toISOString();
  writeData(analyticsData);
  updateAnalyticsDisplay();
}

function setText(id: string, value: string): void {
  document.getElementById(id)?.replaceChildren(document.createTextNode(value));
}

export function updateAnalyticsDisplay(): void {
  const data = readData();
  setText('register-desktop-count', String(data.register_desktop));
  setText('register-mobile-count', String(data.register_mobile));
  setText('qr-paypal-count', String(data.qr_paypal));
  setText('qr-cashapp-count', String(data.qr_cashapp));

  const totalRegistrations = data.register_desktop + data.register_mobile;
  const totalQRClicks = data.qr_paypal + data.qr_cashapp;
  setText('total-registrations', String(totalRegistrations));
  setText('total-qr-clicks', String(totalQRClicks));
}

function toggleAnalytics(): void {
  const modal = document.getElementById('analyticsModal');
  if (!modal) return;
  const visible = modal.style.display === 'block';
  modal.style.display = visible ? 'none' : 'block';
  if (!visible) updateAnalyticsDisplay();
}

function closeAnalytics(): void {
  const modal = document.getElementById('analyticsModal');
  if (modal) modal.style.display = 'none';
}

function exportAnalytics(): void {
  const data = readData();
  const csvContent = [
    ['Metric', 'Count'],
    ['Desktop Registrations', String(data.register_desktop)],
    ['Mobile Registrations', String(data.register_mobile)],
    ['Total Registrations', String(data.register_desktop + data.register_mobile)],
    ['PayPal QR Clicks', String(data.qr_paypal)],
    ['Cash App QR Clicks', String(data.qr_cashapp)],
    ['Total QR Clicks', String(data.qr_paypal + data.qr_cashapp)],
    ['Export Date', new Date().toISOString()],
  ]
    .map((row) => row.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dallas-conference-analytics-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  window.alert('Analytics data exported successfully!');
}

function resetAnalytics(): void {
  if (!window.confirm('Are you sure you want to reset all analytics data? This action cannot be undone.')) {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  updateAnalyticsDisplay();
  window.alert('Analytics data has been reset.');
}

function checkAdminAccess(): void {
  const urlParams = new URLSearchParams(window.location.search);
  const adminParam = urlParams.get('admin');

  if (adminParam !== 'analytics') return;

  const toggle = document.getElementById('analytics-toggle');
  if (toggle) toggle.style.display = 'block';

  const indicator = document.createElement('div');
  indicator.id = 'admin-indicator';
  indicator.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    background: rgba(106, 63, 219, 0.9);
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    z-index: 1002;
    font-family: var(--font-family);
  `;
  indicator.textContent = 'Admin Mode';
  document.body.appendChild(indicator);

  window.history.replaceState({}, document.title, window.location.pathname);
}

export function initAnalytics(): void {
  updateAnalyticsDisplay();
  checkAdminAccess();

  document.getElementById('analytics-open')?.addEventListener('click', toggleAnalytics);
  document.querySelectorAll<HTMLElement>('[data-close-analytics]').forEach((el) => {
    el.addEventListener('click', closeAnalytics);
  });
  document.getElementById('analytics-export')?.addEventListener('click', exportAnalytics);
  document.getElementById('analytics-reset')?.addEventListener('click', resetAnalytics);
}
