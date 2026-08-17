export type Lang = 'de' | 'en';
export type PageKey =
  | 'home'
  | 'dog'
  | 'about'
  | 'breeding'
  | 'contact'
  | 'legal'
  | 'privacy';

export const routes: Record<Lang, Record<PageKey, string>> = {
  de: {
    home: '/',
    dog: '/puenktchen/',
    about: '/ueber-uns/',
    breeding: '/zucht/',
    contact: '/kontakt/',
    legal: '/impressum/',
    privacy: '/datenschutz/',
  },
  en: {
    home: '/en/',
    dog: '/en/puenktchen/',
    about: '/en/about/',
    breeding: '/en/breeding/',
    contact: '/en/contact/',
    legal: '/en/legal-notice/',
    privacy: '/en/privacy/',
  },
};

export const ui = {
  de: {
    nav: [
      ['dog', 'Pünktchen'],
      ['about', 'Über uns'],
      ['breeding', 'Zucht'],
      ['contact', 'Kontakt'],
    ] as [PageKey, string][],
    language: 'EN',
    menu: 'Menü',
    skip: 'Zum Inhalt springen',
    footerLine: 'Dalmatinerzucht in Hanau · im CDF / VDH',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    instagram: 'Instagram',
    email: 'E-Mail',
  },
  en: {
    nav: [
      ['dog', 'Pünktchen'],
      ['about', 'About us'],
      ['breeding', 'Breeding'],
      ['contact', 'Contact'],
    ] as [PageKey, string][],
    language: 'DE',
    menu: 'Menu',
    skip: 'Skip to content',
    footerLine: 'Dalmatian kennel in Hanau · within CDF / VDH',
    legal: 'Legal notice',
    privacy: 'Privacy',
    instagram: 'Instagram',
    email: 'Email',
  },
};

export const site = {
  name: "Schnüffler’s Dalmatiner",
  owner: 'Cosima Grun',
  email: 'schnueffler01@gmx.de',
  instagram: 'https://www.instagram.com/miss_pointfluencer/',
  address: {
    street: 'Händelstraße 10',
    postalCode: '63452',
    city: 'Hanau',
    country: 'Deutschland',
  },
};

export function alternateLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}
