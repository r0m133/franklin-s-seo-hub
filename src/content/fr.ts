import type { SiteContent } from './types';

export const frContent: SiteContent = {
  siteName: 'Asking Franklin',
  siteDescription: 'Assistant IA pour le contenu SEO',
  
  nav: {
    home: 'Accueil',
    pricing: 'Tarifs',
    blog: 'Blog',
    laDepeche: 'La Dépêche',
    cta: "J'essaye gratuitement",
  },
  
  home: {
    meta: {
      title: 'Asking Franklin - Assistant IA pour le contenu SEO',
      description: 'TODO: paste meta description from current website',
    },
    hero: {
      title: 'TODO: paste hero title from current website',
      subtitle: 'TODO: paste hero subtitle from current website',
      cta: "J'essaye gratuitement",
    },
    howItWorks: {
      title: 'Comment ça marche',
      anchor: 'comment-ca-marche',
      steps: [
        {
          number: '1',
          title: 'TODO: paste step 1 title from current website',
          description: 'TODO: paste step 1 description from current website',
        },
        {
          number: '2',
          title: 'TODO: paste step 2 title from current website',
          description: 'TODO: paste step 2 description from current website',
        },
        {
          number: '3',
          title: 'TODO: paste step 3 title from current website',
          description: 'TODO: paste step 3 description from current website',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      anchor: 'faq',
      items: [
        {
          question: 'TODO: paste FAQ question 1 from current website',
          answer: 'TODO: paste FAQ answer 1 from current website',
        },
        {
          question: 'TODO: paste FAQ question 2 from current website',
          answer: 'TODO: paste FAQ answer 2 from current website',
        },
        {
          question: 'TODO: paste FAQ question 3 from current website',
          answer: 'TODO: paste FAQ answer 3 from current website',
        },
      ],
    },
  },
  
  pricing: {
    meta: {
      title: 'Tarifs - Asking Franklin',
      description: 'TODO: paste pricing meta description from current website',
    },
    title: 'Nos tarifs',
    subtitle: 'TODO: paste pricing subtitle from current website',
    plans: [
      {
        name: 'TODO: paste plan 1 name',
        price: 'TODO: paste plan 1 price',
        period: '/mois',
        description: 'TODO: paste plan 1 description',
        features: [
          'TODO: paste feature 1',
          'TODO: paste feature 2',
          'TODO: paste feature 3',
        ],
        cta: 'Commencer',
      },
      {
        name: 'TODO: paste plan 2 name',
        price: 'TODO: paste plan 2 price',
        period: '/mois',
        description: 'TODO: paste plan 2 description',
        features: [
          'TODO: paste feature 1',
          'TODO: paste feature 2',
          'TODO: paste feature 3',
        ],
        cta: 'Commencer',
        highlighted: true,
      },
    ],
  },
  
  terms: {
    meta: {
      title: 'CGV/CGU - Asking Franklin',
      description: 'Conditions générales de vente et d\'utilisation',
    },
    title: 'Conditions Générales de Vente et d\'Utilisation',
    content: 'TODO: paste terms content from current website',
  },
  
  legalNotice: {
    meta: {
      title: 'Mentions légales - Asking Franklin',
      description: 'Mentions légales du site',
    },
    title: 'Mentions légales',
    content: 'TODO: paste legal notice content from current website',
  },
  
  privacyPolicy: {
    meta: {
      title: 'Politique de confidentialité - Asking Franklin',
      description: 'Notre politique de confidentialité',
    },
    title: 'Politique de confidentialité',
    content: 'TODO: paste privacy policy content from current website',
  },
  
  footer: {
    description: 'Assistant IA pour le contenu SEO',
    links: [
      {
        title: 'Produit',
        items: [
          { label: 'Fonctionnalités', href: '/fr#comment-ca-marche' },
          { label: 'Tarifs', href: '/fr/tarifs' },
          { label: 'FAQ', href: '/fr#faq' },
        ],
      },
      {
        title: 'Entreprise',
        items: [
          { label: 'Blog', href: 'https://blog.askingfranklin.com/' },
          { label: 'La Dépêche', href: 'https://ladepeche.askingfranklin.com/' },
        ],
      },
      {
        title: 'Légal',
        items: [
          { label: 'CGV/CGU', href: '/fr/cgv-cgu' },
          { label: 'Mentions légales', href: '/fr/mentions-legales' },
          { label: 'Politique de confidentialité', href: '/fr/politique-de-confidentialite' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Asking Franklin. Tous droits réservés.`,
  },
};
