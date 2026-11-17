"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const SPEED = 0.7;
const EASE = "expo.out";
const VISIBLE_TIMEOUT = 300;
const POINTER_TARGETS = "a, input, textarea, button";

/**
 * Port of the template's magiccursor.js: a trailing circle that grows over
 * interactive elements, shows `data-cursor-text` labels ("View", "Play",
 * "Drag") and applies `data-cursor` state classes (e.g. "-opaque").
 */
export function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    const text = textRef.current;
    if (!el || !text) return;

    let visible = false;
    let visibleTimer: number | undefined;

    const move = (x: number, y: number) => {
      gsap.to(el, { x, y, force3D: true, overwrite: true, ease: EASE, duration: visible ? SPEED : 0 });
    };
    const show = () => {
      if (visible) return;
      window.clearTimeout(visibleTimer);
      el.classList.add("-visible");
      visibleTimer = window.setTimeout(() => (visible = true));
    };
    const hide = () => {
      window.clearTimeout(visibleTimer);
      el.classList.remove("-visible");
      visibleTimer = window.setTimeout(() => (visible = false), VISIBLE_TIMEOUT);
    };

    /** Emulates jQuery's delegated mouseenter/mouseleave for a selector. */
    const crossing = (event: MouseEvent, selector: string) => {
      const current = (event.target as Element | null)?.closest?.(selector) ?? null;
      const other = (event.relatedTarget as Element | null)?.closest?.(selector) ?? null;
      return { current, other };
    };

    const onMove = (event: MouseEvent) => {
      move(event.clientX, event.clientY);
      show();
    };
    const onDown = () => el.classList.add("-active");
    const onUp = () => el.classList.remove("-active");

    const onOver = (event: MouseEvent) => {
      const pointer = crossing(event, POINTER_TARGETS);
      if (pointer.current && pointer.current !== pointer.other) el.classList.add("-pointer");
      const frame = crossing(event, "iframe");
      if (frame.current && frame.current !== frame.other) hide();
      const state = crossing(event, "[data-cursor]");
      if (state.current && state.current !== state.other) {
        const value = (state.current as HTMLElement).dataset.cursor;
        if (value) el.classList.add(value);
      }
      const label = crossing(event, "[data-cursor-text]");
      if (label.current && label.current !== label.other) {
        text.textContent = (label.current as HTMLElement).dataset.cursorText ?? "";
        el.classList.add("-text");
      }
    };

    const onOut = (event: MouseEvent) => {
      const pointer = crossing(event, POINTER_TARGETS);
      if (pointer.current && pointer.current !== pointer.other) el.classList.remove("-pointer");
      const frame = crossing(event, "iframe");
      if (frame.current && frame.current !== frame.other) show();
      const state = crossing(event, "[data-cursor]");
      if (state.current && state.current !== state.other) {
        const value = (state.current as HTMLElement).dataset.cursor;
        if (value) el.classList.remove(value);
      }
      const label = crossing(event, "[data-cursor-text]");
      if (label.current && label.current !== label.other) el.classList.remove("-text");
    };

    move(-window.innerWidth, -window.innerHeight);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);

    return () => {
      window.clearTimeout(visibleTimer);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cb-cursor" aria-hidden="true">
      <div ref={textRef} className="cb-cursor-text" />
    </div>
  );
}
