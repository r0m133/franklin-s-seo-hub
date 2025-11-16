import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

export const HomeHero = ({ title, subtitle, cta }: HomeHeroProps) => {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {subtitle}
        </p>
        <Button size="lg" asChild>
          <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};
