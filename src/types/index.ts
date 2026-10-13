export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'source' | 'demo' | 'docs';
}

export interface Project {
  slug: string;
  title: string;
  problemStatement: string;
  status: ProjectStatus;
  technologies: string[];
  mainContribution: string;
  keyFeatures: string[];
  links: ProjectLink[];
}

export interface SkillItem {
  name: string;
  proficiency?: 'learning' | 'familiar' | 'proficient' | 'advanced';
  evidenceUrl?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: SkillItem[];
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link?: string;
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  supportingText: string;
  about: string[];
  email: string;
  github: string;
  linkedin: string;
  cvPath: string | null;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}
