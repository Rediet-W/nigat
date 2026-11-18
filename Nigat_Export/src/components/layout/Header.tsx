"use client";

import { useCallback, useState } from "react";
import { Phone } from "lucide-react";
import type { Navigation } from "@/constants/navigation";
import { CONTACT } from "@/constants/site";
import { useOverlay } from "@/hooks/useOverlay";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { ButtonLink, Container, Logo, type LogoProps } from "@/components/ui";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav, MobileNavToggle } from "./MobileNav";
import { SectorSwitcher, type GroupNavProps } from "./SectorSwitcher";

const MOBILE_NAV_ID = "mobile-navigation";

interface HeaderProps {
  locale: Locale;
  nav: Navigation;
  logo: Pick<LogoProps, "href" | "label" | "wordmark">;
  group: GroupNavProps;
  t: Pick<Dictionary, "nav" | "common">;
}

/**
 * Solid linen header: logo and menu on the left; the Nigat Group switcher,
 * language, phone (≥ 1536px) and the leaf-green call to action on the right. Slides
 * away while scrolling down, returns on scroll up; the rule darkens once
 * the page has scrolled.
 */
export function Header({ locale, nav, logo, group, t }: HeaderProps) {
  const { scrolled, hidden } = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useOverlay(menuOpen, closeMenu);

  const languageSwitch = (
    <LanguageSwitch locale={locale} switchLabel={t.common.switchLanguage} />
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-paper/95 text-ink backdrop-blur-xl transition-[transform,border-color] duration-700 ease-drive",
          scrolled || menuOpen ? "border-ink/25" : "border-line",
          hidden && !menuOpen && "-translate-y-full",
        )}
      >
        <Container className="flex h-(--header-height) items-center gap-8 lg:gap-6 xl:gap-8">
          {/* 1024–1279px: mark only, so the menu, group switcher and language fit on one line. */}
          <Logo onLight {...logo} className="shrink-0" wordmarkClassName="lg:hidden xl:flex" />
          <div className="hidden h-full flex-1 lg:block xl:ml-10">
            <DesktopNav items={nav.main} label={t.nav.mainLabel} />
          </div>
          <div className="ml-auto hidden h-full items-center gap-4 lg:flex xl:gap-7">
            <SectorSwitcher {...group} />
            {languageSwitch}
            <a
              href={CONTACT.phoneHref}
              className="type-nav hidden items-center gap-2 text-steel transition-colors hover:text-ink 2xl:flex"
            >
              <Phone aria-hidden className="size-3.5 text-accent" />
              {CONTACT.phone}
            </a>
            <ButtonLink href={nav.cta.href} className="min-h-11 shrink-0 px-5 whitespace-nowrap">
              {nav.cta.label}
            </ButtonLink>
          </div>
          <div className="ml-auto flex items-center gap-5 lg:hidden">
            {languageSwitch}
            <MobileNavToggle
              open={menuOpen}
              controls={MOBILE_NAV_ID}
              label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              onToggle={() => setMenuOpen((open) => !open)}
            />
          </div>
        </Container>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <MobileNav
        id={MOBILE_NAV_ID}
        open={menuOpen}
        items={nav.main}
        cta={nav.cta}
        group={group}
        t={t.nav}
        onNavigate={closeMenu}
      />
    </>
  );
}
