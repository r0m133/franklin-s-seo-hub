import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { LegalPage } from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import { getContent } from "@/lib/i18n";

const queryClient = new QueryClient();

const App = () => {
  const enContent = getContent('en');
  const frContent = getContent('fr');

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* English routes */}
              <Route path="/" element={<Home lang="en" content={enContent} />} />
              <Route path="/pricing" element={<Pricing lang="en" content={enContent} />} />
              <Route path="/terms" element={<LegalPage lang="en" content={enContent} type="terms" />} />
              <Route path="/legal-notice" element={<LegalPage lang="en" content={enContent} type="legalNotice" />} />
              <Route path="/privacy-policy" element={<LegalPage lang="en" content={enContent} type="privacyPolicy" />} />
              
              {/* French routes */}
              <Route path="/fr" element={<Home lang="fr" content={frContent} />} />
              <Route path="/fr/tarifs" element={<Pricing lang="fr" content={frContent} />} />
              <Route path="/fr/cgv-cgu" element={<LegalPage lang="fr" content={frContent} type="terms" />} />
              <Route path="/fr/mentions-legales" element={<LegalPage lang="fr" content={frContent} type="legalNotice" />} />
              <Route path="/fr/politique-de-confidentialite" element={<LegalPage lang="fr" content={frContent} type="privacyPolicy" />} />
              
              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
