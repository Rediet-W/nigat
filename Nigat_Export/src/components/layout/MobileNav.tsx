"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Mail, Phone, Plus } from "lucide-react";
import { CONTACT } from "@/constants/site";
import type { NavItem, NavLink } from "@/types";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Container } from "@/components/ui";
import type { Dictionary } from "@/i18n/dictionaries";
import { ActivePath, isActivePath } from "./ActivePath";
import type { GroupNavProps } from "./SectorSwitcher";

interface MobileNavToggleProps {
  open: boolean;
  controls: string;
  /** "Open menu" / "Close menu" in the current language. */
  label: string;
  onToggle: () => void;
}

/** Two-line toggle that crosses into an X. */
export function MobileNavToggle({ open, controls, label, onToggle }: MobileNavToggleProps) {
  const line = "absolute left-1/2 h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ease-drive";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={label}
      className="relative flex size-11 items-center justify-center border border-line lg:hidden"
    >
      <span className={cn(line, open ? "top-1/2 rotate-45" : "top-[42%]")} />
      <span className={cn(line, open ? "top-1/2 -rotate-45" : "top-[58%]")} />
    </button>
  );
}

interface MobileNavProps {
  id: string;
  open: boolean;
  items: NavItem[];
  cta: NavLink;
  group: GroupNavProps;
  t: Dictionary["nav"];
  onNavigate: () => void;
}

const stagger = (index: number) => ({ animationDelay: `${120 + index * 60}ms` }) as CSSProperties;

/** Full-screen menu (< 1024px) with large numbered links. */
export function MobileNav({ id, open, items, cta, group, t, onNavigate }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id={id}
      inert={!open}
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-ink pt-(--header-height) text-paper transition-[opacity,visibility] duration-500 ease-drive lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <Container className="flex min-h-full flex-col justify-between gap-12 py-10">
        <nav aria-label={t.mobileLabel}>
          <ActivePath>
            {(pathname) => (
              <ul>
                {items.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  const isExpanded = expanded === item.href;

                  return (
                    <li
                      key={item.href}
                      className={cn("border-b border-line-inverse", open && "animate-rise")}
                      style={stagger(index)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="type-number w-7 text-xs text-accent">{formatIndex(index)}</span>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "type-menu flex-1 py-4",
                            active ? "text-accent" : "text-paper",
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => setExpanded(isExpanded ? null : item.href)}
                            aria-expanded={isExpanded}
                            aria-label={(isExpanded ? t.hideChildren : t.showChildren).replace("{label}", item.label)}
                            className="flex size-10 items-center justify-center border border-line-inverse"
                          >
                            <Plus
                              aria-hidden
                              className={cn("size-4 transition-transform duration-500", isExpanded && "rotate-45")}
                            />
                          </button>
                        )}
                      </div>
                      {item.children && isExpanded && (
                        <ul className="pb-5 pl-11">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onNavigate}
                                aria-current={pathname === child.href ? "page" : undefined}
                                className="type-nav block py-2.5 text-silver aria-[current=page]:text-accent"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </ActivePath>
        </nav>

        <div className={cn("space-y-6", open && "animate-rise")} style={stagger(items.length)}>
          <nav aria-label={group.groupName}>
            <p className="type-eyebrow mb-3 text-silver">{group.groupName}</p>
            <ul className="grid grid-cols-[repeat(3,auto)] gap-px border border-line-inverse bg-line-inverse">
              {group.sectors.map((sector) => (
                <li key={sector.key} className="bg-ink">
                  <a
                    href={sector.href}
                    onClick={sector.current ? onNavigate : undefined}
                    aria-current={sector.current ? "page" : undefined}
                    className="type-nav flex min-h-11 items-center justify-center gap-1.5 px-1 py-3 text-center tracking-[0.04em] text-silver aria-[current=page]:text-accent"
                  >
                    {sector.shortName}
                    {!sector.current && <ArrowUpRight aria-hidden className="size-3 shrink-0" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 text-silver">
            <a href={CONTACT.phoneHref} className="flex items-center gap-3">
              <Phone aria-hidden className="size-4 text-accent" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all">
              <Mail aria-hidden className="size-4 text-accent" /> {CONTACT.email}
            </a>
          </div>
          <ButtonLink href={cta.href} onClick={onNavigate} className="w-full">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
