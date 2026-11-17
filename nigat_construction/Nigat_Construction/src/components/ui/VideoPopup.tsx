"use client";

import { useCallback, useState, type ReactNode } from "react";

import { Lightbox, LightboxCloseButton } from "@/components/ui/Lightbox";
import { useI18n } from "@/i18n/I18nProvider";

interface VideoPopupProps {
  href: string;
  className?: string;
  "data-cursor-text"?: string;
  children: ReactNode;
}

/** Same URL patterns Magnific Popup converts to embeddable players. */
function toEmbedUrl(url: string): string {
  const youtube = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?autoplay=1`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return url;
}

/** Link that opens a video in an iframe lightbox (the template's `.popup-video`). */
export function VideoPopup({ href, className, children, ...rest }: VideoPopupProps) {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <a
        href={href}
        className={className ? `popup-video ${className}` : "popup-video"}
        onClick={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
        {...rest}
      >
        {children}
      </a>
      {open && (
        <Lightbox onClose={close} holderClass="mfp-iframe-holder" wrapClass="mfp-fade">
          <div className="mfp-iframe-scaler">
            <LightboxCloseButton />
            <iframe
              className="mfp-iframe"
              src={toEmbedUrl(href)}
              title={dict.common.videoPlayer}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Lightbox>
      )}
    </>
  );
}
