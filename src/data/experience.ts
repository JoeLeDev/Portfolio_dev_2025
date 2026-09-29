export interface ExperienceItem {
  id: string;
  orgShort: string;
  role: string;
  company: string;
  period: string;
  status?: string;
  description: string;
  contributions: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "icc-dev-web",
    orgShort: "ICC",
    role: "Développeur web",
    company: "Impact Centre Chrétien",
    period: "2026 à aujourd'hui",
    status: "Alternance",
    description:
      "Développement et maintenance d'applications web utilisées au quotidien par l'organisation.",
    contributions: [
      "Évolution de MyICC Online V2 (Next.js, WordPress Headless)",
      "Développement d'ICC Congés (workflows, auth, Supabase)",
      "Application Logistique Cité (stocks, hors ligne)",
    ],
  },
  {
    id: "joelabs-freelance",
    orgShort: "JoeLabs",
    role: "Sites & applications web",
    company: "Conception et développement pour entreprises et indépendants.",
    period: "Freelance",
    status: "Projets clients",
    description:
      "Conception et développement de sites et applications sur mesure pour entreprises et indépendants.",
    contributions: [
      "Site Capitaine Depan' (React, Vite, Resend, SEO, mise en production)",
      "Intégration UI, formulaires de contact et emails transactionnels",
      "Déploiement Vercel pour les livraisons clients",
    ],
  },
];
