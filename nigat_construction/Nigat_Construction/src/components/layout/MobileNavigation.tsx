"use client";

import Link from "next/link";
import { createContext, useContext, useState, type KeyboardEvent, type ReactNode } from "react";

import { MAIN_NAVIGATION } from "@/constants/navigation";
import { useCollapse } from "@/hooks/useCollapse";
import { useI18n } from "@/i18n/I18nProvider";
import type { NavItem } from "@/types";

/*
 * React replacement for jQuery SlickNav. The toggle button lives in
 * `.navbar-toggle` and the menu in `.responsive-menu` (different places in the
 * header), so they share state through a small context. Markup and class names
 * match what SlickNav generated so the template CSS applies unchanged.
 */

const SLIDE_DURATION = 200;

interface MobileMenuState {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const MobileMenuContext = createContext<MobileMenuState | null>(null);

function useMobileMenu(): MobileMenuState {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("Mobile menu components must be inside <MobileMenuProvider>.");
  return ctx;
}

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value: MobileMenuState = {
    open,
    toggle: () => setOpen((o) => !o),
    close: () => setOpen(false),
  };
  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

/** Activates on Enter/Space like a native button (SlickNav used an <a role="button">). */
function onActivateKey(action: () => void) {
  return (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
}

export function MobileMenuToggle() {
  const { open, toggle } = useMobileMenu();
  const { dict } = useI18n();
  return (
    <a
      href="#"
      aria-haspopup="true"
      aria-expanded={open}
      aria-label={dict.common.toggleMenu}
      role="button"
      tabIndex={0}
      className={`slicknav_btn ${open ? "slicknav_open" : "slicknav_collapsed"}`}
      onClick={(event) => {
        event.preventDefault();
        toggle();
      }}
      onKeyDown={onActivateKey(toggle)}
    >
      <span className="slicknav_menutxt" />
      <span className="slicknav_icon slicknav_no-text">
        <span className="slicknav_icon-bar" />
        <span className="slicknav_icon-bar" />
        <span className="slicknav_icon-bar" />
      </span>
    </a>
  );
}

/** Animated list that is `display: none` when closed, like jQuery slideUp/slideDown. */
function SlideList({ open, className, children }: { open: boolean; className?: string; children: ReactNode }) {
  const { ref, phase, style } = useCollapse<HTMLUListElement>(open, SLIDE_DURATION, "ease-in-out");
  const hidden = phase === "closed";
  return (
    <ul
      ref={ref}
      role="menu"
      aria-hidden={hidden}
      className={[className, hidden ? "slicknav_hidden" : ""].filter(Boolean).join(" ") || undefined}
      style={hidden ? { display: "none" } : { ...style, display: "block" }}
    >
      {children}
    </ul>
  );
}

function ParentItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const { dict } = useI18n();
  const toggle = () => setOpen((o) => !o);
  return (
    <li className={`nav-item submenu slicknav_parent ${open ? "slicknav_open" : "slicknav_collapsed"}`}>
      <a
        href="#"
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={open}
        tabIndex={0}
        className="slicknav_item slicknav_row"
        onClick={(event) => {
          event.preventDefault();
          toggle();
        }}
      >
        <span className="nav-link slicknav_parent-label">{dict.nav[item.labelKey]}</span>
        <span className="slicknav_arrow">{open ? "▼" : "►"}</span>
      </a>
      <SlideList open={open}>
        {item.children?.map((child) => (
          <li key={child.labelKey} className="nav-item">
            <Link className="nav-link" href={child.href} role="menuitem" onClick={onNavigate}>
              {dict.nav[child.labelKey]}
            </Link>
          </li>
        ))}
      </SlideList>
    </li>
  );
}

export function MobileMenu() {
  const { open, close } = useMobileMenu();
  const { dict } = useI18n();
  return (
    <div className="slicknav_menu">
      <SlideList open={open} className="slicknav_nav">
        {MAIN_NAVIGATION.map((item) =>
          item.children ? (
            <ParentItem key={item.labelKey} item={item} onNavigate={close} />
          ) : (
            <li key={item.labelKey} className="nav-item">
              <Link className="nav-link" href={item.href} role="menuitem" onClick={close}>
                {dict.nav[item.labelKey]}
              </Link>
            </li>
          ),
        )}
      </SlideList>
    </div>
  );
}
