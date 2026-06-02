/* Skip hero-info-cards: they use backdrop-filter and must stay over the hero only */
const revealSelector = '.page-section, .hero-content';

export function initScrollEffects(): void {
  const header = document.querySelector<HTMLElement>('.main-header');
  if (!header) return;

  const onScroll = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll<HTMLElement>(revealSelector).forEach((el) => {
      el.classList.add('reveal-on-scroll', 'is-revealed');
    });
    return;
  }

  document.querySelectorAll<HTMLElement>(revealSelector).forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 240)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  document.querySelectorAll<HTMLElement>('.reveal-on-scroll').forEach((el) => observer.observe(el));
}
