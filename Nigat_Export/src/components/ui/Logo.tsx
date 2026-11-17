import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Render for a forest background. */
  inverse?: boolean;
  className?: string;
}

/**
 * Serif wordmark with a round coffee-bean mark.
 * PLACEHOLDER — replace with the official Nigat Export logo when supplied.
 */
export function Logo({ inverse, className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", inverse ? "text-canvas" : "text-ink", className)}
    >
      <svg viewBox="0 0 40 40" aria-hidden className="size-9 shrink-0">
        <circle
          cx="20"
          cy="20"
          r="20"
          className={cn("transition-colors duration-500", inverse ? "fill-moss" : "fill-forest group-hover:fill-moss")}
        />
        <ellipse cx="20" cy="20" rx="8" ry="12" transform="rotate(30 20 20)" className="fill-ochre-soft" />
        <path
          d="M25.3 11c-3.4 2.5-1 6.6-4.4 8.4s-3.4 5-5.3 8.5"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          className={inverse ? "stroke-moss" : "stroke-forest"}
        />
      </svg>
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="font-display text-[1.375rem] tracking-[-0.02em] [font-variation-settings:'opsz'_48,'SOFT'_50]">
          Nigat
        </span>
        <span className={cn("text-[0.8125rem] font-medium", inverse ? "text-mist" : "text-muted")}>Export</span>
      </span>
    </Link>
  );
}
