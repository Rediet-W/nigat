/**
 * Nigat Motors — company information.
 *
 * IMPORTANT: Verified company details were not available when this project
 * was created. Every value marked `PLACEHOLDER` below is a temporary,
 * clearly fictitious value and MUST be replaced with real information
 * before going live. See README.md → "Content to confirm".
 */

export const SITE = {
  name: "Nigat Motors",
  shortName: "Nigat",
  description:
    "Nigat Motors — vehicles, servicing and automotive support. Explore our vehicle categories and services, or get in touch with our team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const CONTACT = {
  /** PLACEHOLDER — replace with the real phone number. */
  phone: "+251 000 000 000",
  /** PLACEHOLDER — `tel:` form of the phone number above. */
  phoneHref: "tel:+251000000000",
  /** PLACEHOLDER — `.example` is a reserved, non-routable domain. */
  email: "info@nigatmotors.example",
  /** PLACEHOLDER — replace with the real showroom address. */
  address: "Showroom address to be confirmed",
  /** PLACEHOLDER — replace with real opening hours. */
  hours: "Opening hours to be confirmed",
} as const;
