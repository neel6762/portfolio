// TypeScript type definitions for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  featured?: boolean;
  category?: 'web' | 'ai' | 'data' | 'other';
}

export interface Skill {
  name: string;
  icon: string;
  category?: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SiteText {
  general: {
    siteName: string;
    jobTitle: string;
  };
  home: {
    hero: {
      greeting: string;
    };
  };
  about: {
    heading: string;
    description: string;
  };
  projects: {
    heading: string;
    description: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}
