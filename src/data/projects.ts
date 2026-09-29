import type { Project } from "@/types/project";
import CapitaineDepan from "@/assets/CapitaineDepan.jpg";
import IccConges from "@/assets/IccConges.png";
import BikeSense from "@/assets/Bikesense.jpg";
import LogistiqueCite from "@/assets/LogistiqueCite.png";
import AdvalisSaaS from "@/assets/Advalis.jpg";
import RetourEnEden from "@/assets/RetourEnEden.jpg";
import MyIccOnlineV2 from "@/assets/MyIccOnline.jpg";

export const projects: Project[] = [
  {
    id: "myicc-online-v2",
    title: "MyICC Online V2",
    type: "product",
    typeLabel: "Plateforme communautaire",
    status: "production",
    statusLabel: "En production",
    context:
      "Plateforme communautaire existante à moderniser pour offrir une expérience web plus performante, évolutive et centrée sur les membres.",
    description:
      "Refonte d'une plateforme communautaire avec espaces membres, contenus dynamiques et événements. Interface Next.js / React connectée à WordPress via son API REST.",
    architectureNote:
      "WordPress gère le contenu et les données CMS · Next.js / React porte l'expérience front-end via l'API REST.",
    role: [
      "Architecture front-end et intégration WordPress Headless",
      "Développement des interfaces et des parcours membres",
      "Responsive, tests et mise en production",
    ],
    stack: ["Next.js", "React", "TypeScript", "WordPress REST API", "Playwright"],
    image: MyIccOnlineV2,
    liveUrl: "https://myicconline.com",
    sourceCodeVisibility: "private",
    featured: true,
    highlight: true,
  },
  {
    id: "capitaine-depan",
    title: "Capitaine Depan'",
    type: "client",
    typeLabel: "Projet client",
    status: "production",
    statusLabel: "En production",
    context:
      "Entreprise de serrurerie en Île-de-France, besoin d'une présence en ligne claire pour présenter les services et faciliter les demandes d'intervention.",
    description:
      "Un site responsive pour présenter les services d'un artisan et faciliter la prise de contact.",
    role: [
      "Conception UI et développement front-end",
      "Formulaire de contact, emails et déploiement",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Resend", "Vercel"],
    image: CapitaineDepan,
    liveUrl: "https://www.capitainedepan.com/",
    sourceCodeVisibility: "private",
    featured: true,
  },
  {
    id: "icc-conges",
    title: "ICC Congés",
    type: "professional",
    typeLabel: "Application métier",
    status: "internal",
    statusLabel: "Usage interne",
    context:
      "Organisation avec plusieurs rôles (employés, managers, RH, direction) et un processus de validation des congés à structurer.",
    description:
      "Demandes de congés, validation à plusieurs niveaux et tableaux de bord adaptés aux rôles.",
    role: [
      "Développement full stack et logique métier",
      "Auth, rôles (MFA) et tests E2E Playwright",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Playwright", "Vercel"],
    image: IccConges,
    sourceCodeVisibility: "private",
    featured: true,
  },
  {
    id: "bikesense",
    title: "BikeSense",
    type: "iot",
    typeLabel: "Application IoT",
    status: "demo",
    statusLabel: "Projet technique",
    context:
      "Boutique de vélos souhaitant suivre l'environnement de stockage et réagir rapidement aux alertes.",
    description:
      "Dashboard connecté pour visualiser les données de capteurs.",
    role: [
      "Développement front-end du dashboard",
      "Intégration des flux de données et authentification",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MQTT", "Auth JWT"],
    image: BikeSense,
    githubUrl: "https://github.com/JoeLeDev/BikeSense",
    sourceCodeVisibility: "public",
    featured: false,
  },
  {
    id: "logistique-cite",
    title: "Logistique Cité",
    type: "professional",
    typeLabel: "Application métier",
    status: "internal",
    statusLabel: "Usage interne",
    context:
      "Gestion des sorties et retours de mobilier avec suivi des stocks et usage sur le terrain.",
    description:
      "Emprunts, retours et suivi des stocks, avec usage hors ligne.",
    role: [
      "Développement front-end PWA",
      "Intégration Supabase Auth et gestion des stocks",
    ],
    stack: ["Vite", "React", "TypeScript", "PWA", "Supabase", "Vercel"],
    image: LogistiqueCite,
    sourceCodeVisibility: "private",
    featured: false,
  },
  {
    id: "advalis",
    title: "Advalis",
    type: "client",
    typeLabel: "SaaS",
    status: "production",
    statusLabel: "En production",
    context:
      "Société de conseil souhaitant structurer ses offres, le suivi client et le pilotage commercial.",
    description:
      "MVP SaaS avec espace client et suivi des demandes.",
    role: ["Développement front-end", "Architecture applicative et parcours utilisateurs"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: AdvalisSaaS,
    liveUrl: "https://www.advalis.pro/",
    sourceCodeVisibility: "private",
    featured: false,
  },
  {
    id: "retour-en-eden",
    title: "Retour en Eden Academy",
    type: "client",
    typeLabel: "Plateforme web",
    status: "production",
    statusLabel: "En production",
    context:
      "Plateforme d'apprentissage à moderniser pour améliorer la gestion des cours et des utilisateurs.",
    description:
      "Plateforme de formation, cours et évaluations.",
    role: ["Développement front-end et back-end", "Modélisation des parcours utilisateurs"],
    stack: ["React", "Node.js", "TypeScript", "Express", "MariaDB", "Docker", "Tailwind CSS"],
    image: RetourEnEden,
    liveUrl: "https://retourenedenacademy.com",
    sourceCodeVisibility: "private",
    featured: false,
  },
];

const featuredOrder = ["myicc-online-v2", "capitaine-depan", "icc-conges"];

export const featuredProjects = featuredOrder
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const otherProjects = projects.filter((project) => !project.featured);
