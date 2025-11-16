import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/services/brevo';
import { ArrowRight, Loader2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Le prénom doit contenir au moins 2 caractères',
  }),
  email: z.string().email({
    message: 'Veuillez entrer une adresse email valide',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface NewsletterFormProps {
  lang: 'fr' | 'en';
}

export function NewsletterForm({ lang }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      await subscribeToNewsletter({
        email: data.email,
        firstName: data.firstName,
      });

      toast({
        title: lang === 'fr' ? '✓ Inscription réussie !' : '✓ Subscription successful!',
        description:
          lang === 'fr'
            ? 'Merci de vous être inscrit à La Dépêche. Vérifiez votre email pour confirmer votre inscription.'
            : 'Thank you for subscribing to The Dispatch. Check your email to confirm your subscription.',
      });

      form.reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);

      toast({
        variant: 'destructive',
        title: lang === 'fr' ? '✗ Erreur' : '✗ Error',
        description:
          error instanceof Error
            ? error.message
            : lang === 'fr'
            ? 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
            : 'An error occurred during subscription. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const labels = {
    fr: {
      firstName: 'Prénom',
      email: 'Adresse email',
      submit: 'S\'inscrire gratuitement',
      privacy: 'En vous inscrivant, vous acceptez de recevoir nos emails. Désinscription possible à tout moment.',
    },
    en: {
      firstName: 'First name',
      email: 'Email address',
      submit: 'Subscribe for free',
      privacy: 'By signing up, you agree to receive our emails. Unsubscribe at any time.',
    },
  };

  const t = labels[lang];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.firstName}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder={t.firstName}
                  disabled={isSubmitting}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.email}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder={t.email}
                  disabled={isSubmitting}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full shadow-primary"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {lang === 'fr' ? 'Inscription...' : 'Subscribing...'}
            </>
          ) : (
            <>
              {t.submit}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">{t.privacy}</p>
      </form>
    </Form>
  );
}
