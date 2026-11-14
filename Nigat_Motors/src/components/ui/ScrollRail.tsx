"use client";

import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ScrollRailProps {
  children: ReactNode;
  label: string;
  inverse?: boolean;
  className?: string;
}

/**
 * Horizontal, snap-scrolling list. Native swipe / trackpad scrolling on all
 * devices, plus previous / next controls for mouse and keyboard users.
 */
export function ScrollRail({ children, label, inverse, className }: ScrollRailProps) {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  const control = cn(
    "flex size-12 items-center justify-center border transition-colors duration-500 hover:border-accent hover:bg-accent hover:text-ink",
    inverse ? "border-line-inverse" : "border-line",
  );

  return (
    <div className={className}>
      <ul
        ref={railRef}
        aria-label={label}
        className="no-scrollbar -mx-(--gutter) flex snap-x snap-mandatory scroll-px-(--gutter) gap-5 overflow-x-auto px-(--gutter) md:gap-8"
      >
        {children}
      </ul>
      <div className="mt-10 flex justify-end gap-2">
        <button type="button" onClick={() => scrollByPage(-1)} aria-label="Scroll back" className={control}>
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <button type="button" onClick={() => scrollByPage(1)} aria-label="Scroll forward" className={control}>
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}
