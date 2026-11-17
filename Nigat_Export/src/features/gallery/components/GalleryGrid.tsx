"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal } from "@/components/ui";
import { GALLERY_IMAGES } from "../data/gallery";
import { Lightbox } from "./Lightbox";

/** Repeating aspect ratios that give the masonry columns their rhythm. */
const ASPECTS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[16/11]", "aspect-[4/5]"];

/** Masonry of rounded photos; every tile opens the lightbox. */
export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY_IMAGES.map((image, index) => (
          <li key={image.src} className="mb-4 break-inside-avoid">
            <Reveal variant="mask" delay={(index % 3) * 100}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image ${index + 1}: ${image.alt}`}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-card bg-sand text-left",
                  ASPECTS[index % ASPECTS.length],
                )}
              >
                <span className="photo-zoom absolute inset-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between gap-4 rounded-2xl bg-shell/90 py-2 pr-2 pl-4 text-sm text-ink opacity-0 backdrop-blur-md transition-all duration-700 ease-soft group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span>
                    <span className="type-number mr-2 text-muted">{formatIndex(index)}</span>
                    {image.alt}
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-canvas">
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
