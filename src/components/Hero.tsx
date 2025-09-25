
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 bg-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in-left">
            <h3 className="text-portfolio-primary mb-4">Hello, my name is</h3>
            <h1 className="mb-4">
              <span className="text-gradient">Jonathan Luembe</span>
            </h1>
            <h2 className="text-white/80 mb-6">Développeur Full Stack</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl">
              Diplômé d'un Bachelor Développeur Web à HETIC, spécialisé dans
              le développement full stack avec une forte appétence pour React/Next.js.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white">
                <a href="#projects">Voir mes projets</a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-primary text-white hover:bg-portfolio-primary/10">
                <a href="#contact">Me Contacter</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-portfolio-primary/20 backdrop-blur-xl overflow-hidden border border-portfolio-primary/30 flex items-center justify-center">
                <img 
                  src="/uploads/Moi.png" 
                  alt="Jonathan Luembe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
