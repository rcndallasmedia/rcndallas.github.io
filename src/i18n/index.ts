import { translations, type Locale } from './translations';

const STORAGE_KEY = 'preferredLanguage';

export function getStoredLocale(): Locale {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw === 'es' ? 'es' : 'en';
}

export function setLanguage(lang: Locale): void {
  document.documentElement.lang = lang;
  const table = translations[lang];

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const value = table[key];
    if (value) element.innerHTML = value;
  });

  const langButton = document.querySelector<HTMLAnchorElement>('.btn-lang');
  if (langButton) {
    if (lang === 'es') {
      langButton.textContent = 'EN';
      langButton.setAttribute('aria-label', 'Switch to English');
    } else {
      langButton.textContent = 'ES';
      langButton.setAttribute('aria-label', 'Switch to Spanish');
    }
  }

  document.querySelectorAll<HTMLElement>('.english-content').forEach((el) => {
    el.style.display = lang === 'en' ? 'block' : 'none';
  });
  document.querySelectorAll<HTMLElement>('.spanish-content').forEach((el) => {
    el.style.display = lang === 'es' ? 'block' : 'none';
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

export function initI18n(): void {
  setLanguage(getStoredLocale());

  const langButton = document.querySelector<HTMLAnchorElement>('.btn-lang');
  langButton?.addEventListener('click', (e) => {
    e.preventDefault();
    const current: Locale = document.documentElement.lang === 'es' ? 'es' : 'en';
    const next: Locale = current === 'en' ? 'es' : 'en';
    setLanguage(next);
  });
}

export type { Locale } from './translations';
