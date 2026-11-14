import type { Metadata, Viewport } from "next";
import { Archivo, Manrope } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { SITE } from "@/constants/site";
import "@/styles/globals.css";

/** Display face — variable width axis is used for the extended headline style. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/** Body face. */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Vehicles, Servicing & Parts`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important;clip-path:none!important}.reveal img{transform:none!important}"}</style>
        </noscript>
        <a
          href="#main-content"
          className="type-nav sr-only z-[200] bg-accent px-5 py-4 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
