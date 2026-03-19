import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Récupère l'ID Google Analytics depuis les variables d'environnement
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

// Fonction pour envoyer un événement page_view à GA4
const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Composant interne qui utilise useLocation (doit être dans BrowserRouter)
export const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track les changements de page
    if (GA_MEASUREMENT_ID) {
      pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  return null;
};

// Composant principal qui charge les scripts GA4
const GoogleAnalytics = () => {

  // Ne rien afficher si l'ID GA n'est pas configuré
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <Helmet>
      {/* Script Google Analytics (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;

