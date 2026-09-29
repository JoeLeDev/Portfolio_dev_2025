import { AppWindow, CheckCircle2, Database, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SectionEyebrow from "@/components/SectionEyebrow";

const Skills = () => {
  return (
    <section id="skills" className="section-pad bg-portfolio-surface/30 scroll-mt-24">
      <div className="site-container">
        <SectionEyebrow>Compétences</SectionEyebrow>
        <h2 className="mb-10 md:mb-12 max-w-xl">
          Le <span className="font-semibold">front-end</span> au cœur de mes projets.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">
          <article className="surface-card p-6 md:p-7 bg-gradient-to-br from-portfolio-primary/15 via-portfolio-surface to-portfolio-accent/10 border-portfolio-primary/20 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-5">
              <AppWindow className="w-5 h-5 text-portfolio-secondary" aria-hidden="true" />
              <span className="text-xs text-portfolio-accent">Orientation principale</span>
            </div>
            <h3 className="text-xl text-white mb-2">Interfaces &amp; front-end</h3>
            <p className="text-muted text-sm mb-5">
              Des interfaces responsive et des parcours utilisateurs clairs.
            </p>
            <p className="text-white font-medium mb-1">React · Next.js · TypeScript</p>
            <p className="text-muted text-sm mb-6">JavaScript · Tailwind CSS</p>
            <div className="divider-line mt-auto pt-4">
              <Link
                to="/projets/myicc-online-v2"
                className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white pt-4 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                En pratique sur MyICC Online V2
              </Link>
            </div>
          </article>

          <div className="flex flex-col justify-center">
            <div className="py-5">
              <div className="flex gap-3 mb-2">
                <Database className="w-5 h-5 text-portfolio-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-lg text-white mb-1">API &amp; données</h3>
                  <p className="text-muted text-sm mb-3">
                    Intégration d&apos;API, authentification et gestion des données.
                  </p>
                  <p className="tech-list text-sm text-white/85">
                    <span>Node.js</span>
                    <span>API REST</span>
                    <span>Supabase</span>
                    <span>SQL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="divider-line" />
            <div className="py-5">
              <div className="flex gap-3 mb-2">
                <CheckCircle2
                  className="w-5 h-5 text-portfolio-secondary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg text-white mb-1">Qualité &amp; collaboration</h3>
                  <p className="text-muted text-sm mb-3">
                    Tester les parcours et suivre les évolutions du projet.
                  </p>
                  <p className="tech-list text-sm text-white/85">
                    <span>Playwright</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Figma</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
