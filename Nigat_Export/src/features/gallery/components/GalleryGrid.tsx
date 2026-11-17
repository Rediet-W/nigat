"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal } from "@/components/ui";
import { GALLERY_IMAGES } from "../data/gallery";
import { Lightbox } from "./Lightbox";

/**
 * Repeating six-tile composition on a 12-column grid:
 * one large + two stacked, then three tall portraits.
 */
const TILE_PATTERN = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-4 md:row-span-2",
];

/** Asymmetric photo grid; every tile opens the lightbox. */
export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <ul className="grid gap-4 md:auto-rows-[clamp(11rem,17vw,17rem)] md:grid-cols-12 md:gap-5">
        {GALLERY_IMAGES.map((image, index) => (
          <li key={image.src} className={cn("aspect-[4/3] md:aspect-auto", TILE_PATTERN[index % TILE_PATTERN.length])}>
            <Reveal variant="mask" delay={(index % 3) * 100} className="h-full">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image ${index + 1}: ${image.alt}`}
                className="group relative block size-full overflow-hidden bg-carbon text-left"
              >
                <span className="photo-zoom absolute inset-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute inset-x-5 bottom-5 flex translate-y-3 items-end justify-between gap-4 text-paper opacity-0 transition-all duration-700 ease-drive group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="text-sm">
                    <span className="type-number mr-3 text-accent">{formatIndex(index)}</span>
                    {image.alt}
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center bg-accent text-ink">
                    <Plus aria-hidden className="size-4" />
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {activeIndex !== null && (
        <Lightbox images={GALLERY_IMAGES} index={activeIndex} onClose={close} onNavigate={setActiveIndex} />
      )}
    </>
  );
}
