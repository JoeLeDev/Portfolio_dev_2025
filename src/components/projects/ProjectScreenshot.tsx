type ProjectScreenshotVariant = "compact" | "card" | "hero" | "full";

interface ProjectScreenshotProps {
  src: string;
  alt: string;
  priority?: boolean;
  /** @deprecated Utiliser variant="compact" */
  compact?: boolean;
  variant?: ProjectScreenshotVariant;
  className?: string;
  objectPosition?: string;
}

const wrapperClass: Record<ProjectScreenshotVariant, string> = {
  compact: "relative aspect-[4/3] w-full h-full",
  card: "relative aspect-video w-full",
  hero: "relative aspect-video w-full lg:aspect-[16/11] lg:min-h-[260px] lg:h-full",
  full: "relative w-full min-h-[200px]",
};

const imageClass: Record<ProjectScreenshotVariant, string> = {
  compact: "absolute inset-0 h-full w-full object-cover object-center",
  card: "absolute inset-0 h-full w-full object-cover object-center",
  hero: "absolute inset-0 h-full w-full object-cover object-center",
  full: "relative mx-auto block h-auto w-full max-h-[70vh] object-contain object-center",
};

const ProjectScreenshot = ({
  src,
  alt,
  priority = false,
  compact = false,
  variant,
  className = "",
  objectPosition,
}: ProjectScreenshotProps) => {
  const resolvedVariant: ProjectScreenshotVariant =
    variant ?? (compact ? "compact" : "card");

  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-neutral-900/50 ${wrapperClass[resolvedVariant]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={imageClass[resolvedVariant]}
        style={objectPosition ? { objectPosition } : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
};

export default ProjectScreenshot;
