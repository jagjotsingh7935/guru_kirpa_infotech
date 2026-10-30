export interface ProfileData {
  name: string;
  brandName: string;
  logoText: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  address: string;
  msme: string;
  founder: string;
  linkedin: string;
  github: string;
  status: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  content: string;
  avatarLetter: string;
  rating: number;
}
