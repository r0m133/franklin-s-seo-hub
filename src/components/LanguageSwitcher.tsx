import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getAlternateUrl, type Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
}

export const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const switchLanguage = () => {
    const targetLang: Language = currentLang === 'en' ? 'fr' : 'en';
    const newPath = getAlternateUrl(location.pathname, targetLang);
    navigate(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="flex items-center gap-2"
      aria-label={currentLang === 'en' ? 'Switch to French' : 'Passer en anglais'}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{currentLang === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
};
