import {
  badgeCategoryClass,
  badgeHighlightClass,
  badgeStatusClass,
} from "@/lib/projectBadges";

interface ProjectBadgesProps {
  typeLabel: string;
  statusLabel: string;
  highlight?: boolean;
}

const ProjectBadges = ({ typeLabel, statusLabel, highlight }: ProjectBadgesProps) => (
  <div className="flex flex-wrap gap-2">
    <span className={badgeCategoryClass}>{typeLabel}</span>
    <span className={badgeStatusClass}>{statusLabel}</span>
    {highlight && <span className={badgeHighlightClass}>Projet phare</span>}
  </div>
);

export default ProjectBadges;
