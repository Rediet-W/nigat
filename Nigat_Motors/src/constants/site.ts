/**
 * Nigat Motors — company information.
 *
 * Verified company details. `SITE` / `CONTACT` / `SOCIAL_LINKS` are the
 * English (en) values rendered by the site; `SITE_AM` / `CONTACT_AM` hold the
 * matching Amharic (am) values for localized use.
 */

export const SITE = {
  name: "Nigat Motors",
  shortName: "Nigat",
  /** Official registered organization name. */
  legalName: "Nigat Fanawi Trading PLC",
  industry: "Construction",
  established: 2018,
  description:
    "Nigat Motors (Nigat Fanawi Trading PLC) — electric and hybrid vehicles with after-sales warranty and maintenance garage support in Addis Ababa. Explore our vehicles and services, or get in touch with our team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/** Amharic (am) version of `SITE`. */
export const SITE_AM = {
  name: "ንጋት ሞተርስ",
  shortName: "ንጋት",
  legalName: "ንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ.",
  industry: "ኮንስትራክሽን",
  established: 2018,
  description:
    "ንጋት ሞተርስ (ንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ.) — የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች ከሽያጭ በኋላ የዋስትና እና የጋራዥ ጥገና አገልግሎት ጋር በአዲስ አበባ። ተሽከርካሪዎቻችንን እና አገልግሎቶቻችንን ይመልከቱ ወይም ቡድናችንን ያግኙ።",
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
  { label: "TikTok", labelAm: "ቲክቶክ", href: "https://www.tiktok.com/@nigat.fanawi" },
  { label: "LinkedIn", labelAm: "ሊንክድኢን", href: "https://www.linkedin.com/company/nigatfanawi" },
  { label: "Facebook", labelAm: "ፌስቡክ", href: "https://web.facebook.com/profile.php?id=61596065924984" },
];

