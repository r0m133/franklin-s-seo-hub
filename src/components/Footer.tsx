import { Link } from 'react-router-dom';
import type { SiteContent } from '@/content/types';

interface FooterProps {
  content: SiteContent;
}

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-4">{content.siteName}</h3>
            <p className="text-sm text-muted-foreground">{content.footer.description}</p>
          </div>
          
          {content.footer.links.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
