import type { CaseStudy } from "@/types/caseStudy";
import MyIccOnlineV2 from "@/assets/MyIccOnline.jpg";
import CapitaineDepan from "@/assets/CapitaineDepan.jpg";
import IccConges from "@/assets/IccConges.png";
import LogistiqueCite from "@/assets/LogistiqueCite.png";

export const caseStudies: CaseStudy[] = [
  {
    slug: "myicc-online-v2",
    projectId: "myicc-online-v2",
    title: "MyICC Online V2",
    summary:
      "Modernisation d'une plateforme communautaire vers Next.js et WordPress Headless, avec parcours membres et contenus dynamiques.",
    context:
      "Impact Centre Chrétien disposait d'une plateforme communautaire à faire évoluer pour améliorer l'expérience utilisateur et la maintenabilité.",
    need:
      "Proposer une interface web moderne tout en conservant WordPress pour la gestion éditoriale et certaines données métier.",
    role: [
      "Architecture front-end Next.js et intégration WordPress Headless (API REST)",
      "Développement des interfaces, authentification et parcours membres",
      "Intégration des contenus dynamiques, responsive, tests Playwright et mise en production",
    ],
    features: [
      "Espaces membres et profils",
      "Contenus et enseignements",
      "Actualités et contenus dynamiques",
      "Événements et activités communautaires",
      "Groupes / espaces communautaires",
    ],
    technicalChoices: [
      {
        title: "WordPress en mode Headless",
        detail:
          "WordPress centralise le contenu et les données CMS ; le front Next.js consomme l'API REST pour l'affichage.",
      },
      {
        title: "Next.js / React / TypeScript",
        detail:
          "Interface moderne, typée et évolutive, séparée du back-office WordPress.",
      },
      {
        title: "Playwright",
        detail: "Tests E2E pour sécuriser les parcours critiques avant mise en production.",
      },
    ],
    screenshots: [
      {
        src: MyIccOnlineV2,
        alt: "Vue de la plateforme MyICC Online V2",
        caption:
          "Page d'accueil V2 : parcours membres, formations, événements et missions communautaires.",
      },
    ],
    outcome:
      "Plateforme déployée et accessible publiquement, avec une architecture Headless documentée et des parcours membres opérationnels.",
    statusLabel: "En production",
    stack: ["Next.js", "React", "TypeScript", "WordPress REST API", "Playwright"],
    liveUrl: "https://myicconline.com",
    sourceCodeVisibility: "private",
  },
  {
    slug: "capitaine-depan",
    projectId: "capitaine-depan",
    title: "Capitaine Depan'",
    summary:
      "Site professionnel pour une entreprise de serrurerie, orienté prise de contact et présentation des services.",
    context:
      "Capitaine Depan' avait besoin d'une vitrine claire pour présenter ses services en Île-de-France.",
    need:
      "Faciliter les demandes d'intervention via une interface responsive et un parcours de contact simple.",
    role: [
      "Conception UI et intégration front-end",
      "Formulaire de devis / contact avec envoi d'emails (Resend)",
      "Optimisation SEO, cookies RGPD et déploiement Vercel",
    ],
    features: [
      "Hero et sections services",
      "Formulaire de devis par email",
      "Bouton d'appel mobile",
      "Bannière cookies et pages légales",
      "SEO (meta, Open Graph, schema.org)",
    ],
    technicalChoices: [
      {
        title: "React + Vite + TypeScript",
        detail: "Stack légère pour un site performant, facile à maintenir et à déployer.",
      },
      {
        title: "Resend",
        detail: "Envoi des demandes de devis par email via une API serverless sur Vercel.",
      },
      {
        title: "Tailwind CSS",
        detail: "Mise en page responsive cohérente sur mobile et desktop.",
      },
    ],
    screenshots: [
      {
        src: CapitaineDepan,
        alt: "Capture du site Capitaine Depan'",
        caption: "Page d'accueil et parcours de contact.",
      },
    ],
    outcome: "Site client en production sur capitainedepan.com.",
    statusLabel: "En production",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Resend", "Vercel"],
    liveUrl: "https://www.capitainedepan.com/",
    sourceCodeVisibility: "private",
  },
  {
    slug: "icc-conges",
    projectId: "icc-conges",
    title: "ICC Congés",
    summary:
      "Application métier de gestion et validation des congés avec rôles, workflows et tableaux de bord.",
    context:
      "Impact Centre Chrétien devait structurer les demandes de congés entre employés, managers, RH et direction.",
    need:
      "Centraliser les demandes, appliquer des règles de validation et offrir des vues adaptées à chaque rôle.",
    role: [
      "Développement full stack (Next.js, Supabase)",
      "Authentification, rôles et MFA pour profils sensibles",
      "Workflows de validation, relances automatiques et tests E2E Playwright",
    ],
    features: [
      "Tableau de bord employé (soldes, demandes)",
      "Workflow employé → manager → RH → direction",
      "Espaces manager, RH, direction et admin",
      "Relances automatiques (cron)",
    ],
    technicalChoices: [
      {
        title: "Next.js + Supabase",
        detail: "Application full stack avec PostgreSQL, auth et règles d'accès côté base (RLS).",
      },
      {
        title: "Rôles et MFA",
        detail: "Séparation des espaces selon le profil ; MFA pour RH, direction et admin.",
      },
      {
        title: "Playwright",
        detail: "Tests E2E sur les parcours de validation et d'authentification.",
      },
    ],
    screenshots: [
      {
        src: IccConges,
        alt: "Tableau de bord ICC Congés",
        caption:
          "Vue tableau de bord. Remplacer par une capture anonymisée si diffusion publique (données visibles).",
      },
    ],
    outcome: "Application interne utilisée en production au sein de l'organisation.",
    statusLabel: "Usage interne",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Playwright", "Vercel"],
    sourceCodeVisibility: "private",
  },
  {
    slug: "logistique-cite",
    projectId: "logistique-cite",
    title: "Logistique Cité",
    summary:
      "PWA de gestion des sorties et retours de mobilier avec stocks et usage terrain.",
    context:
      "Gestion des emprunts de tables et mange-debout avec suivi des stocks et utilisation sur le terrain.",
    need:
      "Enregistrer sorties et retours rapidement, même avec une connectivité intermittente.",
    role: [
      "Développement front-end PWA (Vite, React)",
      "Parcours emprunt / retour et synchronisation hors ligne",
      "Intégration Supabase Auth et gestion admin des stocks",
    ],
    features: [
      "Sélection du type de mobilier",
      "Formulaires sortie et retour",
      "Stocks mis à jour automatiquement",
      "Mode hors ligne avec synchro à la reconnexion",
      "Espace admin pour ajuster les stocks",
    ],
    technicalChoices: [
      {
        title: "PWA",
        detail: "Usage mobile sur le terrain avec persistance locale et synchro à la reconnexion.",
      },
      {
        title: "Supabase",
        detail: "Auth, données PostgreSQL et API pour les opérations de stock.",
      },
      {
        title: "Vite + React + TypeScript",
        detail: "Application légère, typée, déployée sur Vercel.",
      },
    ],
    screenshots: [
      {
        src: LogistiqueCite,
        alt: "Interface Logistique Cité",
        caption: "Accueil et sélection du mobilier.",
      },
    ],
    outcome: "Application interne en production pour la gestion logistique.",
    statusLabel: "Usage interne",
    stack: ["Vite", "React", "TypeScript", "PWA", "Supabase", "Vercel"],
    sourceCodeVisibility: "private",
  },
];

export const caseStudySlugs = new Set(caseStudies.map((study) => study.slug));

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);

export const hasCaseStudy = (projectId: string): boolean =>
  caseStudies.some((study) => study.projectId === projectId);

export const getNextCaseStudy = (slug: string): CaseStudy | undefined => {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index < 0 || index >= caseStudies.length - 1) {
    return undefined;
  }
  return caseStudies[index + 1];
};
