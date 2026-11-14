"use client";

import { useEffect } from "react";

/**
 * Shared behaviour for overlays (mobile menu, lightbox):
 * locks page scroll while open and closes on Escape.
 */
export function useOverlay(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
}
