
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-portfolio-dark/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Portfolio
            </a>
            <p className="text-white/50 mt-2">Développeur Web créatif</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/JoeLeDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-portfolio-primary/20 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jonathanluembe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-portfolio-primary/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a 
              href="mailto:jonathanluembe@yahoo.com" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-portfolio-primary/20 flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50">
            © {currentYear} Jonathan Luembe. Tous droits réservés.
          </p>
          <p className="text-white/30 text-sm mt-1">
            Conçu et développé avec ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
