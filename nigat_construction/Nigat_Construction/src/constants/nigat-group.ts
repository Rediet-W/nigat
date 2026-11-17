/**
 * Nigat Group — the parent company and its three sector websites.
 * Used by the header "Nigat Group" switcher, the mobile menu and the footer band.
 */

import type { Locale } from "@/i18n/config";

/*
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ SECTOR WEBSITE URLS — edit these once the real domains are live.          │
 * │ Each one can also be set without touching code through an env var:        │
 * │   NEXT_PUBLIC_CONSTRUCTION_URL, NEXT_PUBLIC_MOTORS_URL,                   │
 * │   NEXT_PUBLIC_EXPORTS_URL                                                 │
 * │ (NEXT_PUBLIC_ vars are baked in at build time, so rebuild after changing.) │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
export const SECTOR_URLS = {
  construction: "https://nigat-construction.vercel.app/",
  /** PLACEHOLDER */
  motors: "https://nigat-motors.vercel.app/",
  /** PLACEHOLDER */
  exports: "https://nigat-exports.vercel.app/",
} as const;

export type SectorKey = keyof typeof SECTOR_URLS;

/** The sector this website belongs to. */
export const CURRENT_SECTOR: SectorKey = "construction";

export const GROUP = {
  name: "Nigat Group",
  nameAm: "ንጋት ግሩፕ",
} as const;

export interface Sector {
  key: SectorKey;
  name: string;
  nameAm: string;
  description: string;
  descriptionAm: string;
  href: string;
}

export const SECTORS: readonly Sector[] = [
  {
    key: "construction",
    name: "Nigat Construction",
    nameAm: "ንጋት ኮንስትራክሽን",
    description: "Building and construction projects.",
    descriptionAm: "የሕንፃ እና የኮንስትራክሽን ፕሮጀክቶች።",
    href: process.env.NEXT_PUBLIC_CONSTRUCTION_URL || SECTOR_URLS.construction,
  },
  {
    key: "motors",
    name: "Nigat Motors",
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

export interface SectorLink {
  key: SectorKey;
  /** "01", "02", "03" */
  number: string;
  name: string;
  description: string;
  /** This site's home route for the current sector, the sector's URL otherwise. */
  href: string;
  current: boolean;
}

/** Group name and sector links in the visitor's language. */
export function groupNavigation(locale: Locale, homeHref: string) {
  const am = locale === "am";
  return {
    groupName: am ? GROUP.nameAm : GROUP.name,
    sectors: SECTORS.map(
      (sector, index): SectorLink => ({
        key: sector.key,
        number: String(index + 1).padStart(2, "0"),
        name: am ? sector.nameAm : sector.name,
        description: am ? sector.descriptionAm : sector.description,
        href: sector.key === CURRENT_SECTOR ? homeHref : sector.href,
        current: sector.key === CURRENT_SECTOR,
      }),
    ),
  };
}
