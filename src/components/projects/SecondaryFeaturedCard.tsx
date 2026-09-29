import type { Project } from "@/types/project";
import ProjectActions from "@/components/projects/ProjectActions";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";

interface SecondaryFeaturedCardProps {
  project: Project;
}

const SecondaryFeaturedCard = ({ project }: SecondaryFeaturedCardProps) => (
  <article className="surface-card overflow-hidden flex flex-col h-full">
    <div className="p-4 pb-0">
      <ProjectScreenshot
        src={project.image}
        alt={`Capture d'écran du projet ${project.title}`}
        variant="card"
      />
    </div>

    <div className="p-5 flex flex-col flex-1 gap-3">
      <p className="text-sm text-muted">
        {project.typeLabel} · {project.statusLabel}
      </p>
      <h3 className="text-xl text-white leading-snug">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

      <p className="tech-list">
        {project.stack.slice(0, 5).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </p>

      <div className="mt-auto pt-1">
        <ProjectActions project={project} showSourceNote={false} />
      </div>
    </div>
  </article>
);

export default SecondaryFeaturedCard;
