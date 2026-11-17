import "server-only";

import type { Metadata } from "next";
import { cookies } from "next/headers";
import { cache } from "react";

import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/i18n/dictionaries/en").then((m) => m.en),
  am: () => import("@/i18n/dictionaries/am").then((m) => m.am),
};

/** Current visitor's language, read from the locale cookie (once per request). */
export const getLocale = cache(async (): Promise<Locale> => {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
});

/** Translations for the current visitor's language. Use in Server Components. */
export const getDictionary = cache(async (): Promise<Dictionary> => dictionaries[await getLocale()]());

/** `generateMetadata` for a page whose browser-tab title comes from `meta.titles`. */
export function pageMetadata(key: keyof Dictionary["meta"]["titles"]) {
  return async (): Promise<Metadata> => ({ title: (await getDictionary()).meta.titles[key] });
}
