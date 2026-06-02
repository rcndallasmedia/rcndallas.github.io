import './style.css';
import { initI18n } from './i18n';
import { mountDynamicSections } from './render/dynamicSections';
import { initAnalytics } from './features/analytics';
import { initMinistryFlipCards } from './features/ministries';
import { initModals } from './features/modals';
import { initNavigation } from './features/navigation';
import { initScrollEffects } from './features/scrollEffects';

function boot(): void {
  mountDynamicSections();
  initI18n();
  initNavigation();
  initModals();
  initAnalytics();
  initMinistryFlipCards();
  initScrollEffects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
