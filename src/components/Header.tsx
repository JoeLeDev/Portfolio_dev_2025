import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeSectionTo } from "@/lib/homeSectionLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", section: "about" },
    { name: "Projets", section: "projects" },
    { name: "Expérience", section: "experience" },
    { name: "Compétences", section: "skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        isScrolled
          ? "bg-portfolio-dark/90 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="site-container flex justify-between items-center gap-4">
        <Link
          to={homeSectionTo("home")}
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
        >
          <img
            src="/uploads/logo.png"
            alt="JoeLabs"
            className="h-9 sm:h-10 w-auto object-contain"
            width={120}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={homeSectionTo(link.section)}
              className="text-sm text-portfolio-muted hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to={homeSectionTo("contact")} className="btn-primary text-sm">
            Me contacter
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/[0.06] bg-portfolio-dark/95 backdrop-blur-md"
        >
          <nav
            className="site-container flex flex-col gap-1 py-4"
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={homeSectionTo(link.section)}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-btn px-3 py-2.5 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={homeSectionTo("contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Me contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
