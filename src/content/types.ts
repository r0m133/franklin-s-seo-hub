export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
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
      cta: string;
    };
    howItWorks: {
      title: string;
      anchor: string;
      steps: HowItWorksStep[];
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
    links: {
      title: string;
      items: Array<{ label: string; href: string }>;
    }[];
    copyright: string;
  };
}
