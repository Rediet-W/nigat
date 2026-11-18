"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, parsePathname } from "@/i18n/config";

type RenderWithPath = (pathname: string | null) => ReactNode;

/**
 * English pages are prerendered at `/en/...` and served at `/...` through a
 * rewrite, so the server and the browser can report different pathnames.
 * Dropping the internal `/en` prefix gives both sides the public URL.
 */
function toPublicPathname(pathname: string | null): string | null {
  if (!pathname) return pathname;
  const prefix = `/${DEFAULT_LOCALE}`;
  if (pathname === prefix) return "/";
  return pathname.startsWith(`${prefix}/`) ? pathname.slice(prefix.length) : pathname;
}

function PathnameReader({ children }: { children: RenderWithPath }) {
  return children(toPublicPathname(usePathname()));
}

/**
 * Supplies the current (public) pathname to navigation UI.
 * With Cache Components, `usePathname` can suspend on routes whose params
 * are only known at request time, so the read is isolated behind Suspense
 * and the fallback renders the same UI without an active state.
 */
export function ActivePath({ children }: { children: RenderWithPath }) {
  return (
    <Suspense fallback={children(null)}>
      <PathnameReader>{children}</PathnameReader>
    </Suspense>
  );
}

export function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  // A language's home ("/" or "/am") is only active on itself.
  if (parsePathname(href).path === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
