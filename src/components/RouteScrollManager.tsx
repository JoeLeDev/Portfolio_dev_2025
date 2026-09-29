import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection";

/**
 * Coordonne le scroll avec le routage SPA :
 * - études de cas : haut de page à chaque slug
 * - accueil + hash : section cible (sans écraser via un scroll top global)
 */
const RouteScrollManager = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const hashId = location.hash.replace(/^#/, "");

    if (location.pathname.startsWith("/projets/")) {
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === "/" && hashId) {
      if (!scrollToSection(hashId)) {
        requestAnimationFrame(() => {
          scrollToSection(hashId);
        });
      }
    }
  }, [location.pathname, location.hash, location.key]);

  return null;
};

export default RouteScrollManager;
