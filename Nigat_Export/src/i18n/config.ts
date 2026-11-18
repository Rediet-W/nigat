/**
 * Languages the site is published in.
 *
 * English is the default and keeps its original, unprefixed URLs (`/about`).
 * Every other language lives under its own prefix (`/am/about`). `src/proxy.ts`
 * rewrites unprefixed requests to the internal `/en/...` routes.
 */
export const LOCALES = ["en", "am"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Short labels for the language switcher, written in their own language. */
export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  am: { short: "አማ", name: "አማርኛ" },
};

/** `lang` attribute / Open Graph locale for each language. */
export const LOCALE_TAGS: Record<Locale, { html: string; og: string }> = {
  en: { html: "en", og: "en_US" },
  am: { html: "am", og: "am_ET" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Public URL of an internal path in the given language: `/about` → `/am/about`. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === "/") return `/${locale}`;
  return path.startsWith("/?") || path.startsWith("/#") ? `/${locale}${path.slice(1)}` : `/${locale}${path}`;
}

/** Splits a public pathname into its language and the unprefixed path. */
export function parsePathname(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (isLocale(first) && first !== DEFAULT_LOCALE) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
