export type Locale = 'en' | 'es';

export type TranslationTree = Record<string, string>;

export const translations: Record<Locale, TranslationTree> = {
  en: {
    skip_to_main_content: 'Skip to main content',
    nav_home: 'Home',
    nav_im_new: "I'm New",
    nav_about_us: 'About Us',
    nav_sermons: 'Sermons',
    nav_ministries: 'Ministries',
    nav_events: 'Events',
    nav_give: 'Give',
    lang_button_text: 'ES',
    rcn_dallas_full_title: 'Remnant Christian Network <span class="subtitle-hero">Dallas, TX</span>',
    rcn_tagline: 'Striving for the rebirth of Apostolic Christianity',
    join_us_sunday: 'Join Us In Person',
    prayer_services_info: '10-Hour Prayer Services: 1st Saturday of Month | 7AM-5PM',
    worship_info: '5-Hour Prayer Services: 4th Saturday of Month | 8AM-1PM',
    section_title_campaigns: 'Current Campaigns',
    campaign_active_tag: 'Active Campaign',
    campaign_100_days_title: 'Nightly Prayer Services',
    campaign_100_days_desc:
      "Join us in seeking God's face in prayer every night at 11PM CDT on Zoom",
    btn_learn_more: 'Learn More',
    campaign_upcoming_tag: 'Upcoming',
    campaign_promise_title: 'Midday Prayers: Every Day at Noon',
    campaign_promise_desc: 'Join us daily at 12PM CDT for powerful midday prayers on Zoom.',
    btn_join_now: 'Join Now',
    section_title_new_to_rcn: 'New to RCN Dallas?',
    new_to_rcn_subtitle:
      "We're excited to welcome you into our church family. Here's everything you need to know for your first visit.",
    new_location_time_title: 'Location & Time',
    new_location_time_desc: 'Join us for worship on the 1st and 4th Saturdays of the month from 7AM-5PM',
    new_prayer_services_title: 'Establishing Priesthood',
    new_prayer_services_desc:
      'Wednesday nights with Rev. Philip Obir—every Wednesday 10PM–12AM CT, live on Zoom.',
    new_what_to_expect_title: 'What to Expect',
    new_what_to_expect_desc: 'Authentic worship, prayer, and fellowship in a welcoming community',
    section_title_about_rcn: 'About RCN Dallas',
    about_rcn_desc:
      "We are a community committed to striving for the rebirth of Apostolic Christianity through prayer, worship, and fellowship. Join us as we seek God's heart together and build a strong foundation of faith.",
    about_feature_apostolic: 'Apostolic Foundation',
    about_feature_prayer_centered: 'Prayer-Centered',
    about_feature_community_focus: 'Community Focus',
    section_title_messages: 'Messages & Teachings',
    message_intentionality_title: 'The Journey of Intentionality',
    message_intentionality_desc: 'Understanding the foundation of our prayer life',
    btn_watch_now: 'Watch Now',
    message_angels_title: 'The Angels are Singing Halle',
    message_angels_desc:
      "Enjoy hearing RCN Dallas' very own Pastor Phillip, as he ministers powerfully at one of their recent 10 hour prayer service.",
    btn_listen_now: 'Listen Now',
    message_healing_title: 'Healing at Philanthropy of Jesus Service',
    message_healing_desc:
      'Recap of the powerful healing that took place at the Philanthropy of Jesus service with Pastor Philip Gbir.',
    btn_download: 'Download',
    section_title_ministries: 'Our Ministries',
    ministries_subtitle:
      'Discover the various ways to connect, serve, and grow within our church family.',
    ministries_placeholder_en: '(Content for Ministries section will go here.)',
    ministries_placeholder_es: '(El contenido de la sección Ministerios irá aquí.)',
    section_title_events: 'Upcoming Events',
    events_subtitle:
      'Stay up-to-date with our latest gatherings, special services, and community activities.',
    no_upcoming_events:
      'No upcoming events at this time. Check back soon for new gatherings and special services!',
    event_apostolic_visit_tag: 'Upcoming Event',
    event_apostolic_visit_title: 'Dallas Apostolic Visit',
    event_apostolic_visit_desc:
      'Join us with Dr. Arome Osayi and Rev. Philip Gbir on Saturday, May 2nd, 2026 at 3PM prompt. Location: 7815 Arapaho Rd, Dallas, TX 75248.',
    event_prayer_cruise_tag: 'Upcoming Event',
    event_prayer_cruise_title: '5 Hour Prayer Cruise',
    event_prayer_cruise_desc:
      'Join us for a powerful 5-hour prayer service on Saturday, April 25th, 2026 from 8AM-1PM. Location: 745 Brown Trail, Hurst, TX 76053',
    section_title_partner: 'Partner With Us',
    partner_subtitle:
      "Your generosity helps us continue our mission to restore apostolic order and build God's kingdom through prayer, worship, and community.",
    partner_onetime_title: 'One-Time Gift',
    partner_onetime_desc: 'Make a single donation to support our ministry and community outreach',
    btn_give_now: 'Give Now',
    btn_paypal: 'PayPal',
    btn_cashapp: 'Cash App',
    partner_monthly_title: 'Monthly Giving',
    partner_monthly_desc: 'Become a monthly partner and help us plan for consistent ministry impact',
    btn_partner_monthly: 'Partner Monthly',
    partner_disclaimer:
      'RCN Dallas is a registered 501(c)(3) organization. All donations are tax-deductible.',
    footer_text: '© 2026 Remnant Christian Network. Made with ❤️.',
    social_instagram: 'Instagram',
    social_youtube: 'YouTube',
  },
  es: {
    skip_to_main_content: 'Saltar al contenido principal',
    nav_home: 'Inicio',
    nav_im_new: 'Soy Nuevo',
    nav_about_us: 'Nosotros',
    nav_sermons: 'Sermones',
    nav_ministries: 'Ministerios',
    nav_events: 'Eventos',
    nav_give: 'Donar',
    lang_button_text: 'EN',
    rcn_dallas_full_title: 'Red Cristiana Remanente <span class="subtitle-hero">Dallas, TX</span>',
    rcn_tagline: 'Luchando por el Renacimiento de la Cristiandad Apostólica',
    join_us_sunday: 'Únete En Persona',
    prayer_services_info: 'Servicios de Oración de 10 Horas: 1er Sábado del Mes | 7AM-5PM',
    worship_info: 'Servicios de Oración de 5 Horas: 4to Sábado del Mes | 8AM-1PM',
    section_title_campaigns: 'Campañas Actuales',
    campaign_active_tag: 'Campaña Activa',
    campaign_100_days_title: 'Servicios de Oración Nocturnos',
    campaign_100_days_desc:
      'Únete a nosotros en la búsqueda del rostro de Dios en oración cada noche a las 11PM CDT en Zoom',
    btn_learn_more: 'Saber Más',
    campaign_upcoming_tag: 'Próximo',
    campaign_promise_title: 'Oraciones del Mediodía: Todos los Días al Mediodía',
    campaign_promise_desc:
      'Únase a nosotros todos los días a las 12PM CDT en Zoom para poderosas oraciones del mediodía.',
    btn_join_now: 'Únete Ahora',
    section_title_new_to_rcn: '¿Nuevo en RCN Dallas?',
    new_to_rcn_subtitle:
      'Estamos emocionados de darle la bienvenida a nuestra familia de la iglesia. Aquí encontrará todo lo que necesita saber para su primera visita.',
    new_location_time_title: 'Ubicación y Hora',
    new_location_time_desc: 'Únase a nosotros para el culto el primer y cuarto sábado de cada mes de 7 AM a 5 PM',
    new_prayer_services_title: 'Estableciendo el Sacerdocio',
    new_prayer_services_desc:
      'Miércoles por la noche con el Rev. Philip Obir—todos los miércoles de 10PM a 12AM CT en vivo por Zoom.',
    new_what_to_expect_title: 'Qué Esperar',
    new_what_to_expect_desc: 'Culto auténtico, oración y compañerismo en una comunidad acogedora',
    section_title_about_rcn: 'Acerca de RCN Dallas',
    about_rcn_desc:
      'Somos una comunidad comprometida con luchar por el renacimiento de la Cristiandad Apostólica a través de la oración, la adoración y el compañerismo. Únase a nosotros mientras buscamos el corazón de Dios juntos y construimos una sólida base de fe.',
    about_feature_apostolic: 'Fundación Apostólica',
    about_feature_prayer_centered: 'Centrado en la Oración',
    about_feature_community_focus: 'Enfoque Comunitario',
    section_title_messages: 'Mensajes y Enseñanzas',
    message_intentionality_title: 'El Viaje de la Intencionalidad',
    message_intentionality_desc: 'Comprendiendo el fundamento de nuestra vida de oración',
    btn_watch_now: 'Ver Ahora',
    message_angels_title: 'Los Ángeles Cantan Aleluya',
    message_angels_desc:
      'Disfrute escuchando al propio Pastor Phillip de RCN Dallas, mientras ministra poderosamente en uno de sus recientes servicios de oración de 10 horas.',
    btn_listen_now: 'Escuchar Ahora',
    message_healing_title: 'Sanidad en el Servicio de Filantropía de Jesús',
    message_healing_desc:
      'Recapitulación de la poderosa sanidad que tuvo lugar en el servicio de Filantropía de Jesús con el Pastor Philip Gbir.',
    btn_download: 'Descargar',
    section_title_ministries: 'Nuestros Ministerios',
    ministries_subtitle:
      'Descubre las diversas formas de conectar, servir y crecer dentro de nuestra familia de la iglesia.',
    ministries_placeholder_en: '(Content for Ministries section will go here.)',
    ministries_placeholder_es: '(El contenido de la sección Ministerios irá aquí.)',
    section_title_events: 'Próximos Eventos',
    events_subtitle:
      'Manténgase al día con nuestras últimas reuniones, servicios especiales y actividades comunitarias.',
    no_upcoming_events:
      'No hay eventos próximos en este momento. ¡Vuelva pronto para nuevas reuniones y servicios especiales!',
    event_apostolic_visit_tag: 'Próximo Evento',
    event_apostolic_visit_title: 'Visita Apostólica Dallas',
    event_apostolic_visit_desc:
      'Únase con el Dr. Arome Osayi y el Rev. Philip Gbir el sábado 2 de mayo de 2026 a las 3 PM en punto. Ubicación: 7815 Arapaho Rd, Dallas, TX 75248.',
    event_prayer_cruise_tag: 'Próximo Evento',
    event_prayer_cruise_title: 'Crucero de Oración de 5 Horas',
    event_prayer_cruise_desc:
      'Únase a nosotros para un poderoso servicio de oración de 5 horas el sábado 25 de abril de 2026 de 8AM-1PM. Ubicación: 745 Brown Trail, Hurst, TX 76053',
    section_title_partner: 'Asóciate con Nosotros',
    partner_subtitle:
      'Su generosidad nos ayuda a continuar nuestra misión de restaurar el orden apostólico y construir el reino de Dios a través de la oración, la adoración y la comunidad.',
    partner_onetime_title: 'Donación Única',
    partner_onetime_desc: 'Haga una sola donación para apoyar nuestro ministerio y alcance comunitario',
    btn_give_now: 'Donar Ahora',
    btn_paypal: 'PayPal',
    btn_cashapp: 'Cash App',
    partner_monthly_title: 'Donación Mensual',
    partner_monthly_desc:
      'Conviértase en un socio mensual y ayúdenos a planificar un impacto ministerial constante',
    btn_partner_monthly: 'Asociarse Mensualmente',
    partner_disclaimer:
      'RCN Dallas es una organización 501(c)(3) registrada. Todas las donaciones son deducibles de impuestos.',
    footer_text: '© 2026 Red Cristiana Remanente. Hecho con ❤️.',
    social_instagram: 'Instagram',
    social_youtube: 'YouTube',
  },
};
