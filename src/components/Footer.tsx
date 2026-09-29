import { Link } from "react-router-dom";
import { homeSectionTo } from "@/lib/homeSectionLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jonathanluembe/",
      external: true,
      icon: "↗",
    },
    {
      label: "GitHub",
      href: "https://github.com/JoeLeDev",
      external: true,
      icon: "↗",
    },
    {
      label: "Email",
      href: "mailto:jonathanluembe@yahoo.com",
      external: false,
      icon: "↗",
    },
    {
      label: "CV",
      href: "/cv.pdf",
      external: false,
      icon: "↓",
      download: true,
    },
  ] as const;

  return (
    <footer className="border-t border-white/[0.08] pt-10 pb-8">
      <div className="site-container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-10">
          <div>
            <Link
              to={homeSectionTo("home")}
              className="block text-base font-semibold text-white hover:text-white/90"
            >
              Jonathan Luembe.
            </Link>
            <p className="text-muted text-sm mt-1">Développeur web · React / Next.js</p>
          </div>

          <nav className="flex flex-col gap-2 text-sm" aria-label="Liens du pied de page">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...("download" in link && link.download ? { download: true } : {})}
                className="inline-flex items-center gap-1.5 text-white/85 hover:text-white transition-colors w-fit"
              >
                {link.label}
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="divider-line mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted">
          <p>© {currentYear} Jonathan Luembe</p>
          <p>Paris, France</p>
          <a
            href="https://freelance.jonathanluembe.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted hover:text-white transition-colors w-fit sm:ml-auto"
          >
            JoeLabs
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
