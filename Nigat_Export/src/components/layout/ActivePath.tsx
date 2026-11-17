"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type RenderWithPath = (pathname: string | null) => ReactNode;

function PathnameReader({ children }: { children: RenderWithPath }) {
  return children(usePathname());
}

/**
 * Supplies the current pathname to navigation UI.
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
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
