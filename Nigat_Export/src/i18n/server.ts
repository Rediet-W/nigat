import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, localizePath, type Locale } from "./config";
import { DICTIONARIES, type Dictionary } from "./dictionaries";

/** Language of the current request, read from the `[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** UI copy for the current language. */
export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary; href: (path: string) => string }> {
  const locale = await getLocale();
  return { locale, t: DICTIONARIES[locale], href: (path: string) => localizePath(locale, path) };
}
