export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "API REST", "Supabase", "SQL"],
  },
  {
    title: "Qualité & outils",
    skills: ["Playwright", "Git", "GitHub", "Figma"],
  },
];
