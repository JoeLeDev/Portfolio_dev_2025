
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import Sobrisanté from "../assets/Sobrisanté.png";
import TaskFlow from "../assets/TaskFlow.png";

const projects = [
  {
    title: "Retour en Eden Academy",
    description: "Plateforme d'apprentissage en ligne basée sur Moodle, avec gestion des cours, utilisateurs et évaluations.",
    technologies: ["Moodle", "PHP", "MySQL"],
    image: "/uploads/RetourEnEden.png",
    live: "https://retourenedenacademy.com",
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
    description: "Réseau social moderne combinant les codes de Facebook et LinkedIn. L’utilisateur peut publier des posts, rejoindre des groupes, discuter en temps réel, et gérer son profil dans un environnement fluide et sécurisé.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    image: "/uploads/MyIcc.png",
    live: "https://r-ss.vercel.app/",
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
