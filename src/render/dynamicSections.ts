import { campaigns, featuredMessages, upcomingEvents } from '../content/site';

function mountCampaigns(): void {
  const root = document.getElementById('campaigns-root');
  if (!root) return;

  const frag = document.createDocumentFragment();
  for (const c of campaigns) {
    const wrap = document.createElement('div');
    wrap.className = c.variant === 'style-2' ? 'campaign-card style-2' : 'campaign-card';

    const tag = document.createElement('span');
    tag.className = 'campaign-tag';
    tag.dataset.i18n = c.tagKey;

    const title = document.createElement('h3');
    title.dataset.i18n = c.titleKey;

    const desc = document.createElement('p');
    desc.dataset.i18n = c.descriptionKey;

    const a = document.createElement('a');
    a.href = c.ctaHref;
    a.className = 'btn btn-light';
    a.dataset.i18n = c.ctaKey;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    wrap.append(tag, title, desc, a);
    frag.appendChild(wrap);
  }
  root.replaceChildren(frag);
}

function mountEvents(): void {
  const root = document.getElementById('events-root');
  if (!root) return;

  const frag = document.createDocumentFragment();
  for (const ev of upcomingEvents) {
    const wrap = document.createElement('div');
    const baseClass = ev.variant === 'style-2' ? 'campaign-card style-2' : 'campaign-card';
    wrap.className = ev.imageSrc ? `${baseClass} has-event-image` : baseClass;

    const tag = document.createElement('span');
    tag.className = 'campaign-tag';
    tag.dataset.i18n = ev.tagKey;

    const title = document.createElement('h3');
    title.dataset.i18n = ev.titleKey;

    const desc = document.createElement('p');
    desc.dataset.i18n = ev.descriptionKey;

    const a = document.createElement('a');
    a.href = ev.ctaHref;
    a.className = 'btn btn-light';
    a.dataset.i18n = ev.ctaKey;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    if (ev.imageSrc) {
      const media = document.createElement('div');
      media.className = 'campaign-card-media';

      const img = document.createElement('img');
      img.className = 'campaign-card-image';
      img.src = ev.imageSrc;
      img.alt = ev.imageAlt ?? '';
      img.loading = 'lazy';

      media.appendChild(img);

      const body = document.createElement('div');
      body.className = 'campaign-card-body';
      body.append(tag, title, desc, a);
      wrap.append(media, body);
    } else {
      wrap.append(tag, title, desc, a);
    }

    frag.appendChild(wrap);
  }
  root.replaceChildren(frag);
}

function mountMessages(): void {
  const root = document.getElementById('messages-root');
  if (!root) return;

  const frag = document.createDocumentFragment();
  for (const m of featuredMessages) {
    const card = document.createElement('div');
    card.className = 'message-card';

    const img = document.createElement('img');
    img.src = m.imageSrc;
    img.alt = m.imageAlt;
    img.loading = 'lazy';

    const content = document.createElement('div');
    content.className = 'message-content';

    const h4 = document.createElement('h4');
    h4.dataset.i18n = m.titleKey;

    const p = document.createElement('p');
    p.dataset.i18n = m.descriptionKey;

    const link = document.createElement('a');
    link.href = m.linkHref;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'message-link';
    link.dataset.i18n = m.linkTextKey;

    content.append(h4, p, link);
    card.append(img, content);
    frag.appendChild(card);
  }
  root.replaceChildren(frag);
}

export function mountDynamicSections(): void {
  mountCampaigns();
  mountEvents();
  mountMessages();
}
