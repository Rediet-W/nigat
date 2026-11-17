"use client";

import { useEffect } from "react";

/**
 * WOW.js replacement. Elements with the `wow` class stay hidden (see
 * globals.css) until they enter the viewport, then receive animate.css's
 * `animated` class with their `data-wow-delay` / `data-wow-duration`.
 * Re-scans whenever `key` (the pathname) changes.
 */
export function useWowAnimations(key: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const { wowDelay, wowDuration, wowIteration } = el.dataset;
          if (wowDelay) el.style.animationDelay = wowDelay;
          if (wowDuration) el.style.animationDuration = wowDuration;
          if (wowIteration) el.style.animationIterationCount = wowIteration;
          el.classList.add("animated");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px" },
    );

    document.querySelectorAll<HTMLElement>(".wow:not(.animated)").forEach((el) => observer.observe(el));

    // Content can mount later (e.g. lightbox, client-rendered children): watch for new nodes.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(".wow:not(.animated)")) observer.observe(node);
          node.querySelectorAll<HTMLElement>(".wow:not(.animated)").forEach((el) => observer.observe(el));
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [key]);
}
