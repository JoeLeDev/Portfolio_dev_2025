import type { SourceCodeVisibility } from "@/types/project";

export interface CaseStudyScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyTechnicalChoice {
  title: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  projectId: string;
  title: string;
  summary: string;
  context: string;
  need: string;
  role: string[];
  features: string[];
  technicalChoices: CaseStudyTechnicalChoice[];
  screenshots: CaseStudyScreenshot[];
  outcome: string;
  statusLabel: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  sourceCodeVisibility: SourceCodeVisibility;
}
