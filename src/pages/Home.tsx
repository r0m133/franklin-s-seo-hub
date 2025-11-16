import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import type { Language } from '@/lib/i18n';
import type { SiteContent } from '@/content/types';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  lang: Language;
  content: SiteContent;
}

export const Home = ({ lang, content }: HomeProps) => {
  const currentPath = lang === 'fr' ? '/fr' : '/';

  return (
    <Layout
      lang={lang}
      content={content}
      metaTitle={content.home.meta.title}
      metaDescription={content.home.meta.description}
      currentPath={currentPath}
    >
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            {content.home.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {content.home.hero.subtitle}
          </p>
          <Button size="lg" asChild>
            <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
              {content.home.hero.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id={content.home.howItWorks.anchor} className="border-t border-border bg-muted/50 py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            {content.home.howItWorks.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {content.home.howItWorks.steps.map((step) => (
              <Card key={step.number} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-bold">
                    {step.number}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id={content.home.faq.anchor} className="container py-24">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
          {content.home.faq.title}
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {content.home.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-accent border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary text-primary-foreground">
                {lang === 'fr' ? '📧 Newsletter exclusive' : '📧 Exclusive newsletter'}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {lang === 'fr' ? 'La Dépêche - Newsletter SEO' : 'The Dispatch - SEO Newsletter'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {lang === 'fr' ? 'Recevez chaque semaine nos meilleurs conseils SEO, des études de cas exclusives et les dernières tendances en content marketing.' : 'Receive our best SEO tips, exclusive case studies and the latest content marketing trends every week.'}
              </p>
              <ul className="space-y-3">
                {[lang === 'fr' ? 'Conseils SEO actionnables' : 'Actionable SEO tips', lang === 'fr' ? 'Études de cas détaillées' : 'Detailed case studies', lang === 'fr' ? 'Tendances content marketing' : 'Content marketing trends', lang === 'fr' ? 'Outils et ressources gratuites' : 'Free tools and resources'].map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>

            <Card className="border-border shadow-xl">
              <CardHeader>
                <CardTitle>{lang === 'fr' ? 'Rejoignez La Dépêche' : 'Join The Dispatch'}</CardTitle>
                <CardDescription>
                  {lang === 'fr' ? 'Recevez nos conseils SEO directement dans votre boîte mail' : 'Get our SEO tips directly in your inbox'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NewsletterForm lang={lang} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            {lang === 'fr' ? 'Prêt à commencer ?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            {lang === 'fr'
              ? 'Créez du contenu SEO de qualité dès aujourd\'hui'
              : 'Create quality SEO content today'}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://app.askingfranklin.com/register" target="_blank" rel="noopener noreferrer">
              {content.home.hero.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};
