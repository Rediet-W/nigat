import type Lenis from "lenis";

/**
 * The single Lenis instance created by <SmoothScroll />. Kept in module scope so
 * overlays (lightboxes) can pause smooth scrolling without prop drilling.
 */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}
