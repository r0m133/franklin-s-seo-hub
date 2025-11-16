import { Button } from '@/components/ui/button';
import { getAlternateUrl, type Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  currentPath: string;
}

export const LanguageSwitcherAstro = ({ currentLang, currentPath }: LanguageSwitcherProps) => {
  const targetLang: Language = currentLang === 'en' ? 'fr' : 'en';
  const newPath = getAlternateUrl(currentPath, targetLang);

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-2"
      aria-label={currentLang === 'en' ? 'Switch to French' : 'Passer en anglais'}
      asChild
    >
      <a href={newPath}>
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLang === 'en' ? 'FR' : 'EN'}</span>
      </a>
    </Button>
  );
};
