
import React from 'react';

const skillCategories = [
  {
    title: "Technologies",
    skills: [
      { name: "Next.js", description: "Création d'interfaces utilisateur dynamiques et interactives, composants réutilisables, optimisation des performances." },
      { name: "Node.js", description: "Développement de serveurs rapides et évolutifs, utilisation de frameworks comme Express.js, intégration avec MongoDB." },
      { name: "WordPress", description: "Conception de sites web adaptatifs, personnalisation avancée via thèmes et plugins, gestion efficace du contenu." },
      { name: "MongoDB", description: "Gestion de données avec une base NoSQL, modélisation de données pour des applications scalables, intégration avec des environnements JavaScript/Node.js." },
      { name: "Tailwind CSS", description: "Framework utility-first CSS" },
      { name: "TypeScript", description: "JavaScript avec typage statique" }
    ]
  },
  {
    title: "Outils",
    skills: [
      { name: "Git", description: "Versioning et collaboration" },
      { name: "Figma", description: "Création de maquettes interactives, prototypes engageants, design centré sur l'utilisateur." },
      { name: "Firebase", description: "Plateforme de développement d'applications" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-gradient inline-block mb-2">Mes Compétences</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Voici un aperçu des technologies et outils en programmation que j'utilise dans mon travail de développeur web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-portfolio-primary mb-6 text-xl">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <h4 className="text-white font-medium">{skill.name}</h4>
                    <p className="text-white/70 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 text-center animate-fade-in">
          <h3 className="text-white mb-6">Autres compétences non mentionnées</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UX/UI Design", "Responsive Design", "Elementor", "LMS (Moodle)", 
              "Gestion de projet", "Accessibilité", "API REST"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full bg-white/10 text-white/90 hover:bg-portfolio-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
