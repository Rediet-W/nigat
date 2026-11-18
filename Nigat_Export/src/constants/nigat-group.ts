import type { Locale } from "@/i18n/config";

/**
 * Nigat Group — sector websites.
 *
 * Nigat Fanawi Trading PLC is the parent company; Construction, Motors and
 * Exports each have their own website. This file drives the sector switcher
 * in the header, the mobile menu and the footer.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  EDIT HERE: the URL of each sector website.                          │
 * │  An environment variable, when set, overrides the value below        │
 * │  (handy for local testing or staging):                               │
 * │    NEXT_PUBLIC_CONSTRUCTION_URL, NEXT_PUBLIC_MOTORS_URL,             │
 * │    NEXT_PUBLIC_EXPORTS_URL                                           │
 * │  `.example` domains are reserved PLACEHOLDERS — replace them.        │
 * └──────────────────────────────────────────────────────────────────────┘
 */
const SECTOR_URLS = {
  construction: "https://nigat-construction.vercel.app/",
  motors: "https://nigat-motors.vercel.app/",
  exports: "https://nigat-exports.vercel.app/",
};

/** The sector this website belongs to. */
export const CURRENT_SECTOR: SectorKey = "exports";

// ---------------------------------------------------------------------------

export type SectorKey = "construction" | "motors" | "exports";

export interface Sector {
  key: SectorKey;
  name: string;
  nameAm: string;
  description: string;
  descriptionAm: string;
  href: string;
}

export const GROUP = {
  name: "Nigat Group",
  nameAm: "ንጋት ግሩፕ",
} as const;

export const SECTORS: Sector[] = [
  {
    key: "construction",
    name: "Nigat Fanawi Construction",
    nameAm: "ንጋት ኮንስትራክሽን",
    description: "Building and construction projects.",
    descriptionAm: "የሕንፃ እና የኮንስትራክሽን ፕሮጀክቶች።",
    href: process.env.NEXT_PUBLIC_CONSTRUCTION_URL || SECTOR_URLS.construction,
  },
  {
    key: "motors",
    name: "NF Car Importer",
    nameAm: "ንጋት ሞተርስ",
    description: "Electric & hybrid vehicles and after-sales support.",
    descriptionAm: "የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች እና ከሽያጭ በኋላ ድጋፍ።",
    href: process.env.NEXT_PUBLIC_MOTORS_URL || SECTOR_URLS.motors,
  },
  {
    key: "exports",
    name: "Nigat Exports",
    nameAm: "ንጋት ኤክስፖርት",
    description: "Export trade from Ethiopia.",
    descriptionAm: "ከኢትዮጵያ የሚላኩ የወጪ ንግድ ምርቶች።",
    href: process.env.NEXT_PUBLIC_EXPORTS_URL || SECTOR_URLS.exports,
  },
];

/** One-word sector labels for the mobile menu, where full names don't fit. */
const SECTOR_SHORT_NAMES: Record<SectorKey, Record<Locale, string>> = {
  construction: { en: "Construction", am: "ኮንስትራክሽን" },
  motors: { en: "Motors", am: "ሞተርስ" },
  exports: { en: "Exports", am: "ኤክስፖርት" },
};

/** A sector's name, description and link resolved for one language. */
export interface LocalizedSector {
  key: SectorKey;
  name: string;
  /** One-word sector label for tight spaces (mobile menu). */
  shortName: string;
  description: string;
  href: string;
  current: boolean;
}

/**
 * Sectors ready to render. The current sector links to this site's home
 * route (`homeHref`); the others link to their own websites.
 */
export function getSectors(
  locale: Locale,
  homeHref: string,
): LocalizedSector[] {
  return SECTORS.map((sector) => {
    const name = locale === "am" ? sector.nameAm : sector.name;
    const current = sector.key === CURRENT_SECTOR;
    return {
      key: sector.key,
      name,
      shortName: SECTOR_SHORT_NAMES[sector.key][locale],
      description: locale === "am" ? sector.descriptionAm : sector.description,
      href: current ? homeHref : sector.href,
      current,
    };
  });
}

export function getGroupName(locale: Locale): string {
  return locale === "am" ? GROUP.nameAm : GROUP.name;
}
