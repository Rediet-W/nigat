"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Ports of the GSAP effects in the template's function.js, scoped to the
 * current page and fully reverted on navigation:
 *  - `.text-anime-style-3`: per-character heading reveal
 *  - `.reveal`: sliding image reveal
 */
export function useGsapEffects(key: string) {
  useEffect(() => {
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const splits: SplitText[] = [];

    const init = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        document.querySelectorAll<HTMLElement>(".text-anime-style-3").forEach((element) => {
          const split = new SplitText(element, { type: "lines,words,chars", linesClass: "split-line" });
          splits.push(split);
          gsap.set(element, { perspective: 400 });
          gsap.set(split.chars, { opacity: 0, x: "50" });
          gsap.to(split.chars, {
            scrollTrigger: { trigger: element, start: "top 90%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: "back.out",
            stagger: 0.02,
          });
          element.classList.add("is-split");
        });

        document.querySelectorAll<HTMLElement>(".reveal").forEach((container) => {
          const image = container.querySelector("img");
          const tl = gsap.timeline({ scrollTrigger: { trigger: container, toggleActions: "play none none none" } });
          tl.set(container, { autoAlpha: 1 });
          tl.from(container, { duration: 1, xPercent: -100, ease: "power2.out" });
          if (image) tl.from(image, { duration: 1, xPercent: 100, scale: 1, delay: -1, ease: "power2.out" });
        });
      });
      ScrollTrigger.refresh();
    };

    // Split only after web fonts are ready so line breaks are measured correctly.
    document.fonts.ready.then(init);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      ctx?.revert();
      splits.forEach((split) => split.revert());
      document.querySelectorAll(".is-split").forEach((el) => el.classList.remove("is-split"));
    };
  }, [key]);
}
