import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyPage from "./pages/CaseStudyPage";
import HeadSEO from "./Seo";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import GoogleAnalytics from "./components/GoogleAnalytics";
import RouteScrollManager from "./components/RouteScrollManager";

const queryClient = new QueryClient();


const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HeadSEO />
        <GoogleAnalytics />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteScrollManager />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projets/:slug" element={<CaseStudyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
