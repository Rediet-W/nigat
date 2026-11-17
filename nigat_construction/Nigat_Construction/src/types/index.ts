/** Shared domain types for the site's content collections. */

import type { Dictionary } from "@/i18n/dictionaries/en";

export type NavLabelKey = keyof Dictionary["nav"];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  href: string;
}

export interface Post {
  id: string;
  title: string;
  image: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  /** Key into the `nav` section of the i18n dictionaries (src/i18n/dictionaries). */
  labelKey: NavLabelKey;
  href: string;
  children?: readonly NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** Props shared by the card components rendered inside animated grids. */
export interface AnimatedItemProps {
  /** Value for `data-wow-delay`, e.g. "0.2s". */
  delay?: string;
}
