"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useOverlay } from "@/hooks/useOverlay";
import { formatIndex } from "@/lib/format";
import type { GalleryImage } from "@/types";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const controlClass =
  "flex size-12 items-center justify-center border border-line-inverse text-paper transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-ink";

/** Full-screen viewer — Esc closes, ← / → navigate. */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];
  const total = images.length;

  const step = useCallback(
    (delta: number) => onNavigate((index + delta + total) % total),
    [index, total, onNavigate],
  );

  useOverlay(true, onClose);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${total}: ${image.alt}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 text-paper backdrop-blur-sm"
    >
      <div className="gutter flex h-(--header-height) shrink-0 items-center justify-between">
        <p className="type-number text-sm">
          <span className="text-accent">{formatIndex(index)}</span>
          <span className="text-silver"> / {formatIndex(total - 1)}</span>
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close gallery" className={controlClass}>
          <X aria-hidden className="size-5" />
        </button>
      </div>

      <figure className="gutter relative flex min-h-0 flex-1 flex-col pb-6">
        <div className="relative min-h-0 flex-1">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="animate-rise object-contain [animation-duration:0.7s]"
          />
        </div>
        <figcaption className="mt-5 text-center text-sm text-silver">{image.alt}</figcaption>
      </figure>

      <div className="gutter flex shrink-0 items-center justify-center gap-2 pb-8">
        <button type="button" onClick={() => step(-1)} aria-label="Previous image" className={controlClass}>
          <ArrowLeft aria-hidden className="size-5" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next image" className={controlClass}>
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
    </div>
  );
}
