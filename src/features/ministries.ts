export function initMinistryFlipCards(): void {
  const cards = document.querySelectorAll<HTMLElement>('.ministry-flip-card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

    card.querySelectorAll('img').forEach((img) => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('flipped');
      });
    });
  });
}
