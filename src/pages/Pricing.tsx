import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { Check } from 'lucide-react';

interface PricingProps {
  lang: Language;
  content: SiteContent;
}

export const Pricing = ({ lang, content }: PricingProps) => {
  const currentPath = lang === 'fr' ? '/fr/tarifs' : '/pricing';

  return (
    <Layout
      lang={lang}
      content={content}
      metaTitle={content.pricing.meta.title}
      metaDescription={content.pricing.meta.description}
      currentPath={currentPath}
    >
      <section className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            {content.pricing.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {content.pricing.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {content.pricing.plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={plan.highlighted ? 'border-primary shadow-lg' : 'border-border'}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};
