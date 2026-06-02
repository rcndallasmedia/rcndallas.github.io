function closeMobileNav(
  menuBurger: HTMLElement,
  navLinksMain: HTMLElement,
  navActions: HTMLElement,
): void {
  navLinksMain.classList.remove('nav-open');
  navActions.classList.remove('nav-open');
  menuBurger.classList.remove('open');
  menuBurger.setAttribute('aria-expanded', 'false');
}

export function initNavigation(): void {
  const menuBurger = document.querySelector<HTMLElement>('.menu-burger');
  const navLinksMain = document.querySelector<HTMLElement>('.nav-links-main');
  const navActions = document.querySelector<HTMLElement>('.nav-actions');
  const header = document.querySelector<HTMLElement>('.main-header');

  if (!menuBurger || !navLinksMain || !navActions || !header) return;

  menuBurger.addEventListener('click', () => {
    navLinksMain.classList.toggle('nav-open');
    navActions.classList.toggle('nav-open');
    menuBurger.classList.toggle('open');
    const open = navLinksMain.classList.contains('nav-open');
    menuBurger.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: MouseEvent) {
      const href = this.getAttribute('href');
      if (!href || href.length <= 1) return;

      e.preventDefault();
      const targetElement = document.querySelector<HTMLElement>(href);
      if (!targetElement) return;

      if (navLinksMain.classList.contains('nav-open')) {
        closeMobileNav(menuBurger, navLinksMain, navActions);
      }

      const headerHeight = header.offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    });
  });
}
