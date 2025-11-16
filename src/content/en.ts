import type { SiteContent } from './types';

export const enContent: SiteContent = {
  siteName: 'Asking Franklin',
  siteDescription: 'AI Assistant for SEO Content',
  
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    blog: 'Blog',
    laDepeche: 'La Dépêche',
    cta: 'Start Free Trial',
  },
  
  home: {
    meta: {
      title: 'Asking Franklin - AI Assistant for SEO Content',
      description: 'Create high-quality SEO content with AI-powered assistance. Optimize your content strategy and boost your search rankings.',
    },
    hero: {
      title: 'AI-Powered SEO Content Creation',
      subtitle: 'Create optimized content that ranks. Let our AI assistant help you write compelling, SEO-friendly content faster.',
      cta: 'Start Free Trial',
    },
    howItWorks: {
      title: 'How It Works',
      anchor: 'how-it-works',
      steps: [
        {
          number: '1',
          title: 'Define Your Topic',
          description: 'Tell Franklin what you want to write about and your target keywords.',
        },
        {
          number: '2',
          title: 'Get AI Suggestions',
          description: 'Receive intelligent content suggestions optimized for SEO and your audience.',
        },
        {
          number: '3',
          title: 'Refine & Publish',
          description: 'Edit the content to match your voice and publish with confidence.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      anchor: 'faq',
      items: [
        {
          question: 'How does Asking Franklin help with SEO?',
          answer: 'Asking Franklin analyzes your topic and keywords to generate content that is optimized for search engines while remaining natural and engaging for readers.',
        },
        {
          question: 'Can I try it for free?',
          answer: 'Yes! We offer a free trial so you can experience the power of AI-assisted content creation.',
        },
        {
          question: 'What languages are supported?',
          answer: 'Asking Franklin supports multiple languages including English and French, with more coming soon.',
        },
      ],
    },
  },
  
  pricing: {
    meta: {
      title: 'Pricing - Asking Franklin',
      description: 'Choose the plan that fits your content creation needs. Flexible pricing for individuals and teams.',
    },
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the plan that works for you',
    plans: [
      {
        name: 'Starter',
        price: '29€',
        period: '/month',
        description: 'Perfect for individuals starting with SEO content',
        features: [
          '10 articles per month',
          'Basic SEO optimization',
          'Email support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Professional',
        price: '79€',
        period: '/month',
        description: 'For professionals and growing teams',
        features: [
          '50 articles per month',
          'Advanced SEO optimization',
          'Priority support',
          'Team collaboration',
        ],
        cta: 'Get Started',
        highlighted: true,
      },
    ],
  },
  
  terms: {
    meta: {
      title: 'Terms of Service - Asking Franklin',
      description: 'Terms and conditions of use',
    },
    title: 'Terms of Service',
    content: `
## 1. Acceptance of Terms
By accessing and using Asking Franklin, you accept and agree to be bound by the terms and provision of this agreement.

## 2. Use License
Permission is granted to temporarily use Asking Franklin for personal or commercial purposes.

## 3. Service Description
Asking Franklin provides AI-powered content creation tools for SEO optimization.

## 4. User Responsibilities
You are responsible for maintaining the confidentiality of your account and password.

## 5. Limitation of Liability
Asking Franklin shall not be liable for any indirect, incidental, special, consequential or punitive damages.
    `,
  },
  
  legalNotice: {
    meta: {
      title: 'Legal Notice - Asking Franklin',
      description: 'Legal information about our website',
    },
    title: 'Legal Notice',
    content: `
## Publisher Information
Asking Franklin
[Company Address]
[Registration Number]

## Hosting
This website is hosted by [Hosting Provider]
[Hosting Provider Address]

## Contact
Email: contact@askingfranklin.com
Phone: [Phone Number]
    `,
  },
  
  privacyPolicy: {
    meta: {
      title: 'Privacy Policy - Asking Franklin',
      description: 'How we protect and use your data',
    },
    title: 'Privacy Policy',
    content: `
## Data Collection
We collect information that you provide directly to us when using our services.

## Use of Data
Your data is used to provide and improve our services, communicate with you, and ensure security.

## Data Protection
We implement appropriate security measures to protect your personal information.

## Cookies
We use cookies to enhance your experience on our website.

## Your Rights
You have the right to access, modify, or delete your personal data at any time.

## Contact
For any questions about our privacy policy, contact us at privacy@askingfranklin.com
    `,
  },
  
  footer: {
    description: 'AI Assistant for SEO Content',
    links: [
      {
        title: 'Product',
        items: [
          { label: 'Features', href: '/#how-it-works' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'FAQ', href: '/#faq' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'Blog', href: 'https://blog.askingfranklin.com/' },
          { label: 'La Dépêche', href: 'https://ladepeche.askingfranklin.com/' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Legal Notice', href: '/legal-notice' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Asking Franklin. All rights reserved.`,
  },
};
