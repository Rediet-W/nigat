import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const TONES = {
  canvas: "bg-canvas text-ink",
  sand: "bg-sand text-ink",
  shell: "bg-shell text-ink",
  forest: "bg-forest text-canvas",
} as const;

export type SectionTone = keyof typeof TONES;

interface SectionProps extends ComponentProps<"section"> {
  tone?: SectionTone;
  /** Render as a rounded colour panel inset from the page edges. */
  inset?: boolean;
  /** Tighter vertical padding for utility bands. */
  compact?: boolean;
  containerClassName?: string;
}

/** Page section with tone, fluid vertical rhythm and content frame. */
export function Section({
  tone = "canvas",
  inset,
  compact,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const spacing = compact ? "py-12 lg:py-16" : "section-y";
  const content = <Container className={containerClassName}>{children}</Container>;

  if (inset) {
    return (
      <section className={cn("px-(--frame) py-[calc(var(--frame)_/_2)]", className)} {...props}>
        <div className={cn("rounded-panel", spacing, TONES[tone])}>{content}</div>
      </section>
    );
  }

  return (
    <section className={cn(spacing, TONES[tone], className)} {...props}>
      {content}
    </section>
  );
}
