
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import MyIccOnline from "../assets/MyIccOnline.png";
import BikeSense from "../assets/Bikesense.png"; 
import AdvalisSaaS from "../assets/Advalis.png";
import RetourEnEden from "../assets/RetourEnEden.png";
import CapitaineDepan from "../assets/CapitaineDepan.png";
import IccConges from "../assets/IccConges.png";
import LogistiqueCite from "../assets/LogistiqueCite.png";
const projects = [
  {
    title: "Capitaine Depan'",
    description:
      "Site vitrine pour un serrurier en Île-de-France : hero optimisé, animations au scroll, formulaire de devis par e-mail (Resend), bouton d'appel mobile, bannière cookies RGPD et SEO avancé (Open Graph, schema.org Locksmith).",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Resend", "Vercel"],
    image: CapitaineDepan,
    live: "https://www.capitainedepan.com/",
  },
  {
    title: "ICC Congés — Impact Centre Chrétien",
    description:
      "Système de gestion et validation des congés pour les employés d'Impact Centre Chrétien. Workflow multi-niveaux (employé → manager → RH → direction), rôles et permissions, MFA pour les comptes sensibles, tableaux de bord dédiés et relances automatiques.",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS 4", "Supabase", "MFA", "Vercel", "Playwright"],
    image: IccConges,
  },
  {
    title: "Logistique Cité",
    description:
      "Application PWA pour gérer les sorties et retours de meubles (tables, mange-debout). Formulaires emprunt/retour, stocks mis à jour automatiquement, mode hors-ligne avec synchro à la reconnexion, et gestion admin des stocks.",
    technologies: ["Vite", "React", "TypeScript", "PWA", "Supabase", "Vercel"],
    image: LogistiqueCite,
  },
  {
    title: "BikeSense",
    description:
      "Solution IoT pour boutique de vélos : suivi temps réel de l’environnement (température, humidité, vibration), alertes et dashboard web réactif. Authentification, liste d’alertes, et UX soignée.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MQTT", "Auth JWT"],
    image: BikeSense,
     github: "https://github.com/JoeLeDev/BikeSense"
  },
  {
    title: "Advalis – SaaS de conseil",
    description:
      "Création d’un MVP SaaS pour une société de conseil : gestion des offres et prestations, onboarding client, suivi des demandes et pipeline commercial, espace client simplifié et tableau de bord (indicateurs clés). Architecture full-stack moderne avec auth, rôles et modèles de données extensibles.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: AdvalisSaaS,
     live: "https://www.advalis.fr/" ,
  },
  {
    title: "Retour en Eden Academy",
    description:
      "Refonte d'une plateforme d'apprentissage en ligne basée sur Moodle en React et Node.js, avec gestion des cours, utilisateurs et évaluations.",
    technologies: ["React", "Node.js", "Tailwind CSS", "TypeScript", "Express", "MariaDB", "Docker"],
    image: RetourEnEden,
    live: "https://retourenedenacademy.com",
  },
  {
    title: "My Icc Online",
    description:
      "Réseau social moderne combinant les codes de Facebook et LinkedIn. L’utilisateur peut publier des posts, rejoindre des groupes, suivre des formations, discuter en temps réel, et gérer son profil dans un environnement fluide et sécurisé.",
    technologies: ["WordPress (Elementor)", "PHP", "AWS"],
    image: MyIccOnline,
    live: "https://myicconline.com",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-dark/60">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-gradient inline-block mb-2">Mes Projets</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, reflétant mon engagement pour la qualité et l'attention aux détails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLastOddItem =
              projects.length % 2 !== 0 && index === projects.length - 1;

            return (
            <div
              key={index}
              className={`glass-card overflow-hidden group transition-all hover:border-portfolio-primary/50 animate-fade-in${
                isLastOddItem ? " md:col-span-2 md:justify-self-center md:w-[calc(50%-1rem)]" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain p-2 bg-neutral-900 rounded shadow"

                />
                <div className="absolute inset-0 bg-portfolio-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.live && (
                    <Button asChild size="sm" variant="outline" className="rounded-full bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Link className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild size="sm" variant="outline" className="rounded-full bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Github
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-portfolio-primary/20 text-portfolio-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
