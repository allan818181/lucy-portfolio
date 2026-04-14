export interface Skill {
  name: string;
  percentage: number;
  description: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  year: number;
  location: string;
}

export interface TimelineItem {
  dateRange: string;
  role: string;
  description: string;
}

export interface DriveItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact';
