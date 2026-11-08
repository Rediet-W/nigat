"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Container } from "@/components/ui";
import { ActivePath, isActivePath } from "./ActivePath";

interface DesktopNavProps {
  items: NavItem[];
}

/**
 * Centred uppercase menu (≥ 1024px). Items with children open a
 * full-width panel beneath the header on hover or keyboard focus.
 */
export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav aria-label="Main" className="hidden h-full lg:block">
      <ActivePath>
        {(pathname) => (
          <ul className="flex h-full items-center gap-7 xl:gap-10">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href} className="group flex h-full items-center">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={item.children ? "true" : undefined}
                    className={cn(
                      "nav-link type-nav transition-colors duration-500",
                      active ? "text-paper" : "text-silver hover:text-paper",
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div
                      className={cn(
                        "invisible absolute inset-x-0 top-full border-y border-line-inverse bg-ink/95 opacity-0 backdrop-blur-xl",
                        "-translate-y-2 transition-all duration-500 ease-drive",
                        "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                        "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                      )}
                    >
                      <Container className="grid grid-cols-4 gap-px py-10">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="group/item flex flex-col gap-3 border-l border-line-inverse px-6 py-2 transition-colors duration-500 hover:border-accent aria-[current=page]:border-accent"
                          >
                            <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
                            <span className="type-h4 flex items-start justify-between gap-3 text-paper">
                              {child.label}
                              <ArrowUpRight
                                aria-hidden
                                className="size-4 shrink-0 opacity-0 transition-all duration-500 ease-drive group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                              />
                            </span>
                            {child.description && (
                              <span className="text-sm leading-relaxed text-silver">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </Container>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </ActivePath>
    </nav>
  );
}
