import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";
import type { ReactNode } from "react";

import { MagicCursor } from "@/components/effects/MagicCursor";
import { ScrollAnimations } from "@/components/effects/ScrollAnimations";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { BackToTop } from "@/components/ui/BackToTop";
import { SITE } from "@/constants/site";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary, getLocale } from "@/i18n/server";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

/** Amharic (Ge'ez script) glyphs, which Inter does not include. */
const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  return {
    title: { default: SITE.defaultTitle, template: `%s - ${SITE.name}` },
    description: t.meta.description,
    authors: [{ name: "AwaikenThemes" }],
    icons: { icon: "/images/favicon.png" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <html lang={locale} className={`${inter.variable} ${ethiopic.variable}`} suppressHydrationWarning>
      <head>
        {/* Flags JS availability before first paint so scroll-reveal content can start hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <I18nProvider locale={locale} dict={dict}>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <MagicCursor />
          <SmoothScroll />
          <ScrollAnimations />
        </I18nProvider>
      </body>
    </html>
  );
}
