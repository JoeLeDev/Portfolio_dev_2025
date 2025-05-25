
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import Sobrisanté from "../assets/Sobrisanté.png";
import TaskFlow from "../assets/TaskFlow.png";

const projects = [
  {
    title: "Retour en Eden Academy",
    description: "Plateforme d'apprentissage en ligne basée sur Moodle, avec gestion des cours, utilisateurs et évaluations.",
    technologies: ["Moodle", "PHP", "MySQL"],
    image: "/lovable-uploads/9542cc72-c40a-45cd-9d9b-a92b5c9220ec.png",
    live: "https://retourenedenacademy.com",
  },
  {
    title: "Jonas' Shop",
    description: "Template de site e-commerce développé avec React et Tailwind CSS, mettant en avant des compétences en intégration web.",
    technologies: ["React", "Tailwind CSS"],
    image: "/lovable-uploads/a7980f08-2569-4b4f-bf03-6aaf958638b0.png",
    live: "https://shopping-site-tawny-iota.vercel.app",
  },
  {
    title: "Pannel Admin",
    description: "Tableau de bord administrateur avec gestion des utilisateurs, authentification, rôles dynamiques et édition des profils.",
    technologies: ["React", "Firebase"],
    image: "/lovable-uploads/c25a36c3-9d84-4dc2-8285-1b83ece7b251.png",
  },
  {
    title: "Le cabinet du Dr la COZ",
    description: "Site médical statique ultra-léger, accessible et compatible avec les contraintes des zones rurales. Interface inclusive avec fonctionnalités essentielles selon les normes WCAG 2.1 AAA.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Sobrisanté,
    live: "https://marie-gwenaellefahem.github.io/Cabinet_Dr_Le_Coz/",
  },
  {
    title: "My Icc Online",
    description: "Plateforme interactive permettant la gestion de groupes et d'utilisateurs, avec un design optimisé pour une navigation intuitive.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/lovable-uploads/7ea47324-9df7-4836-9409-949b1f963a06.png",
    live: "https://myicconline.com",
  },
  {
    title: "TaskFlow",
    description: "Application de gestion de tâches comme sur Trello avec fonctionnalités de collaboration en temps réel.",
    technologies: ["React", "Tailwind CSS"],
    image: TaskFlow,
    live: "https://trello-clone-three-hazel.vercel.app/",
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
