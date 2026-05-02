export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  bullets: string[];
  accent: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar_initials: string;
  rating: number;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: Array<{ label: string; value: string }>;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  read_time_minutes: number;
  category: string;
  published_at: string;
}

export interface BlogPost extends BlogPostSummary {
  body: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  services?: string[];
  message: string;
}

export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  company: string | null;
  budget: string | null;
  services: string | null;
  message: string;
  created_at: string;
}
