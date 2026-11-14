/**
 * Background slides for the home hero. Purely decorative: the headline and
 * calls to action stay fixed while the backdrop rotates.
 *
 * Video: Mixkit #52427 (Mixkit Stock Video Free License). Images: Unsplash.
 * PLACEHOLDER: replace with Nigat Motors' own footage when available.
 */
export interface HeroSlide {
  label: string;
  image: string;
  /** Optional looping video; `image` is its poster and reduced-motion fallback. */
  video?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  { label: "On the road", image: "/images/hero-home.jpg", video: "/videos/hero-drive.mp4" },
  { label: "The range", image: "/images/hero-vehicles.jpg" },
  { label: "Servicing", image: "/images/hero-services.jpg" },
  { label: "Every journey", image: "/images/hero-about.jpg" },
];

/** Time each slide stays on screen, in milliseconds. */
export const HERO_SLIDE_DURATION = 7000;
