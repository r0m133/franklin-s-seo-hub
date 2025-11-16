import { Button } from '@/components/ui/button';
import { LanguageSwitcherAstro } from '@/components/LanguageSwitcherAstro';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  lang: Language;
  content: SiteContent;
  currentPath: string;
}

export const HeaderAstro = ({ lang, content, currentPath }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeUrl = lang === 'fr' ? '/fr' : '/';
  const pricingUrl = lang === 'fr' ? '/fr/tarifs' : '/pricing';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href={homeUrl} className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">{content.siteName}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a href={homeUrl} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {content.nav.home}
          </a>
          <a href={pricingUrl} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {content.nav.pricing}
          </a>
          <a
            href="https://blog.askingfranklin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {content.nav.blog}
          </a>
          <a
            href="https://ladepeche.askingfranklin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {content.nav.laDepeche}
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcherAstro currentLang={lang} currentPath={currentPath} />
          <Button asChild>
            <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
              {content.nav.cta}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-border bg-background p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href={homeUrl}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.home}
              </a>
              <a
                href={pricingUrl}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.pricing}
              </a>
              <a
                href="https://blog.askingfranklin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {content.nav.blog}
              </a>
              <a
                href="https://ladepeche.askingfranklin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {content.nav.laDepeche}
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <LanguageSwitcherAstro currentLang={lang} currentPath={currentPath} />
                <Button asChild className="w-full">
                  <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                    {content.nav.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
