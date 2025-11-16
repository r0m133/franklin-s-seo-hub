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
      title: 'Asking Franklin - Le meilleur assistant IA pour rédiger vos contenus SEO',
      description: 'L\'assistant IA de rédaction SEO qui analyse ce que cherchent réellement vos clients, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans Google ET deviennent des sources de référence pour les IA génératives.',
    },
    hero: {
      title: 'Le meilleur assistant IA pour rédiger vos contenus SEO',
      subtitle: 'Vous passez des heures à créer du contenu... sans générer le trafic que vous méritez ? Asking Franklin est l\'assistant IA de rédaction SEO qui change la donne. Notre outil analyse ce que cherchent réellement vos clients, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans Google ET deviennent des sources de référence pour les IA génératives comme ChatGPT, Perplexity et Gemini.',
      cta: "Je teste gratuitement",
    },
    howItWorks: {
      title: 'Ok, concrètement comment ça marche ?',
      anchor: 'comment-ca-marche',
      steps: [
        {
          number: '1',
          title: 'Analyse d\'intention de recherche en temps réel',
          description: 'Découvrez exactement ce que cherchent vos clients pour écrire juste ! Asking Franklin analyse les intentions de recherche, les SERPs et la concurrence.',
        },
        {
          number: '2',
          title: 'Optimisation multi-LLMs',
          description: 'Devenez des sources incontournables pour ChatGPT, Claude, Perplexity, Gemini… Vos contenus se positionnent partout !',
        },
        {
          number: '3',
          title: 'Génération ultra-rapide',
          description: 'Économisez 80% de votre temps en laissant Asking Franklin rédiger pour vous ! Un assistant pré-entraîné qui s\'adapte à vos instructions.',
        },
      ],
    },
    faq: {
      title: 'Vous avez des questions ? On a les réponses !',
      anchor: 'faq',
      items: [
        {
          question: 'Est-ce que je peux utiliser l\'outil gratuitement ?',
          answer: 'Oui, vous pouvez créer un compte pour tester l\'outil gratuitement durant 7 jours.',
        },
        {
          question: 'Est-ce qu\'Asking Franklin peut me servir même si je ne suis pas inspiré ou doué en rédaction ?',
          answer: 'C\'est un des points forts de l\'outil. Tapez simplement le mot-clé sur lequel vous voulez rédiger du contenu, Asking Franklin vous indiquera tout ce que recherchent les internautes à ce sujet. Mais aussi les volumes de recherche, la concurrence et les mots-clés associés.',
        },
        {
          question: 'Pourquoi Asking Franklin est-il différent des autres outils de rédaction de contenu assistés par IA ?',
          answer: 'L\'une des principales forces de l\'outil réside dans sa capacité conversationnelle. Vous pouvez apporter votre expertise sur le sujet à n\'importe quelle étape de la création de votre contenu. Donner des instructions précises, des détails sur vos cibles, le ton à adopter… Asking Franklin en tiendra compte et apprendra au fur et à mesure.',
        },
        {
          question: 'Est-ce que les contenus générés par IA sont pénalisés ?',
          answer: 'Un contenu généré par IA n\'est pas pénalisé par défaut si ce dernier apporte une réelle expertise et des informations vérifiées. Il faut que ce dernier réponde véritablement aux questions que se posent les internautes.',
        },
        {
          question: 'Qu\'est-ce qui différencie Asking Franklin des autres outils de rédaction automatisé par l\'IA ?',
          answer: 'Asking Franklin peut automatiser la création de vos contenus, que vous n\'ayez aucune idée ou déjà une stratégie de content marketing bien établie. Mais l\'IA seule a ses limites c\'est pourquoi vous avez toujours la plume sur vos contenus. Franklin devient alors un vrai assistant qui puisera dans les connaissances et instructions que vous lui fournirez pour répondre à vos besoins d\'écriture !',
        },
      ],
    },
  },
  
  pricing: {
    meta: {
      title: 'Tarifs - Asking Franklin',
      description: 'Découvrez nos offres et choisissez le plan qui correspond à vos besoins de rédaction SEO assistée par IA.',
    },
    title: 'Nos tarifs',
    subtitle: 'Choisissez l\'offre qui vous correspond',
    plans: [
      {
        name: 'Essai Gratuit',
        price: 'Gratuit',
        period: '7 jours',
        description: 'Testez toutes les fonctionnalités gratuitement',
        features: [
          'Accès complet pendant 7 jours',
          'Analyse d\'intention de recherche',
          'Optimisation SEO et multi-LLMs',
          'Génération de contenu illimitée',
        ],
        cta: 'Commencer gratuitement',
      },
      {
        name: 'Pro',
        price: 'Sur devis',
        period: '',
        description: 'Pour les professionnels et agences',
        features: [
          'Toutes les fonctionnalités incluses',
          'Support prioritaire',
          'Formation personnalisée',
          'API et intégrations',
        ],
        cta: 'Nous contacter',
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
    content: `
# Conditions Générales de Vente et d'Utilisation

## 1. Objet
Les présentes Conditions Générales de Vente et d'Utilisation (ci-après "CGV/CGU") régissent l'accès et l'utilisation de la plateforme Asking Franklin, un assistant IA de rédaction SEO.

## 2. Acceptation des conditions
En utilisant Asking Franklin, vous acceptez sans réserve les présentes CGV/CGU.

## 3. Description du service
Asking Franklin est un outil d'assistance à la rédaction de contenus SEO utilisant l'intelligence artificielle pour analyser les intentions de recherche et optimiser les contenus.

## 4. Inscription et compte utilisateur
L'utilisation de Asking Franklin nécessite la création d'un compte. Vous êtes responsable de la confidentialité de vos identifiants.

## 5. Période d'essai
Une période d'essai gratuite de 7 jours est proposée pour tester toutes les fonctionnalités de l'outil.

## 6. Tarification et paiement
Les tarifs sont indiqués sur notre page dédiée. Les paiements sont sécurisés et traités par nos prestataires certifiés.

## 7. Propriété intellectuelle
Les contenus générés par Asking Franklin vous appartiennent. Le code et l'interface de la plateforme restent la propriété d'Asking Franklin.

## 8. Limitation de responsabilité
Asking Franklin est un outil d'assistance. Vous restez responsable des contenus publiés et devez vérifier leur exactitude.

## 9. Protection des données
Vos données personnelles sont traitées conformément à notre Politique de confidentialité et au RGPD.

## 10. Modification des CGV/CGU
Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés des changements.

## 11. Résiliation
Vous pouvez résilier votre compte à tout moment depuis votre espace personnel.

## 12. Loi applicable
Ces CGV/CGU sont régies par le droit français.
    `,
  },
  
  legalNotice: {
    meta: {
      title: 'Mentions légales - Asking Franklin',
      description: 'Mentions légales du site',
    },
    title: 'Mentions légales',
    content: `
# Mentions légales

## Éditeur du site
**Asking Franklin**  
Société par actions simplifiée  
Capital social : [À compléter]  
RCS : [À compléter]  
Siège social : [À compléter]

## Directeur de publication
[À compléter]

## Hébergement
Ce site est hébergé par :  
[Nom de l'hébergeur]  
[Adresse de l'hébergeur]

## Contact
**Email :** contact@askingfranklin.com  
**LinkedIn :** https://www.linkedin.com/company/asking-franklin

## Propriété intellectuelle
L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.

## Cookies
Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez les désactiver dans les paramètres de votre navigateur.

## Données personnelles
Pour toute information sur le traitement de vos données personnelles, consultez notre Politique de confidentialité.
    `,
  },
  
  privacyPolicy: {
    meta: {
      title: 'Politique de confidentialité - Asking Franklin',
      description: 'Notre politique de confidentialité',
    },
    title: 'Politique de confidentialité',
    content: `
# Politique de confidentialité

## Introduction
Asking Franklin s'engage à protéger votre vie privée et vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).

## Données collectées
Nous collectons les données suivantes :
- **Données d'identification** : nom, prénom, adresse email
- **Données de connexion** : adresse IP, logs de navigation
- **Données d'utilisation** : contenus créés, préférences d'utilisation

## Finalités du traitement
Vos données sont utilisées pour :
- Fournir et améliorer nos services
- Gérer votre compte utilisateur
- Vous contacter concernant votre utilisation du service
- Améliorer notre plateforme grâce aux analyses d'utilisation

## Base légale
Le traitement de vos données repose sur :
- L'exécution du contrat (fourniture du service)
- Votre consentement (newsletter, cookies)
- Nos intérêts légitimes (amélioration du service)

## Conservation des données
Vos données sont conservées pendant la durée de votre abonnement et jusqu'à 3 ans après la fin de votre compte.

## Vos droits
Vous disposez des droits suivants :
- **Droit d'accès** : obtenir une copie de vos données
- **Droit de rectification** : corriger vos données inexactes
- **Droit à l'effacement** : supprimer vos données
- **Droit à la portabilité** : récupérer vos données dans un format structuré
- **Droit d'opposition** : vous opposer au traitement de vos données

Pour exercer vos droits, contactez-nous à : privacy@askingfranklin.com

## Sécurité
Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données.

## Cookies
Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences dans les paramètres de votre navigateur.

## Modifications
Cette politique peut être modifiée. La version à jour est toujours disponible sur notre site.

## Contact
Pour toute question : privacy@askingfranklin.com
    `,
  },
  
  footer: {
    description: 'L\'assistant IA qui booste la visibilité de vos contenus pour ranker dans les LLMs ET Google.',
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
