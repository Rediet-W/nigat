"use client";

import { useEffect, useState } from "react";

interface ScrollHeaderState {
  /** Page has scrolled past the threshold — header gets a solid background. */
  scrolled: boolean;
  /** User is scrolling down past the threshold — header slides away. */
  hidden: boolean;
}

/** Tracks scroll position and direction for an auto-hiding header. */
export function useScrollHeader(threshold = 80): ScrollHeaderState {
  const [state, setState] = useState<ScrollHeaderState>({ scrolled: false, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const scrolled = y > threshold;
      const hidden = scrolled && y > lastY && y > threshold * 4;
      lastY = y;
      setState((current) =>
        current.scrolled === scrolled && current.hidden === hidden ? current : { scrolled, hidden },
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return state;
}
