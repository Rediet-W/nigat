"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

export type CollapsePhase = "open" | "closed" | "opening" | "closing";

interface CollapseState {
  phase: CollapsePhase;
  height?: number;
}

/**
 * Height-animated show/hide, equivalent to Bootstrap's collapse and jQuery's
 * slideDown/slideUp. Returns the current phase (to map onto CSS classes) and an
 * inline style that animates `height` between 0 and the content height.
 */
export function useCollapse<T extends HTMLElement>(
  open: boolean,
  duration: number,
  easing = "ease",
): { ref: RefObject<T | null>; phase: CollapsePhase; style: CSSProperties } {
  const ref = useRef<T>(null);
  const previous = useRef(open);
  const [state, setState] = useState<CollapseState>({ phase: open ? "open" : "closed" });

  useEffect(() => {
    if (previous.current === open) return;
    previous.current = open;
    const el = ref.current;
    if (!el) return;

    let done: number | undefined;
    // Frames and the completion timer are chained so they can never run out of
    // order (rAF is paused in background tabs while timers keep running).
    let frame = requestAnimationFrame(() => {
      setState({ phase: open ? "opening" : "closing", height: open ? 0 : el.scrollHeight });
      frame = requestAnimationFrame(() => {
        void el.offsetHeight; // commit the start height before transitioning
        setState({ phase: open ? "opening" : "closing", height: open ? el.scrollHeight : 0 });
        done = window.setTimeout(() => setState({ phase: open ? "open" : "closed" }), duration + 20);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(done);
    };
  }, [open, duration]);

  const animating = state.phase === "opening" || state.phase === "closing";
  const style: CSSProperties = animating
    ? { height: state.height, overflow: "hidden", transition: `height ${duration}ms ${easing}` }
    : {};

  return { ref, phase: state.phase, style };
}
