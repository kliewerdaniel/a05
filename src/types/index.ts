export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  categories: string[];
  content: string;
  readingTime: number;
  featured?: boolean;
  draft?: boolean;
  image?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  timeline: string;
  role: string;
  technologies: string[];
  metrics: { value: string; label: string }[];
  results: string[];
  featured?: boolean;
  published: boolean;
  date: string;
  content: string;
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
  icon: string;
}

export interface Resource {
  slug: string;
  title: string;
  type: string;
  price: "free" | "paid";
  file?: string;
  description: string;
  cover?: string;
  tags: string[];
  content: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  image: string;
}
