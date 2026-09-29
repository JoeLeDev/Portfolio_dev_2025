import type { Project } from "@/types/project";
import ProjectActions from "@/components/projects/ProjectActions";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";

interface OtherProjectCardProps {
  project: Project;
}

const OtherProjectCard = ({ project }: OtherProjectCardProps) => {
  return (
    <article className="surface-card overflow-hidden flex flex-col sm:flex-row h-full">
      <div className="sm:w-[42%] sm:min-w-[140px] p-3 sm:p-3.5 sm:pr-0">
        <ProjectScreenshot
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          variant="compact"
          className="h-full min-h-[110px] sm:min-h-[120px]"
        />
      </div>

      <div className="p-4 sm:pl-4 flex flex-col flex-1 gap-2">
        <h3 className="text-base font-semibold text-white leading-snug">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>

        <p className="tech-list text-xs">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>

        <div className="mt-auto pt-1">
          <ProjectActions project={project} compact />
        </div>
      </div>
    </article>
  );
};

export default OtherProjectCard;
