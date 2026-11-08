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
 * Fixed header: transparent over the opening photograph, smoked glass once
 * scrolled, slides away while scrolling down and returns on scroll up.
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
        "fixed inset-x-0 top-0 z-50 text-paper transition-[transform,background-color,border-color] duration-700 ease-drive",
        "border-b",
        scrolled || menuOpen
          ? "border-line-inverse bg-ink/85 backdrop-blur-xl"
          : "border-transparent bg-linear-to-b from-ink/60 to-transparent",
        hidden && !menuOpen && "-translate-y-full",
      )}
    >
      <Container className="flex h-(--header-height) items-center justify-between gap-8">
        <Logo />
        <DesktopNav items={MAIN_NAV} />
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="type-nav hidden items-center gap-2 text-silver transition-colors hover:text-paper xl:flex"
          >
            <Phone aria-hidden className="size-3.5 text-accent" />
            {CONTACT.phone}
          </a>
          <ButtonLink href={HEADER_CTA.href} variant="outline" className="min-h-11 px-5">
            {HEADER_CTA.label}
          </ButtonLink>
        </div>
        <MobileNavToggle open={menuOpen} controls={MOBILE_NAV_ID} onToggle={() => setMenuOpen((open) => !open)} />
      </Container>

      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <MobileNav id={MOBILE_NAV_ID} open={menuOpen} items={MAIN_NAV} cta={HEADER_CTA} onNavigate={closeMenu} />
    </>
  );
}
