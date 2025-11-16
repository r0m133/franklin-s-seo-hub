import { Layout } from '@/components/Layout';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';

interface LegalPageProps {
  lang: Language;
  content: SiteContent;
  type: 'terms' | 'legalNotice' | 'privacyPolicy';
}

export const LegalPage = ({ lang, content, type }: LegalPageProps) => {
  const pageContent = content[type];
  
  const pathMap = {
    terms: lang === 'fr' ? '/fr/cgv-cgu' : '/terms',
    legalNotice: lang === 'fr' ? '/fr/mentions-legales' : '/legal-notice',
    privacyPolicy: lang === 'fr' ? '/fr/politique-de-confidentialite' : '/privacy-policy',
  };

  return (
    <Layout
      lang={lang}
      content={content}
      metaTitle={pageContent.meta.title}
      metaDescription={pageContent.meta.description}
      currentPath={pathMap[type]}
    >
      <article className="container max-w-4xl py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
          {pageContent.title}
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-foreground">{pageContent.content}</div>
        </div>
      </article>
    </Layout>
  );
};
