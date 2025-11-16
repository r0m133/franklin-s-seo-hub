import { Helmet } from 'react-helmet-async';
import { getAlternateUrl, type Language } from '@/lib/i18n';

interface SEOProps {
  title: string;
  description: string;
  lang: Language;
  currentPath: string;
}

export const SEO = ({ title, description, lang, currentPath }: SEOProps) => {
  const baseUrl = 'https://askingfranklin.com';
  const canonicalUrl = `${baseUrl}${currentPath}`;
  const alternateUrl = `${baseUrl}${getAlternateUrl(currentPath, lang === 'en' ? 'fr' : 'en')}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${getAlternateUrl(currentPath, 'en')}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}${getAlternateUrl(currentPath, 'fr')}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${getAlternateUrl(currentPath, 'en')}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'fr' ? 'en_US' : 'fr_FR'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
