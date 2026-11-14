export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  overview: string[];
  highlights: string[];
}

export interface VehicleCategory {
  slug: string;
  name: string;
  image: string;
  description: string;
  idealFor: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export interface EnquiryOption {
  value: string;
  label: string;
}
