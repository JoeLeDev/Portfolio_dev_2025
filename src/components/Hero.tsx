import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pb-24 scroll-mt-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="section-eyebrow mb-4">
              Jonathan Luembe · Développeur web
            </p>
            <h1 className="mb-4 max-w-xl mx-auto lg:mx-0">
              Des interfaces claires.
              <br />
              <span className="text-portfolio-accent">Des projets concrets.</span>
            </h1>
            <p className="text-white text-lg md:text-xl font-medium mb-4">
              React / Next.js &amp; full stack JavaScript
            </p>
            <p className="text-muted max-w-lg mb-8 mx-auto lg:mx-0">
              Je conçois des applications web, de l&apos;interface à l&apos;intégration
              d&apos;API, avec une attention particulière aux usages.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <a href="#projects" className="btn-primary">
                Découvrir mes projets
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <a
                href="https://github.com/JoeLeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-muted hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jonathanluembe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-muted hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-white/15 bg-portfolio-surface">
              <img
                src="/uploads/Moi.png"
                alt="Portrait de Jonathan Luembe"
                className="w-full h-full object-cover"
                width={256}
                height={256}
                fetchPriority="high"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
