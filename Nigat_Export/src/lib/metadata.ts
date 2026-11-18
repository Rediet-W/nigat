import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALE_TAGS, LOCALES, localizePath, type Locale } from "@/i18n/config";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Unprefixed internal path, e.g. `/about`. */
  path: string;
  locale: Locale;
}

/** Canonical URL for this language plus `hreflang` links to every language. */
export function localeAlternates(path: string, locale: Locale): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = Object.fromEntries(
    LOCALES.map((option) => [LOCALE_TAGS[option].html, localizePath(option, path)]),
  );
  languages["x-default"] = localizePath(DEFAULT_LOCALE, path);
  return { canonical: localizePath(locale, path), languages };
}

/** Builds consistent per-page metadata (title template lives in the root layout). */
export function createMetadata({ title, description, path, locale }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: localeAlternates(path, locale),
    openGraph: { title, description, url: localizePath(locale, path), locale: LOCALE_TAGS[locale].og },
  };
}
