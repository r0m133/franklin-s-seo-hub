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
      title: 'Asking Franklin – L\'assistant qui révolutionne vos contenus SEO',
      description: 'Asking Franklin analyse les intentions de recherche et identifie les opportunités SEO pour booster la visibilité de vos contenus dans les LLMs ET Google.',
    },
    hero: {
      title: 'Le meilleur assistant IA pour rédiger vos contenus SEO',
      subtitle: 'Vous passez des heures à créer du contenu... sans générer le trafic que vous méritez ?',
      description: 'Asking Franklin est l\'assistant IA de rédaction SEO qui change la donne. Notre outil analyse ce que cherchent réellement vos clients, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans Google ET deviennent des sources de référence pour les IA génératives comme ChatGPT, Perplexity et Gemini.',
      cta: "Je teste gratuitement",
      videoUrl: "https://youtu.be/ZB95aUZp-Hs",
    },
    socialProof: {
      title: 'Rejoignez + de 300 rédacteurs, entrepreneurs et agences',
      logos: [
        { name: 'Pikka', image: '/logos/logo-pikka.png' },
        { name: 'Sud Ouest', image: '/logos/Logo_SUDOUEST.png' },
        { name: 'Kaboom Kitchen', image: '/logos/logo-kaboom-kitchen.png' },
        { name: 'Urgo', image: '/logos/Logo-urgo-5.png' },
        { name: '3D Natives', image: '/logos/logo-3D-Natives-3.png' },
        { name: 'French Tech', image: '/logos/logo-french-tech-1-4.png' },
        { name: 'Argos Vétérinaire', image: '/logos/logo_argos_veterinaire_normal.png' },
        { name: 'JDC', image: '/logos/jdc_logo-1.png' },
      ],
    },
    testimonials: {
      title: 'Ils utilisent Asking Franklin comme assistant IA pour rédiger leurs contenus SEO et ils l\'adorent :',
      items: [
        {
          name: 'Quentin BARJON',
          role: 'CMO - JDC',
          image: '/testimonials/quentin-barjon-JDC.jpeg',
          rating: 5,
          quote: 'Asking Franklin est vite devenu un incontournable pour notre stratégie SEO. L\'outil est simple, clair et hyper pratique : il analyse tes mots-clés, les prend en compte et rédige pour toi des contenus optimisés et structurés. Un vrai gain de temps au quotidien.',
        },
        {
          name: 'Marlet KERVOLIN',
          role: 'CEO - Kaboom Kitchen',
          image: '/testimonials/marlet-kervolin-kaboom-kitchen.jpeg',
          rating: 5,
          quote: 'Asking Franklin est parfait pour gagner du temps sur sa rédaction d\'article de blog. Je n\'ai plus besoin de passer des heures pour obtenir des articles qualitatifs, l\'IA me permet d\'avoir un texte cohérent et pertinent quant à ma niche, bien plus rapidement. L\'outil m\'aide également pour la recherche de mots clés donc je sais que j\'écris sur des sujets que ma cible recherche.',
        },
        {
          name: 'Benoit GAILLAT',
          role: 'CEO - Agence Pikka',
          image: '/testimonials/benoit-Gaillat-Pikka-agence-ecommerce.jpeg',
          rating: 5,
          quote: 'L\'outil Asking Franklin est un véritable assistant qui m\'aide à rédiger du contenu de qualité et qui rank. Avoir la possibilité de lui fournir des instructions précises sur mes cibles et mon contexte est vraiment game-changer pour moi !',
        },
      ],
    },
    howItWorks: {
      title: 'Ok, concrètement comment ça marche ?',
      subtitle: 'Asking Franklin booste la visibilité de vos contenus en combinant intentions de recherche, analyse des SERPs, de la concurrence et optimisation SEO pour ranker dans les LLMs ET Google.',
      anchor: 'comment-ca-marche',
      features: [
        {
          icon: 'star',
          title: 'Analyse d\'intention de recherche en temps réel',
          description: 'Découvrez exactement ce que cherchent vos clients pour écrire juste !',
        },
        {
          icon: 'searchengin',
          title: 'Optimisation multi-LLMs',
          description: 'Devenez des sources incontournables pour ChatGPT, Claude, Perplexity, Gemini...',
        },
        {
          icon: 'hourglass-start',
          title: 'Génération ultra-rapide',
          description: 'Economisez 80% de votre temps en laissant Asking Franklin rédiger pour vous !',
        },
        {
          icon: 'comment',
          title: 'Un assistant pré-entraîné pour vous',
          description: 'Une partie du contenu généré ne vous convient pas ? Vous souhaitez donner vos propres instructions, apporter des modifications ? Dites le et Franklin notre IA s\'adaptera.',
        },
        {
          icon: 'hand-sparkles',
          title: 'Optimisations SEO',
          description: 'Optimisation E-E-A-T, structure sémantique et balisage technique pour maximiser votre visibilité.',
        },
      ],
      process: {
        heading1: 'Déjà une idée d\'article ?',
        heading2: 'Demandez à Franklin de le rédiger pour vous !',
        heading3: 'Syndrome de la page blanche ?',
        heading4: 'Rentrez votre sujet de prédilection et découvrez ce que recherchent les internautes à ce sujet, puis rédigez les meilleurs articles !',
        steps: [
          {
            number: '1',
            title: 'Tapez le mot-clé que vous avez choisi',
            description: 'Asking Franklin ira chercher toutes les questions, les recherches et sujets connexes en relation avec ce dernier. Incontournable pour optimiser votre création de contenu, de produits et de services en vous basant sur ce que veulent vos clients.',
            image: '/process/Idees-sujet-mot-cles-Asking-Franklin.jpg',
            cta: 'Je teste gratuitement',
            ctaUrl: 'https://app.askingfranklin.com/register?utm_source=site&utm_medium=step&utm_campaign=test_now',
          },
          {
            number: '2',
            title: 'Asking Franklin analyse le top de la SERP',
            description: 'Rien de tel que des concurrents mieux positionnés sur le mot-clé choisi pour déterminer des opportunités seo et s\'en saisir pour rédiger des contenus qui convertissent ! Franklin, votre assistant IA de rédaction s\'en charge pour vous.',
            image: '/process/Analyse-de-la-Serp-Asking-Franklin.jpg',
          },
          {
            number: '3',
            title: 'Asking Franklin vous rédige un plan d\'article SEO optimisé',
            description: 'Basé vraiment sur l\'analyse de l\'intention de recherche puis des meilleurs contenus du top de la Serp, Asking Franklin vous rédige un plan d\'article complet et détaillé. Ce même plan est basé sur l\'analyse des résultats de recherche, des formats et de la sémantique des contenus positionnés. L\'IA identifie ensuite des opportunités sous-exploitées pour produire un plan optimisé.',
            image: '/process/Plan-article-seo-optimise-Asking-Franklin.jpg',
          },
          {
            number: '4',
            title: 'Asking Franklin génère votre article optimisé SEO et GEO',
            description: 'A partir du plan d\'article, Franklin rédige automatiquement vos contenus en prenant en compte vos retours et les optimisations nécessaires pour se positionner. Vous préférez rédiger vous-même certaines parties, rajouter des sources, développer certains paragraphes ? Demandez le à Franklin.',
            image: '/process/Article-redige-assistant-ia-seo-chat-asking-franklin.jpg',
            cta: 'Je laisse Franklin écrire mon prochain article',
            ctaUrl: 'https://app.askingfranklin.com/register?utm_source=site&utm_medium=step&utm_campaign=write_article',
          },
        ],
      },
    },
    blog: {
      title: 'Ah et bien sûr nous utilisons Franklin pour notre propre blog',
      articles: [
        {
          title: '3 secrets pour devenir un excellent rédacteur en 2025.',
          image: '/blog/3-secrets-pour-devenir-un-excellent-redacteur-en-2025.jpg',
          url: 'https://blog.askingfranklin.com/3-secrets-pour-devenir-un-excellent-redacteur/',
        },
        {
          title: 'Contenu evergreen : 5 conseils pour un contenu durable.',
          image: '/blog/5-conseils-pour-creer-un-contenu-evergreen.png',
          url: 'https://blog.askingfranklin.com/5-conseils-pour-un-contenu-evergreen/',
        },
        {
          title: 'Venez lire nos autres article sur le content marketing et le seo',
          image: '/blog/Lire-blog-asking-franklin.png',
          url: 'https://blog.askingfranklin.com/',
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
          answer: 'L\'une des principales forces de l\'outil réside dans sa capacité conversationnelle. Vous pouvez apporter votre expertise sur le sujet à n\'importe quelle étape de la création de votre contenu. Donner des instructions précises, des détails sur vos cibles, le ton à adopter... Asking Franklin en tiendra compte et apprendra au fur et à mesure.',
        },
        {
          question: 'Est-ce que les contenus générés par IA sont pénalisés ?',
          answer: 'Un contenu généré par IA n\'est pas pénalisé par défaut si ce dernier apporte une réelle expertise et des informations vérifiées. Il faut que ce dernier réponde véritablement aux questions que se posent les internautes. Lisez ce billet de Google à ce sujet : https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search?hl=fr',
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
    description: 'Asking Franklin c\'est l\'assistant IA qui booste la visibilité de vos contenus pour ranker dans les LLMs ET Google.',
    newsletter: {
      title: 'La Dépêche',
      description: 'En soumettant ce formulaire, j\'indique vouloir recevoir La Dépêche d\'Asking Franklin pour bénéficier mensuellement de nouveaux tips concoctés par l\'équipe.',
      firstNamePlaceholder: 'Arnaud',
      firstNameLabel: 'Votre prénom',
      emailPlaceholder: 'arnaud.dupont@domaine.fr',
      emailLabel: 'Votre adresse mail',
      ctaButton: 'S\'inscrire à la Dépêche',
    },
    social: {
      linkedin: 'https://www.linkedin.com/company/asking-franklin',
    },
    links: [
      {
        title: 'Liens utiles',
        items: [
          { label: 'Comment ça marche ?', href: '#comment-ca-marche' },
          { label: 'Tarifs', href: '/tarifs' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Blog', href: 'https://blog.askingfranklin.com/' },
          { label: 'La Dépêche 🎁', href: 'https://ladepeche.askingfranklin.com/' },
        ],
      },
    ],
    copyright: `© Asking Franklin 2025`,
  },
};
