"use client";

import { useEffect, useState } from "react";

import { useI18n } from "@/i18n/I18nProvider";
import { getLenis } from "@/lib/smooth-scroll";

/** Show the button once the visitor has scrolled past roughly one screen. */
const SHOW_AFTER = 400;

/**
 * Conventional "back to top" control (bottom-right, circular, arrow-up) so it
 * behaves the way visitors already expect from other sites (Jakob's Law).
 */
export function BackToTop() {
  const { dict } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: reduceMotion });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label={dict.common.backToTop}
      title={dict.common.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
