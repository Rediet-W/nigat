"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import { setLenis } from "@/lib/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

/** Lenis smooth scrolling with the template's settings, kept in sync with ScrollTrigger. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, wheelMultiplier: 1.5, touchMultiplier: 1.5 });
    lenis.on("scroll", ScrollTrigger.update);
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
