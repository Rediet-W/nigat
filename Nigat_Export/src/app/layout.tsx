import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { SITE } from "@/constants/site";
import "@/styles/globals.css";

/** Display face: a soft variable serif (optical size + softness axes). */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

/** Text face. */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Coffee, Cereals & Pulses`,
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
  themeColor: "#f4efe6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>
            {".reveal{opacity:1!important;filter:none!important;transform:none!important;clip-path:none!important}.reveal img{transform:none!important}"}
          </style>
        </noscript>
        <a
          href="#main-content"
          className="type-nav sr-only z-[200] rounded-full bg-forest px-5 py-3 text-canvas focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
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
