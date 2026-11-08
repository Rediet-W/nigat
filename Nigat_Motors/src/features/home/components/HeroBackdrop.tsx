"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { HeroSlide } from "../data/hero-slides";

interface HeroBackdropProps {
  slides: HeroSlide[];
  duration: number;
}

/**
 * Decorative cross-fading background (video + photography) that advances on
 * a timer. Visitors who prefer reduced motion see the first slide's still
 * image only: no rotation and no video playback.
 */
export function HeroBackdrop({ slides, duration }: HeroBackdropProps) {
  const [active, setActive] = useState(0);
  const [still, setStill] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => setStill(true));
    }
  }, []);

  // Advance to the next slide after `duration`.
  useEffect(() => {
    if (still) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), duration);
    return () => window.clearTimeout(timer);
  }, [active, still, duration, slides.length]);

  // Only the active slide's video plays.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active && !still) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, still]);

  return (
    <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden bg-ink">
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.label}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1600ms] ease-drive",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            {slide.video ? (
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                className="size-full object-cover"
                src={slide.video}
                poster={slide.image}
                muted
                loop
                playsInline
                preload={index === 0 ? "auto" : "none"}
              />
            ) : (
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={cn("hero-kenburns object-cover", isActive && "is-active")}
                style={{ "--kenburns-duration": `${duration + 1600}ms` } as CSSProperties}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
