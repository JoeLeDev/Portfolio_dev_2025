import SpotlightProjectCard from "@/components/projects/SpotlightProjectCard";
import SecondaryFeaturedCard from "@/components/projects/SecondaryFeaturedCard";
import OtherProjectCard from "@/components/projects/OtherProjectCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import { featuredProjects, otherProjects } from "@/data/projects";

const Projects = () => {
  const spotlight = featuredProjects.find((project) => project.highlight);
  const secondaryFeatured = featuredProjects.filter((project) => !project.highlight);

  return (
    <section id="projects" className="section-pad bg-portfolio-surface/40 scroll-mt-24">
      <div className="site-container">
        <SectionEyebrow>Réalisations</SectionEyebrow>
        <h2 className="mb-10 md:mb-12">Projets réalisés</h2>

        {spotlight && (
          <div className="mb-8">
            <SpotlightProjectCard project={spotlight} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 items-stretch">
          {secondaryFeatured.map((project) => (
            <SecondaryFeaturedCard key={project.id} project={project} />
          ))}
        </div>

        <div className="divider-line mb-8" />
        <h3 className="text-lg font-semibold text-white mb-5">Autres réalisations</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {otherProjects.map((project) => (
            <OtherProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
