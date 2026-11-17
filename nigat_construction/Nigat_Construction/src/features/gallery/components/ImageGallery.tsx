"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { Lightbox } from "@/components/ui/Lightbox";
import { GALLERY_IMAGES } from "@/constants/gallery";
import { useI18n } from "@/i18n/I18nProvider";
import { wowDelay } from "@/lib/animation";

/** Photo grid with a Magnific-style gallery lightbox (prev/next, counter, keyboard). */
export function ImageGallery() {
  const { dict } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const count = GALLERY_IMAGES.length;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % count)), [count]);

  return (
    <>
      <div className="row gallery-items page-gallery-box">
        {GALLERY_IMAGES.map((image, index) => (
          <div className="col-lg-4 col-6" key={image.src}>
            <div className="photo-gallery wow fadeInUp" data-wow-delay={wowDelay(index)}>
              <a
                href={image.src}
                data-cursor-text={dict.common.view}
                onClick={(event) => {
                  event.preventDefault();
                  setActive(index);
                }}
              >
                <figure className="image-anime">
                  <Image src={image.src} alt="" width={image.width} height={image.height} />
                </figure>
              </a>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          onClose={close}
          onPrev={prev}
          onNext={next}
          holderClass="mfp-image-holder"
          wrapClass="mfp-gallery mfp-with-zoom"
          closeBtnInside={false}
        >
          <div className="mfp-figure">
            <figure>
              {/* Full-resolution image sized by magnific-popup.css (max-height = viewport - 80px). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mfp-img" src={GALLERY_IMAGES[active].src} alt="" style={{ maxHeight: "calc(100vh - 80px)" }} />
              <figcaption>
                <div className="mfp-bottom-bar">
                  <div className="mfp-title" />
                  <div className="mfp-counter">
                    {active + 1} of {count}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </Lightbox>
      )}
    </>
  );
}
