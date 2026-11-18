"use client";

import Link from "next/link";
import { LOCALE_LABELS, LOCALES, localizePath, parsePathname, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { ActivePath } from "./ActivePath";

interface LanguageSwitchProps {
  locale: Locale;
  /** "Read this page in {language}" — `{language}` is filled with the target language. */
  switchLabel: string;
  inverse?: boolean;
  className?: string;
}

/**
 * Compact language toggle: a single link, written in the other language
 * ("አማ" on English pages, "EN" on Amharic pages), to the same page in it.
 */
export function LanguageSwitch({ locale, switchLabel, inverse, className }: LanguageSwitchProps) {
  const target = LOCALES.find((option) => option !== locale) ?? locale;

  return (
    <ActivePath>
      {(pathname) => (
        <Link
          href={localizePath(target, pathname ? parsePathname(pathname).path : "/")}
          hrefLang={target}
          lang={target}
          aria-label={switchLabel.replace("{language}", LOCALE_LABELS[target].name)}
          className={cn(
            "type-nav flex min-h-11 items-center whitespace-nowrap transition-colors duration-500",
            inverse ? "text-silver hover:text-paper" : "text-steel hover:text-ink",
            className,
          )}
        >
          {LOCALE_LABELS[target].short}
        </Link>
      )}
    </ActivePath>
  );
}
