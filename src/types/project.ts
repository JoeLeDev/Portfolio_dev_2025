export type ProjectStatus = "production" | "internal" | "demo";

export type ProjectType =
  | "client"
  | "professional"
  | "freelance"
  | "product"
  | "iot";

export type SourceCodeVisibility = "public" | "private" | "none";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  typeLabel: string;
  status: ProjectStatus;
  statusLabel: string;
  context: string;
  description: string;
  role: string[];
  /** Présentation courte de l'architecture (ex. Headless CMS) */
  architectureNote?: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  sourceCodeVisibility: SourceCodeVisibility;
  featured: boolean;
  highlight?: boolean;
}
