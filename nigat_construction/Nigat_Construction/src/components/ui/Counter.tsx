"use client";

import { useEffect, useState } from "react";

import { useInView } from "@/hooks/useInView";

interface CounterProps {
  /** Final value as written in the source, e.g. "25" or "4.9" (decimals are preserved). */
  value: string;
  /** Total animation time in ms (counterUp `time` option in the original). */
  duration?: number;
}

/**
 * Port of jQuery counterUp: shows the final value until the element scrolls
 * into view, then counts up from zero with the same number of decimals.
 */
export function Counter({ value, duration = 3000 }: CounterProps) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const target = Number.parseFloat(value);
    if (Number.isNaN(target)) return;
    const decimals = value.includes(".") ? value.split(".")[1].length : 0;
    let frame = 0;
    let start: number | undefined;

    const tick = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      setDisplay((target * progress).toFixed(decimals));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="counter">
      {display}
    </span>
  );
}
