
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-dark/60">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-gradient inline-block mb-2">À Propos de Moi</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Découvrez mon parcours et mes expériences professionnelles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-white">Qui suis-je?</h3>
            <p className="text-white/70">
              Étudiant en master Développeur Web & Cybersécurité à <strong className="text-portfolio-primary"><a href="https://www.hetic.net/?gge_source=google&gge_medium=cpc&gge_term=hetic&gge_campaign=Search-MarquePure&gad_source=1&gad_campaignid=81530319&gbraid=0AAAAAD8alhHNibzQrZyN69AfRS63mvW9g&gclid=Cj0KCQjw_8rBBhCFARIsAJrc9yCLjb9kSASAQ232gqMoC71TOwGQYYEVjwywdJE6VJt975HygNkgc8AaAgzLEALw_wcB">LiveCampus</a></strong>, je me spécialise dans le développement full stack avec une forte appétence pour React.
            </p>
            <p className="text-white/70">
              Mon parcours m'a permis d'acquérir des compétences solides en programmation, conception web, UX/UI design et des notions de cybersécurité. Fort de mon expérience en alternance chez Impact Centre Chrétien, je travaille sur des projets variés tels que la création d'un réseau social et d'un intranet.
            </p>
            <p className="text-white/70">
              J'utilise principalement React/Next.js en frontend et Node.js pour le back-end pour créer des expériences web interactives et centrées sur l'utilisateur déployées sur différents environnements tels que OVH ou AWS.
            </p>
            <div>
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white">
                <a href="#contact">Me Contacter</a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white">Mon Parcours</h3>
            
            <div className="glass-card p-6 transition-all hover:border-portfolio-primary/50 group">
              <div className="mb-2 flex justify-between items-center">
                <h4 className="text-portfolio-primary font-bold">Master Développeur Web & Cybersécurité</h4>
                <span className="text-white/50 text-sm">2026 - 2028</span>
              </div>
              <h5 className="text-white/90 mb-2">Live Campus</h5>
              <p className="text-white/70">Formation en alternance à la poursuite d'un diplôme de Master Développeur Web & Cybersécurité, en collaboration avec des équipes multidisciplinaires.</p>
            </div>
            
            <div className="glass-card p-6 transition-all hover:border-portfolio-primary/50 group">
              <div className="mb-2 flex justify-between items-center">
                <h4 className="text-portfolio-primary font-bold">Bachelor Développeur Web</h4>
                <span className="text-white/50 text-sm">2022 - 2025</span>
              </div>
              <h5 className="text-white/90 mb-2">HETIC</h5>
              <p className="text-white/70">Acquisition de compétences en programmation, conception web, UX/UI design et gestion de projets, réalisation de projets web innovants avec une approche orientée utilisateur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
