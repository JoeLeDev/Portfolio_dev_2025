import type { Project } from "@/types/project";
import ProjectActions from "@/components/projects/ProjectActions";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import { badgeHighlightClass } from "@/lib/projectBadges";

interface SpotlightProjectCardProps {
  project: Project;
}

const SpotlightProjectCard = ({ project }: SpotlightProjectCardProps) => {
  return (
    <article className="surface-card overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-[52%] p-4 sm:p-5 lg:p-6">
        <ProjectScreenshot
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          priority
          variant="hero"
          className="lg:h-full min-h-[200px]"
        />
      </div>

      <div className="lg:w-[48%] p-5 sm:p-6 lg:p-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={badgeHighlightClass}>Projet phare</span>
          <span className="text-sm text-muted">{project.typeLabel}</span>
        </div>

        <h3 className="text-2xl md:text-3xl text-white">{project.title}</h3>

        <p className="text-muted text-sm md:text-base leading-relaxed">
          Refonte d&apos;une plateforme communautaire avec espaces membres, contenus
          dynamiques et événements. Interface Next.js / React connectée à WordPress via
          son API REST.
        </p>

        <p className="tech-list">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>

        <p className="text-sm text-white/85">
          <span className="text-white font-medium">Mon rôle · </span>
          Architecture front-end et intégration WordPress Headless.
        </p>

        <div className="mt-auto pt-2">
          <ProjectActions project={project} primaryCaseStudy showSourceNote={false} />
        </div>
      </div>
    </article>
  );
};

export default SpotlightProjectCard;
