/**
 * Nigat Export — company information.
 *
 * IMPORTANT: Verified company details were not available when this project
 * was created. Every value marked `PLACEHOLDER` below is a temporary,
 * clearly fictitious value and MUST be replaced with real information
 * before going live. See README.md → "Content to confirm".
 */

export const SITE = {
  name: "Nigat Export",
  shortName: "Nigat",
  description:
    "Nigat Export — Ethiopian green coffee, roasted coffee, cereals, pulses and oilseeds. Explore our products and export services, or request a quote.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const CONTACT = {
  /** PLACEHOLDER — replace with the real phone number. */
  phone: "+251 000 000 000",
  /** PLACEHOLDER — `tel:` form of the phone number above. */
  phoneHref: "tel:+251000000000",
  /** PLACEHOLDER — `.example` is a reserved, non-routable domain. */
  email: "export@nigatexport.example",
  /** PLACEHOLDER — replace with the real office address. */
  address: "Addis Ababa, Ethiopia — address to be confirmed",
  /** PLACEHOLDER — replace with real office hours. */
  hours: "Office hours to be confirmed",
} as const;
