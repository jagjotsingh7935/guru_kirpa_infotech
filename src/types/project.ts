export type ProjectCategory = 'all' | 'live' | 'website' | 'desktop' | 'fullstack' | 'mobile' | 'automation' | 'enterprise';

export type ProjectPlatform = 'web' | 'desktop' | 'mobile';

export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    orchestration?: string;
    services?: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  additionalLiveUrls?: { label: string; url: string }[];
  featured: boolean;
  imageGradient: string;
  coverImage?: string;
  tourVideo?: string;
  tourLabel?: string;
  platform?: ProjectPlatform;
  screenshots?: ProjectScreenshot[];
  badge?: string;
}
