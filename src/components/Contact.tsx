
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-gradient inline-block mb-2">Contact</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer. Je suis toujours ouvert à discuter de nouveaux projets et opportunités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-white">Restons en Contact</h3>
            <p className="text-white/70">
              Que vous ayez une question, une idée de projet ou simplement envie de dire bonjour, n'hésitez pas à me contacter. Remplissez le formulaire ou contactez-moi via mes réseaux sociaux, et je vous répondrai dès que possible.
              Voici mon site de contact freelance : https://joe-labs.vercel.app/
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white/80">
                <Mail className="w-5 h-5 text-portfolio-primary" />
                <span>jonathanluembe@yahoo.com</span>
              </div>

              <div className="flex space-x-4">
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
              </div>
            </div>
          </div>

          <div className="glass-card p-6 animate-fade-in-right">
            <form
              action="https://formsubmit.co/jonathanluembe@yahoo.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio !" />
              <input type="hidden" name="_next" value="https://ton-site.fr/merci" />

              <div>
                <label htmlFor="name" className="text-white/80 mb-1 block">Nom</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="bg-white/5 border-white/10 focus:border-portfolio-primary text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white/80 mb-1 block">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  required
                  className="bg-white/5 border-white/10 focus:border-portfolio-primary text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-white/80 mb-1 block">Sujet</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Sujet"
                  required
                  className="bg-white/5 border-white/10 focus:border-portfolio-primary text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white/80 mb-1 block">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  required
                  className="bg-white/5 border-white/10 focus:border-portfolio-primary text-white placeholder:text-white/50 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
