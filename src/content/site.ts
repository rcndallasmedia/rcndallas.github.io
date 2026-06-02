/**
 * Editable site content (cards, links, assets).
 * Section copy that is translated lives in `src/i18n/translations.ts` — reference keys here.
 */

export type CampaignVariant = 'default' | 'style-2';

export interface CampaignItem {
  id: string;
  variant: CampaignVariant;
  tagKey: string;
  titleKey: string;
  descriptionKey: string;
  ctaHref: string;
  ctaKey: string;
}

export interface EventItem {
  id: string;
  variant: CampaignVariant;
  tagKey: string;
  titleKey: string;
  descriptionKey: string;
  ctaHref: string;
  ctaKey: string;
  /** Optional hero image (e.g. event flyer) shown above the text block */
  imageSrc?: string;
  imageAlt?: string;
}

export interface FeaturedMessage {
  id: string;
  imageSrc: string;
  imageAlt: string;
  titleKey: string;
  descriptionKey: string;
  linkHref: string;
  linkTextKey: string;
}

export const campaigns: readonly CampaignItem[] = [
  {
    id: 'midday-prayers',
    variant: 'style-2',
    tagKey: 'campaign_active_tag',
    titleKey: 'campaign_promise_title',
    descriptionKey: 'campaign_promise_desc',
    ctaHref: 'https://chat.whatsapp.com/LNBlcBaH5XF3JwosqkcpNJ?mode=gi_t',
    ctaKey: 'btn_join_now',
  },
  {
    id: 'nightly-prayer',
    variant: 'default',
    tagKey: 'campaign_active_tag',
    titleKey: 'campaign_100_days_title',
    descriptionKey: 'campaign_100_days_desc',
    ctaHref: 'https://chat.whatsapp.com/LNBlcBaH5XF3JwosqkcpNJ?mode=gi_t',
    ctaKey: 'btn_join_now',
  },
];

export const upcomingEvents: readonly EventItem[] = [
  {
    id: 'apostolic-visit',
    variant: 'default',
    tagKey: 'event_apostolic_visit_tag',
    titleKey: 'event_apostolic_visit_title',
    descriptionKey: 'event_apostolic_visit_desc',
    ctaHref: 'https://www.google.com/maps/search/?api=1&query=7815+Arapaho+Rd%2C+Dallas%2C+TX+75248',
    ctaKey: 'btn_join_now',
    imageSrc: '/images/apostolic-visit-flyer.png',
    imageAlt: 'Dallas Apostolic Visit — May 2, 2026 at 3PM, 7815 Arapaho Rd, Dallas',
  },
  {
    id: 'prayer-cruise',
    variant: 'style-2',
    tagKey: 'event_prayer_cruise_tag',
    titleKey: 'event_prayer_cruise_title',
    descriptionKey: 'event_prayer_cruise_desc',
    ctaHref: 'https://chat.whatsapp.com/LNBlcBaH5XF3JwosqkcpNJ?mode=gi_t',
    ctaKey: 'btn_join_now',
  },
];

export const featuredMessages: readonly FeaturedMessage[] = [
  {
    id: 'intentionality',
    imageSrc: '/images/message-1.jpg',
    imageAlt: "Thumbnail for 'The Journey of Intentionality' sermon",
    titleKey: 'message_intentionality_title',
    descriptionKey: 'message_intentionality_desc',
    linkHref: 'https://youtu.be/eRPcfmZ-Hd4',
    linkTextKey: 'btn_watch_now',
  },
  {
    id: 'angels',
    imageSrc: '/images/message-2.jpg',
    imageAlt: "Thumbnail for 'The Angels are Singing Halle' sermon",
    titleKey: 'message_angels_title',
    descriptionKey: 'message_angels_desc',
    linkHref: 'https://youtu.be/aXep6S4634w',
    linkTextKey: 'btn_listen_now',
  },
  {
    id: 'healing',
    imageSrc: '/images/message-3.jpg',
    imageAlt: 'Thumbnail for Healing at Philanthropy of Jesus recap',
    titleKey: 'message_healing_title',
    descriptionKey: 'message_healing_desc',
    linkHref: 'https://youtu.be/0TR-hn4P6kk',
    linkTextKey: 'btn_download',
  },
];
