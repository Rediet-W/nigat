import type { Locale } from "@/i18n/config";

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

const HERO_SLIDES_BY_LOCALE: Record<Locale, HeroSlide[]> = {
  en: [
    { label: "Coffee cherries", image: "/images/hero-home.jpg" },
    { label: "Green coffee", image: "/images/hero-products.jpg" },
    { label: "Roasting", image: "/images/hero-services.jpg" },
    { label: "At origin", image: "/images/hero-about.jpg" },
  ],
  am: [
    { label: "የቡና ፍሬዎች", image: "/images/hero-home.jpg" },
    { label: "ጥሬ ቡና", image: "/images/hero-products.jpg" },
    { label: "ቡና መቁላት", image: "/images/hero-services.jpg" },
    { label: "በምንጩ", image: "/images/hero-about.jpg" },
  ],
};

export function getHeroSlides(locale: Locale): HeroSlide[] {
  return HERO_SLIDES_BY_LOCALE[locale];
}

/** Every product named in the category descriptions, shown in the home page ticker. */
export const MARQUEE_PRODUCTS: Record<Locale, string[]> = {
  en: ["Green coffee", "Roasted coffee", "Teff", "Wheat", "Barley", "Maize", "Sorghum", "Sesame", "Lentils", "Chickpeas"],
  am: ["ጥሬ ቡና", "የተቆላ ቡና", "ጤፍ", "ስንዴ", "ገብስ", "በቆሎ", "ማሽላ", "ሰሊጥ", "ምስር", "ሽምብራ"],
};

/** Time each slide stays on screen, in milliseconds. */
export const HERO_SLIDE_DURATION = 7000;
