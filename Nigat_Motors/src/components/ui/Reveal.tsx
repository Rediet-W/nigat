"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** `up` = fade + rise, `fade` = opacity only, `mask` = image curtain reveal. */
  variant?: "up" | "fade" | "mask";
  /** Delay in milliseconds, used to stagger siblings. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/** Animates its children the first time they scroll into view. */
export function Reveal({ children, variant = "up", delay = 0, as: Tag = "div", className }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
