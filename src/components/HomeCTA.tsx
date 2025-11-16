import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HomeCTAProps {
  title: string;
  subtitle: string;
  cta: string;
}

export const HomeCTA = ({ title, subtitle, cta }: HomeCTAProps) => {
  return (
    <section className="border-t border-border bg-primary py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8">
          {subtitle}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};
