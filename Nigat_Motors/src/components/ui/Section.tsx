import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const TONES = {
  paper: "bg-paper text-ink",
  bone: "bg-bone text-ink",
  ink: "bg-ink text-paper",
  graphite: "bg-graphite text-paper",
} as const;

export type SectionTone = keyof typeof TONES;

interface SectionProps extends ComponentProps<"section"> {
  tone?: SectionTone;
  /** Tighter vertical padding for utility bands (index bars, strips). */
  compact?: boolean;
  containerClassName?: string;
}

/** Page section with tone background, fluid vertical rhythm and content frame. */
export function Section({
  tone = "paper",
  compact,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(compact ? "py-12 lg:py-16" : "section-y", TONES[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
