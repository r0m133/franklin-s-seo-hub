import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';

interface LayoutProps {
  children: ReactNode;
  lang: Language;
  content: SiteContent;
  metaTitle: string;
  metaDescription: string;
  currentPath: string;
}

export const Layout = ({ children, lang, content, metaTitle, metaDescription, currentPath }: LayoutProps) => {
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} lang={lang} currentPath={currentPath} />
      <div className="flex min-h-screen flex-col">
        <Header lang={lang} content={content} />
        <main className="flex-1">{children}</main>
        <Footer content={content} />
      </div>
    </>
  );
};
