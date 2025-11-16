import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface HomeFAQProps {
  title: string;
  anchor: string;
  items: FAQItem[];
}

export const HomeFAQ = ({ title, anchor, items }: HomeFAQProps) => {
  return (
    <section id={anchor} className="container py-24">
      <h2 className="text-3xl font-bold text-center text-foreground mb-16">
        {title}
      </h2>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
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
  );
};
