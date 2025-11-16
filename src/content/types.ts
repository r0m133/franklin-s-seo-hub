export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Logo {
  name: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  cta?: string;
  ctaUrl?: string;
}

export interface BlogArticle {
  title: string;
  image: string;
  url: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface SiteContent {
  // Meta
  siteName: string;
  siteDescription: string;
  
  // Navigation
  nav: {
    home: string;
    pricing: string;
    blog: string;
    laDepeche: string;
    cta: string;
  };
  
  // Home page
  home: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
      videoUrl: string;
    };
    socialProof: {
      title: string;
      logos: Logo[];
    };
    testimonials: {
      title: string;
      items: Testimonial[];
    };
    howItWorks: {
      title: string;
      subtitle: string;
      anchor: string;
      features: Feature[];
      process: {
        heading1: string;
        heading2: string;
        heading3: string;
        heading4: string;
        steps: ProcessStep[];
      };
    };
    blog: {
      title: string;
      articles: BlogArticle[];
    };
    faq: {
      title: string;
      anchor: string;
      items: FAQItem[];
    };
  };
  
  // Pricing page
  pricing: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  
  // Legal pages
  terms: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    content: string;
  };
  
  legalNotice: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    content: string;
  };
  
  privacyPolicy: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    content: string;
  };
  
  // Footer
  footer: {
    description: string;
    newsletter: {
      title: string;
      description: string;
      firstNamePlaceholder: string;
      firstNameLabel: string;
      emailPlaceholder: string;
      emailLabel: string;
      ctaButton: string;
    };
    social: {
      linkedin: string;
    };
    links: {
      title: string;
      items: Array<{ label: string; href: string }>;
    }[];
    copyright: string;
  };
}
