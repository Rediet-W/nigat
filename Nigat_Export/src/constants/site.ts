import type { Locale } from "@/i18n/config";

/**
 * Nigat Export — company information.
 *
 * Verified company details, shared with the other Nigat Group websites.
 * `SITE` / `CONTACT` are the English (en) values; `SITE_AM` / `CONTACT_AM`
 * hold the matching Amharic (am) values. Use `getSite()` / `getContact()`
 * to pick the right one for the current language.
 */

export const SITE = {
  name: "Nigat Export",
  shortName: "Nigat",
  /** Official registered organization name. */
  legalName: "Nigat Fanawi Trading PLC",
  description:
    "Nigat Export (Nigat Fanawi Trading PLC) — Ethiopian green coffee, roasted coffee, cereals, pulses and oilseeds. Explore our products and export services, or request a quote.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/** Amharic (am) version of `SITE`. */
export const SITE_AM = {
  name: "ንጋት ኤክስፖርት",
  shortName: "ንጋት",
  legalName: "ንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ.",
  description:
    "ንጋት ኤክስፖርት (ንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ.) — የኢትዮጵያ ጥሬና የተቆላ ቡና፣ የአገዳ እህሎች፣ ጥራጥሬዎችና የቅባት እህሎች። ምርቶቻችንንና የወጪ ንግድ አገልግሎቶቻችንን ይመልከቱ ወይም ዋጋ ይጠይቁ።",
  url: SITE.url,
} as const;

export const CONTACT = {
  phone: "0995888882",
  /** `tel:` form of the phone number above. */
  phoneHref: "tel:+251995888882",
  altPhone: "0995888883",
  /** `tel:` form of the alternative phone number above. */
  altPhoneHref: "tel:+251995888883",
  email: "nigatfanawi33@gmail.com",
  address: "Addis Ababa",
  /** 3:00–11:00 in Ethiopian local time. */
  hours: "9:00 AM – 5:00 PM (3:00 – 11:00 local time)",
} as const;

/** Amharic (am) version of `CONTACT`. Phone numbers, links and email are shared. */
export const CONTACT_AM = {
  ...CONTACT,
  address: "አዲስ አበባ",
  hours: "ከጠዋቱ 3:00 – ከቀኑ 11:00 ሰዓት",
} as const;

export interface SocialLink {
  label: string;
  labelAm: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "TikTok",
    labelAm: "ቲክቶክ",
    href: "https://www.tiktok.com/@nigat.fanawi",
  },
  {
    label: "LinkedIn",
    labelAm: "ሊንክድኢን",
    href: "https://www.linkedin.com/company/nigatfanawi",
  },
  {
    label: "Facebook",
    labelAm: "ፌስቡክ",
    href: "https://web.facebook.com/profile.php?id=61596065924984",
  },
];

type SiteInfo = { [K in keyof typeof SITE]: string };
type ContactInfo = { [K in keyof typeof CONTACT]: string };

export function getSite(locale: Locale): SiteInfo {
  return locale === "am" ? SITE_AM : SITE;
}

export function getContact(locale: Locale): ContactInfo {
  return locale === "am" ? CONTACT_AM : CONTACT;
}

export function socialLabel(link: SocialLink, locale: Locale): string {
  return locale === "am" ? link.labelAm : link.label;
}
