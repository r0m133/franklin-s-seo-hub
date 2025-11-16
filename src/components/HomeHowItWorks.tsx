import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HomeHowItWorksProps {
  title: string;
  anchor: string;
  steps: Step[];
}

export const HomeHowItWorks = ({ title, anchor, steps }: HomeHowItWorksProps) => {
  return (
    <section id={anchor} className="border-t border-border bg-muted/50 py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
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
  );
};
