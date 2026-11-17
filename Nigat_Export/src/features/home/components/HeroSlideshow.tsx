"use client";

import Image from "next/image";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Container } from "@/components/ui";
import type { HeroSlide } from "../data/hero-slides";

interface HeroSlideshowProps {
  slides: HeroSlide[];
  duration: number;
  /** The fixed hero copy (headline, lead, actions) laid over the photographs. */
  children: ReactNode;
}

/**
 * Full-bleed photographic backdrop that cross-fades through the hero slides
 * on a timer, with the hero copy on top and a slide index along the bottom.
 * Each index entry selects its photo; the active one carries a leaf-green progress
 * rule. Reduced motion shows the first photo without rotation.
 */
export function HeroSlideshow({ slides, duration, children }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [still, setStill] = useState(false);

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

  return (
    <>
      <div aria-hidden className="absolute inset-0 -z-20 bg-ink">
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
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={cn("hero-kenburns object-cover", isActive && "is-active")}
                style={{ "--kenburns-duration": `${duration + 1600}ms` } as CSSProperties}
              />
            </div>
          );
        })}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(22_36_26/0.55)_0%,rgb(22_36_26/0.2)_35%,rgb(22_36_26/0.55)_65%,rgb(22_36_26/0.92)_100%),linear-gradient(90deg,rgb(22_36_26/0.6)_0%,rgb(22_36_26/0)_60%)]"
      />

      <Container className="flex flex-1 flex-col justify-end pt-16 pb-8 lg:pb-10">
        {children}

        <div className="mt-14 grid grid-cols-1 items-end gap-6 border-t border-line-inverse pt-5 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <p className="type-eyebrow flex items-center gap-4 text-silver lg:col-span-4">
            <span className="text-accent">
              {formatIndex(active)} / {formatIndex(slides.length - 1)}
            </span>
            <span aria-hidden className="h-px w-6 bg-accent" />
            <span className="text-paper">{slides[active].label}</span>
          </p>

          <ol aria-label="Photographs" className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4 lg:col-span-8">
            {slides.map((slide, index) => {
              const isActive = index === active;
              return (
                <li key={slide.label} className="relative">
                  <span aria-hidden className="block h-0.5 overflow-hidden bg-line-inverse">
                    {isActive && (
                      <span
                        key={still ? "still" : active}
                        className={cn("block size-full origin-left bg-accent", !still && "animate-progress")}
                        style={still ? undefined : { animationDuration: `${duration}ms` }}
                      />
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "type-nav flex w-full items-baseline gap-3 pt-3 text-left transition-colors duration-500",
                      isActive ? "text-paper" : "text-silver hover:text-paper",
                    )}
                  >
                    <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
                    {slide.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </>
  );
}
