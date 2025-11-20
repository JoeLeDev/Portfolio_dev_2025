import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HeadSEO from "./Seo";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import GoogleAnalytics from "./components/GoogleAnalytics";

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
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
