"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { useI18n } from "@/i18n/I18nProvider";
import { getLenis } from "@/lib/smooth-scroll";

interface LightboxProps {
  onClose: () => void;
  /** `mfp-iframe-holder` for videos, `mfp-image-holder` for images. */
  holderClass: string;
  /** Extra wrapper classes (Magnific's `mainClass` / `mfp-gallery`). */
  wrapClass?: string;
  /**
   * When true (Magnific default) the content renders <LightboxCloseButton /> itself;
   * when false the button is placed in the container.
   */
  closeBtnInside?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  children: ReactNode;
}

/**
 * React port of the Magnific Popup shell. It renders the exact `mfp-*` markup so
 * the original magnific-popup.css applies unchanged. Closes on Esc, background
 * click and the close button; locks page scroll while open.
 */
export function Lightbox({ onClose, holderClass, wrapClass = "", closeBtnInside = true, onPrev, onNext, children }: LightboxProps) {
  const { dict } = useI18n();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const previous = { overflow: html.style.overflow, marginRight: html.style.marginRight };
    html.style.overflow = "hidden";
    if (scrollbar > 0) html.style.marginRight = `${scrollbar}px`;
    getLenis()?.stop();
    wrapRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") onPrev?.();
      else if (event.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = previous.overflow;
      html.style.marginRight = previous.marginRight;
      getLenis()?.start();
    };
  }, [onClose, onPrev, onNext]);

  const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest(".mfp-close")) return onClose();
    if (target.closest(".mfp-prevent-close")) return;
    if (target.closest(".mfp-content") && !target.classList.contains("mfp-content")) return;
    onClose();
  };

  return createPortal(
    <>
      <div className={`mfp-bg mfp-ready ${wrapClass}`} />
      <div
        ref={wrapRef}
        className={`mfp-wrap mfp-auto-cursor mfp-ready ${closeBtnInside ? "mfp-close-btn-in" : ""} ${wrapClass}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{ overflow: "hidden auto" }}
        onClick={handleBackgroundClick}
      >
        <div className={`mfp-container mfp-s-ready ${holderClass}`}>
          <div className="mfp-content">{children}</div>
          {!closeBtnInside && <LightboxCloseButton />}
          {onPrev && (
            <button
              title={dict.common.previous}
              type="button"
              className="mfp-arrow mfp-arrow-left mfp-prevent-close"
              onClick={onPrev}
            />
          )}
          {onNext && (
            <button
              title={dict.common.next}
              type="button"
              className="mfp-arrow mfp-arrow-right mfp-prevent-close"
              onClick={onNext}
            />
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}

export function LightboxCloseButton() {
  const { dict } = useI18n();
  return (
    <button title={dict.common.close} type="button" className="mfp-close">
      ×
    </button>
  );
}
