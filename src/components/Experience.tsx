import { experiences } from "@/data/experience";
import SectionEyebrow from "@/components/SectionEyebrow";
import { badgeHighlightClass } from "@/lib/projectBadges";

const Experience = () => {
  return (
    <section id="experience" className="section-pad scroll-mt-24">
      <div className="site-container">
        <SectionEyebrow>Expérience</SectionEyebrow>
        <h2 className="mb-10 md:mb-12 max-w-xl">Mon parcours professionnel</h2>

        <div className="space-y-0">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 divider-line first:border-t-0 first:pt-0"
            >
              <div>
                <p className="text-portfolio-secondary font-medium">{item.orgShort}</p>
                <p className="text-muted text-sm mt-1">{item.period}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  {item.status && (
                    <span className={badgeHighlightClass}>{item.status}</span>
                  )}
                </div>
                <p className="text-muted text-sm mb-4">{item.company}</p>
                <ul className="space-y-2 text-sm text-white/75">
                  {item.contributions.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-portfolio-accent/70 shrink-0" aria-hidden="true">
                        ·
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
