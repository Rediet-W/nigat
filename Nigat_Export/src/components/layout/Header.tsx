"use client";

import { useCallback, useState } from "react";
import { Phone } from "lucide-react";
import { HEADER_CTA, MAIN_NAV } from "@/constants/navigation";
import { CONTACT } from "@/constants/site";
import { useOverlay } from "@/hooks/useOverlay";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/cn";
import { ButtonLink, Container, Logo } from "@/components/ui";
import { DesktopNav } from "./DesktopNav";
import { MobileNav, MobileNavToggle } from "./MobileNav";

const MOBILE_NAV_ID = "mobile-navigation";

/**
 * Solid linen header: logo and menu on the left, phone and the leaf-green call
 * to action on the right. Slides away while scrolling down, returns on
 * scroll up; the rule darkens once the page has scrolled.
 */
export function Header() {
  const { scrolled, hidden } = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useOverlay(menuOpen, closeMenu);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-paper/95 text-ink backdrop-blur-xl transition-[transform,border-color] duration-700 ease-drive",
          scrolled || menuOpen ? "border-ink/25" : "border-line",
          hidden && !menuOpen && "-translate-y-full",
        )}
      >
        <Container className="flex h-(--header-height) items-center gap-8">
          <Logo onLight />
          <div className="hidden h-full flex-1 lg:ml-6 lg:block xl:ml-10">
            <DesktopNav items={MAIN_NAV} />
          </div>
          <div className="ml-auto hidden items-center gap-7 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className="type-nav hidden items-center gap-2 text-steel transition-colors hover:text-ink xl:flex"
            >
              <Phone aria-hidden className="size-3.5 text-accent" />
              {CONTACT.phone}
            </a>
            <ButtonLink href={HEADER_CTA.href} className="min-h-11 px-5">
              {HEADER_CTA.label}
            </ButtonLink>
          </div>
          <div className="ml-auto lg:hidden">
            <MobileNavToggle open={menuOpen} controls={MOBILE_NAV_ID} onToggle={() => setMenuOpen((open) => !open)} />
          </div>
        </Container>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <MobileNav id={MOBILE_NAV_ID} open={menuOpen} items={MAIN_NAV} cta={HEADER_CTA} onNavigate={closeMenu} />
    </>
  );
}
