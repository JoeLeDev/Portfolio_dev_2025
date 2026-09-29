import { Mail } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

const Contact = () => {
  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="mb-4">
              Parlons <span className="text-portfolio-accent">de la suite.</span>
            </h2>
            <p className="text-muted mb-8 max-w-md">
              Une opportunité, une mission ou un projet web ? Je serai heureux d&apos;en
              discuter avec vous.
            </p>

            <a
              href="mailto:jonathanluembe@yahoo.com"
              className="inline-flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-accent transition-colors mb-6"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              jonathanluembe@yahoo.com
            </a>

            <div className="flex flex-wrap gap-5 text-sm">
              <a
                href="https://github.com/JoeLeDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jonathanluembe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://freelance.jonathanluembe.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors"
              >
                JoeLabs
              </a>
            </div>
          </div>

          <form
            action="https://formsubmit.co/jonathanluembe@yahoo.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio !" />
            <input type="hidden" name="_next" value="https://www.jonathanluembe.dev/#contact" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm text-portfolio-muted mb-1.5 block">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Nom et prénom"
                  required
                  className="w-full rounded-btn bg-black/30 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-portfolio-muted mb-1.5 block">
                  Votre e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@entreprise.fr"
                  required
                  className="w-full rounded-btn bg-black/30 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm text-portfolio-muted mb-1.5 block">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Une opportunité, un projet..."
                required
                className="w-full rounded-btn bg-black/30 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-portfolio-muted mb-1.5 block">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Parlez-moi de votre besoin."
                required
                rows={5}
                className="w-full rounded-btn bg-black/30 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-portfolio-primary focus:outline-none focus:ring-1 focus:ring-portfolio-primary resize-y min-h-[140px]"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
