"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface InViewOptions {
  /** IntersectionObserver rootMargin, e.g. "0px 0px -30% 0px". */
  rootMargin?: string;
}

/**
 * Reports once when the element first enters the viewport (like the
 * Waypoints-triggered plugins in the original template). Never resets.
 */
export function useInView<T extends Element>({ rootMargin = "0px" }: InViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, inView]);

  return [ref, inView];
}
