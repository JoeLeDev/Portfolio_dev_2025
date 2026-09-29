import { Navigate, Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import { getCaseStudyBySlug, getNextCaseStudy } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import { GoogleAnalyticsTracker } from "@/components/GoogleAnalytics";
import { homeSectionTo } from "@/lib/homeSectionLink";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const [heroScreenshot, ...galleryScreenshots] = study.screenshots;
  const nextStudy = getNextCaseStudy(study.slug);
  const project = projects.find((item) => item.id === study.projectId);
  const architectureNote = project?.architectureNote;

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <GoogleAnalyticsTracker />
      <Helmet>
        <title>{study.title} | Étude de cas | Jonathan Luembe</title>
        <meta name="description" content={study.summary} />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20">
        <div className="site-container max-w-4xl">
          <Link
            to={homeSectionTo("projects")}
            className="btn-ghost -ml-3 mb-8 inline-flex"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Retour aux projets
          </Link>

          <header className="mb-8 space-y-4">
            <p className="text-sm text-portfolio-secondary">
              {project?.typeLabel ?? "Étude de cas"} · {study.statusLabel}
            </p>
            <h1 className="text-3xl md:text-4xl scroll-mt-24">{study.title}</h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              {study.summary}
            </p>
            <p className="tech-list pt-1">
              {study.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
          </header>

          {heroScreenshot && (
            <figure className="mb-10 space-y-2">
              <ProjectScreenshot
                src={heroScreenshot.src}
                alt={heroScreenshot.alt}
                variant="full"
                priority
              />
              {heroScreenshot.caption && (
                <figcaption className="text-muted text-sm">{heroScreenshot.caption}</figcaption>
              )}
            </figure>
          )}

          <div className="surface-card px-5 py-4 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted mb-1">Rôle</p>
              <p className="text-white/90">{study.role[0]}</p>
            </div>
            <div>
              <p className="text-muted mb-1">Architecture</p>
              <p className="text-white/90">
                {architectureNote ?? study.technicalChoices[0]?.title ?? "Stack documentée"}
              </p>
            </div>
            <div>
              <p className="text-muted mb-1">Contexte</p>
              <p className="text-white/90">{study.statusLabel}</p>
            </div>
          </div>

          <div className="space-y-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl mb-3">Contexte</h2>
                <p className="text-muted leading-relaxed mb-3">{study.context}</p>
                <p className="text-muted leading-relaxed">{study.need}</p>
              </div>
              <div>
                <h2 className="text-xl mb-3">Contribution</h2>
                <ul className="space-y-2 text-muted">
                  {study.role.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-portfolio-accent shrink-0" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl mb-4">Fonctionnalités principales</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.features.map((item) => (
                  <li
                    key={item}
                    className="surface-card px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl mb-4">Choix techniques</h2>
              <div className="space-y-0">
                {study.technicalChoices.map((choice) => (
                  <div key={choice.title} className="py-4 divider-line first:border-t-0 first:pt-0">
                    <h3 className="text-base text-white font-medium mb-1">{choice.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{choice.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {galleryScreenshots.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl">Autres captures</h2>
                {galleryScreenshots.map((shot) => (
                  <figure key={shot.src} className="space-y-2">
                    <ProjectScreenshot src={shot.src} alt={shot.alt} variant="full" />
                    {shot.caption && (
                      <figcaption className="text-muted text-sm">{shot.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </section>
            )}

            <section>
              <h2 className="text-xl mb-3">Résultat livré</h2>
              <p className="text-muted leading-relaxed">{study.outcome}</p>
            </section>

            <div className="flex flex-wrap gap-3">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Voir le site
                  <ExternalLink className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </a>
              )}
              {study.sourceCodeVisibility === "public" && study.githubUrl && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                  Code source
                </a>
              )}
            </div>

            <div className="divider-line pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link to={homeSectionTo("projects")} className="btn-ghost -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Retour aux projets
              </Link>
              {nextStudy ? (
                <Link
                  to={`/projets/${nextStudy.slug}`}
                  className="inline-flex items-center text-sm text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                >
                  Projet suivant : {nextStudy.title}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  to={homeSectionTo("projects")}
                  className="inline-flex items-center text-sm text-portfolio-secondary hover:text-portfolio-accent transition-colors"
                >
                  Voir toutes les réalisations
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
