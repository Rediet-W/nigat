"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { ActivePath, isActivePath } from "./ActivePath";

interface DesktopNavProps {
  items: NavItem[];
}

/**
 * Pill links (≥ 1024px). Items with children open a rounded panel beneath
 * the header on hover or keyboard focus.
 */
export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav aria-label="Main" className="hidden h-full lg:block">
      <ActivePath>
        {(pathname) => (
          <ul className="flex h-full items-center gap-1">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href} className="group flex h-full items-center">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={item.children ? "true" : undefined}
                    className={cn(
                      "type-nav rounded-full px-3.5 py-2 transition-colors duration-500 xl:px-4",
                      active ? "bg-forest text-canvas" : "text-muted hover:bg-sand hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div
                      className={cn(
                        "invisible absolute inset-x-0 top-full pt-3 opacity-0",
                        "-translate-y-2 transition-all duration-500 ease-soft",
                        "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
                        "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                      )}
                    >
                      <div className="grid grid-cols-4 gap-2 rounded-panel border border-line bg-shell/95 p-2 shadow-[0_30px_60px_-35px_rgb(16_38_26/0.5)] backdrop-blur-xl">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="group/item flex flex-col gap-3 rounded-card p-6 transition-colors duration-500 hover:bg-sand aria-[current=page]:bg-sand"
                          >
                            <span className="flex items-center justify-between">
                              <span className="type-number text-sm text-muted">{formatIndex(index)}</span>
                              <ArrowUpRight
                                aria-hidden
                                className="size-4 text-ochre opacity-0 transition-all duration-500 ease-soft group-hover/item:opacity-100"
                              />
                            </span>
                            <span className="type-h3 text-ink">{child.label}</span>
                            {child.description && (
                              <span className="text-sm leading-relaxed text-muted">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
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
