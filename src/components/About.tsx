import { Briefcase, Laptop } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

const About = () => {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="site-container">
        <SectionEyebrow>À propos</SectionEyebrow>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="mb-5 max-w-md">
              Du besoin métier{" "}
              <span className="text-portfolio-accent">à l&apos;interface.</span>
            </h2>
            <p className="text-muted max-w-lg">
              Je développe des applications React et Next.js, de l&apos;interface à
              l&apos;intégration des API. Mon fil conducteur : des parcours clairs, un
              code structuré et un échange direct avec les équipes.
            </p>
          </div>

          <div className="space-y-0">
            <div className="flex gap-4 py-5">
              <Briefcase
                className="w-5 h-5 text-portfolio-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm text-portfolio-accent mb-1">En entreprise</p>
                <p className="text-white font-medium">Impact Centre Chrétien</p>
                <p className="text-muted text-sm mt-0.5">
                  Développeur web en alternance
                </p>
              </div>
            </div>
            <div className="divider-line" />
            <div className="flex gap-4 py-5">
              <Laptop
                className="w-5 h-5 text-portfolio-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm text-portfolio-accent mb-1">En freelance</p>
                <p className="text-white font-medium">JoeLabs</p>
                <p className="text-muted text-sm mt-0.5">
                  Sites et applications sur mesure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
