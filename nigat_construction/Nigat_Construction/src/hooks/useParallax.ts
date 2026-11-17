"use client";

import { useEffect } from "react";

const SPEED = 0.55;
const MIN_WIDTH = 1024;

/**
 * Port of the Parallaxie plugin used on `.parallaxie` sections (hero and page
 * headers): fixed background whose position follows the scroll at 0.55x.
 * Like the original, it only runs on screens wider than 1024px (checked on load).
 */
export function useParallax(key: string) {
  useEffect(() => {
    if (window.innerWidth <= MIN_WIDTH) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".parallaxie"));
    if (!elements.length) return;

    const update = () => {
      for (const el of elements) {
        const top = el.getBoundingClientRect().top; // = offset().top - scrollTop
        el.style.backgroundPosition = `center ${top * (1 - SPEED)}px`;
      }
    };

    for (const el of elements) {
      el.style.backgroundSize = "cover";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundAttachment = "fixed";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      for (const el of elements) {
        el.style.removeProperty("background-size");
        el.style.removeProperty("background-repeat");
        el.style.removeProperty("background-attachment");
        el.style.removeProperty("background-position");
      }
    };
  }, [key]);
}
