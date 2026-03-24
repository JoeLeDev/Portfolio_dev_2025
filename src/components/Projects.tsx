
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import MyIccOnline from "../assets/MyIccOnline.png";
import DevBoard from "../assets/DevBoard.png";
import BikeSense from "../assets/Bikesense.png"; 
import AdvalisSaaS from "../assets/Advalis.png";
import SarahPortfolio from "../assets/SarahPortfolio.png";
import RetourEnEden from "../assets/RetourEnEden.png";
const projects = [
  {
    title: "BikeSense",
    description:
      "Solution IoT pour boutique de vélos : suivi temps réel de l’environnement (température, humidité, vibration), alertes et dashboard web réactif. Authentification, liste d’alertes, et UX soignée.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MQTT", "Auth JWT"],
    image: BikeSense,
     github: "https://github.com/JoeLeDev/BikeSense"
  },
  {
    title: "Portfolio Photographe – Sarah",
    description:
      "Portfolio professionnel pour photographe : vitrines de séries et formulaire de contact. Navigation fluide, focus accessibilité et performance pour un rendu photo fidèle.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: SarahPortfolio,
     live: "https://porfolio-sarah.vercel.app/",
    github: "https://github.com/JoeLeDev/Porfolio-Sarah"
  },
  {
    title: "Advalis – SaaS de conseil",
    description:
      "Création d’un MVP SaaS pour une société de conseil : gestion des offres et prestations, onboarding client, suivi des demandes et pipeline commercial, espace client simplifié et tableau de bord (indicateurs clés). Architecture full-stack moderne avec auth, rôles et modèles de données extensibles.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: AdvalisSaaS,
     live: "https://www.advalis.fr/" ,
    github: "https://github.com/JoeLeDev/Advalis"
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
    title: "Dev Board",
    description:
      "Application web moderne pensée pour centraliser les projets et faciliter la collaboration entre développeurs. Elle offre une interface claire et interactive permettant de gérer ses tâches, suivre la progression et visualiser les métriques clés en temps réel.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Express", "Prisma", "Supabase"],
    image: DevBoard,
    live: "https://dev-board-one.vercel.app/",
    github: "https://github.com/JoeLeDev/DevBoard"
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group transition-all hover:border-portfolio-primary/50 animate-fade-in"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
