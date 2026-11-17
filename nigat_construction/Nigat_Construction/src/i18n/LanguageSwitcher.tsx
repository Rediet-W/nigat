"use client";

import { LOCALES, LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Stores the choice in a cookie and reloads, so every server-rendered section
 * and the GSAP/WOW text animations start fresh in the new language.
 */
function switchLocale(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
  window.location.reload();
}

/** EN / አማ toggle shown in the header. */
export function LanguageSwitcher() {
  const { locale, dict } = useI18n();

  return (
    <div className="lang-switcher" role="group" aria-label={dict.common.language}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={code === locale ? "active" : undefined}
          aria-pressed={code === locale}
          title={LOCALE_LABELS[code].name}
          onClick={() => code !== locale && switchLocale(code)}
        >
          {LOCALE_LABELS[code].short}
        </button>
      ))}
    </div>
  );
}
