/**
 * Background slides for the home hero. Purely decorative: the headline and
 * calls to action stay fixed while the backdrop rotates.
 *
 * Images are representative stock photography. See /credits for sources and
 * licences; replace with Nigat Export's own photography when available.
 */
export interface HeroSlide {
  label: string;
  image: string;
  /** Optional looping video; `image` is its poster and reduced-motion fallback. */
  video?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  { label: "Coffee cherries", image: "/images/hero-home.jpg" },
  { label: "Green coffee", image: "/images/hero-products.jpg" },
  { label: "Roasting", image: "/images/hero-services.jpg" },
  { label: "At origin", image: "/images/hero-about.jpg" },
];

/** Time each slide stays on screen, in milliseconds. */
export const HERO_SLIDE_DURATION = 7000;
