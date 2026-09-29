import { Link } from "react-router-dom";
import { ExternalLink, FileText, Github } from "lucide-react";
import { hasCaseStudy } from "@/data/caseStudies";
import type { Project } from "@/types/project";

interface ProjectActionsProps {
  project: Project;
  /** Bouton étude de cas plein (projet phare) */
  primaryCaseStudy?: boolean;
  compact?: boolean;
  showSourceNote?: boolean;
}

const ProjectActions = ({
  project,
  primaryCaseStudy = false,
  compact = false,
  showSourceNote = true,
}: ProjectActionsProps) => {
  const showCaseStudy = hasCaseStudy(project.id);

  const sourceNote =
    project.sourceCodeVisibility === "private"
      ? "Code source privé, projet professionnel ou client"
      : project.sourceCodeVisibility === "public"
        ? "Projet scolaire, code source public"
        : null;

  return (
    <div className={`flex flex-col ${compact ? "gap-1.5" : "gap-2"}`}>
      <div className="flex flex-wrap items-center gap-3 min-h-9">
        {showCaseStudy &&
          (primaryCaseStudy ? (
            <Link to={`/projets/${project.id}`} className="btn-primary">
              Découvrir le projet
            </Link>
          ) : (
            <Link to={`/projets/${project.id}`} className="btn-secondary text-sm">
              <FileText className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              Voir l&apos;étude de cas
            </Link>
          ))}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white transition-colors"
          >
            Voir le site
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}

        {project.sourceCodeVisibility === "public" && project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            <Github className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
            Code source
          </a>
        )}
      </div>

      {showSourceNote && (
        <p className="text-xs text-portfolio-muted min-h-[1.125rem] leading-snug">
          {sourceNote ?? "\u00A0"}
        </p>
      )}
    </div>
  );
};

export default ProjectActions;
