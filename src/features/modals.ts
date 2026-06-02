import { trackClick } from './analytics';

export function initModals(): void {
  const giveModal = document.getElementById('giveModal');
  const giveTrigger = document.getElementById('give-modal-trigger');
  const giveCloseButtons = document.querySelectorAll<HTMLElement>('[data-close-give]');

  const openGive = (): void => {
    if (giveModal) giveModal.style.display = 'block';
  };

  const closeGive = (): void => {
    if (giveModal) giveModal.style.display = 'none';
  };

  giveTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    openGive();
  });

  giveCloseButtons.forEach((btn) => btn.addEventListener('click', closeGive));

  giveModal?.addEventListener('click', (event) => {
    if (event.target === giveModal) closeGive();
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-track-click]').forEach((el) => {
    el.addEventListener('click', () => {
      const action = el.dataset.trackClick;
      if (action === 'qr_paypal' || action === 'qr_cashapp') trackClick(action);
    });
  });
}
