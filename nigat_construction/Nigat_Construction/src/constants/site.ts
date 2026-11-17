export const SITE = {
  name: "Nigat Fanawi Construction",
  legalName: "Nigat Fanawi Trading PLC",
  industry: "Construction",
  established: 2018,
  defaultTitle: "Nigat Fanawi Construction",
  description:
    "Our experienced team transforms ideas into exceptional residential and commercial developments using premium materials, innovative engineering.",
  mission:
    "To deliver reliable, innovative, and sustainable trading, construction, and investment solutions by creating value for customers, partners, and stakeholders through operational excellence, integrity, and customer-centric services.",
  objectives: ["Trust and credibility", "Lead generation", "Competitive edge"],
  logo: "/images/logo.png",
  copyright: "Copyright © 2026 Nigat Fanawi Trading PLC. All Rights Reserved.",
} as const;

export const CONTACT_INFO = {
  phone: { label: "0995888882", href: "tel:+251995888882" },
  altPhone: { label: "0995888883", href: "tel:+251995888883" },
  email: { label: "nigatfanawi33@gmail.com", href: "mailto:nigatfanawi33@gmail.com" },
  address: "Addis Ababa",
} as const;

/** Promo video opened by every "play" button in the template. */
export const PROMO_VIDEO_URL = "https://www.youtube.com/watch?v=Y-x0efG1seA";

/**
 * Office pin on the Contact page map — edit these to move it.
 * Get coordinates in Google Maps by right-clicking the spot and clicking the
 * numbers at the top of the menu (they are copied as "latitude, longitude").
 * Current spot: plus code 2Q8M+2M5, Addis Ababa.
 */
export const MAP_COORDINATES = "9.014864295642704,38.78461402130691";
/** 1 = whole world, 21 = single building. */
export const MAP_ZOOM = 17;

/** Embeddable Google Maps URL for MAP_COORDINATES. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_COORDINATES}&z=${MAP_ZOOM}&output=embed`;
