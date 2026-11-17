"use client";

import { useCallback, useState } from "react";
import { Phone } from "lucide-react";
import { HEADER_CTA, MAIN_NAV } from "@/constants/navigation";
import { CONTACT } from "@/constants/site";
import { useOverlay } from "@/hooks/useOverlay";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/cn";
import { ButtonLink, Logo } from "@/components/ui";
import { DesktopNav } from "./DesktopNav";
import { MobileNav, MobileNavToggle } from "./MobileNav";

const MOBILE_NAV_ID = "mobile-navigation";

/**
 * Floating glass pill: inset from the page edges, firmer once scrolled,
 * slides away while scrolling down and returns on scroll up.
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
          "fixed inset-x-0 top-0 z-50 px-[calc(var(--frame)_+_0.5rem)] pt-[calc(var(--frame)_+_0.5rem)] transition-transform duration-700 ease-soft",
          hidden && !menuOpen && "-translate-y-[130%]",
        )}
      >
        <div
          className={cn(
            "relative mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 rounded-full border pr-2 pl-5 text-ink backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-700 ease-soft",
            scrolled || menuOpen
              ? "border-line bg-shell/90 shadow-[0_18px_50px_-30px_rgb(16_38_26/0.45)]"
              : "border-shell/40 bg-shell/75",
          )}
        >
          <Logo />
          <DesktopNav items={MAIN_NAV} />
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className="type-nav hidden items-center gap-2 text-muted transition-colors hover:text-ink xl:flex"
            >
              <Phone aria-hidden className="size-3.5 text-ochre" />
              {CONTACT.phone}
            </a>
            <ButtonLink href={HEADER_CTA.href} className="min-h-12">
              {HEADER_CTA.label}
            </ButtonLink>
          </div>
          <MobileNavToggle open={menuOpen} controls={MOBILE_NAV_ID} onToggle={() => setMenuOpen((open) => !open)} />
        </div>
      </header>
      {/* Rendered outside <header>: the pill's backdrop-filter would otherwise trap this fixed overlay. */}
      <MobileNav id={MOBILE_NAV_ID} open={menuOpen} items={MAIN_NAV} cta={HEADER_CTA} onNavigate={closeMenu} />
    </>
  );
}
