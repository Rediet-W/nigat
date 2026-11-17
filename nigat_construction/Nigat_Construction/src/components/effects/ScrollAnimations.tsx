"use client";

import { usePathname } from "next/navigation";

import { useGsapEffects } from "@/hooks/useGsapEffects";
import { useParallax } from "@/hooks/useParallax";
import { useWowAnimations } from "@/hooks/useWowAnimations";

/**
 * Runs the template's class-driven scroll effects (`wow`, `text-anime-style-3`,
 * `reveal`, `parallaxie`) for the current route. Keeping them here lets every
 * section stay a Server Component that simply carries the original classes.
 */
export function ScrollAnimations() {
  const pathname = usePathname();
  useWowAnimations(pathname);
  useGsapEffects(pathname);
  useParallax(pathname);
  return null;
}
