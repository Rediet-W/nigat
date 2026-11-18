import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Hanken_Grotesk, Noto_Sans_Ethiopic } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { getNavigation } from "@/constants/navigation";
import { getGroupName, getSectors } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import { getSite } from "@/constants/site";
import { LOCALE_TAGS, LOCALES } from "@/i18n/config";
import { fill } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";
import { localeAlternates } from "@/lib/metadata";
import "@/styles/globals.css";

/** Display face — a condensed, industrial grotesque used in uppercase. */
const shoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin"],
  display: "swap",
});

/** Text face, also used for sub-headings. */
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Ethiopic fallback: neither face above has Amharic glyphs, so Ge'ez script
 * falls through to Noto Sans Ethiopic (see `--font-*` in globals.css).
 * Latin text keeps rendering in Big Shoulders / Hanken Grotesk.
 */
const ethiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  const site = getSite(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: fill(t.meta.defaultTitle, { name: site.name }),
      template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    alternates: localeAlternates(ROUTES.home, locale),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: LOCALE_TAGS[locale].og,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#eff1e6",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t, href } = await getDictionary();
  const site = getSite(locale);
  const homeHref = href(ROUTES.home);

  return (
    <html
      lang={LOCALE_TAGS[locale].html}
      className={`${shoulders.variable} ${hanken.variable} ${ethiopic.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important;clip-path:none!important}.reveal img{transform:none!important}"}</style>
        </noscript>
        <a
          href="#main-content"
          className="type-nav sr-only z-[200] bg-accent px-5 py-4 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {t.common.skipToContent}
        </a>
        <Header
          locale={locale}
          nav={getNavigation(locale)}
          logo={{
            href: homeHref,
            label: fill(t.common.logoLabel, { name: site.name }),
            wordmark: locale === "am" ? ["ንጋት", "ኤክስፖርት"] : undefined,
          }}
          group={{
            groupName: getGroupName(locale),
            tagline: fill(t.group.tagline, { legalName: site.legalName }),
            triggerLabel: fill(t.group.switchSector, { group: getGroupName(locale) }),
            youAreHere: t.group.youAreHere,
            sectors: getSectors(locale, homeHref),
          }}
          t={{ nav: t.nav, common: t.common }}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
