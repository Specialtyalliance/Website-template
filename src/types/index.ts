export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  logo?: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  readTime: string;
}