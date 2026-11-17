import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Render for a light background (ink wordmark). */
  onLight?: boolean;
  className?: string;
}

/**
 * Cargo-stamp monogram (a leaf-green "N" in a ruled frame) beside a condensed wordmark.
 * PLACEHOLDER — replace with the official Nigat Export logo when supplied.
 */
export function Logo({ onLight, className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — home`}
      className={cn("group inline-flex items-center gap-3", onLight ? "text-ink" : "text-paper", className)}
    >
      <svg viewBox="0 0 64 64" aria-hidden className="size-10 shrink-0 text-accent">
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="transition-opacity duration-500 group-hover:opacity-40"
        />
        <path d="M19 47V17h7l12 17V17h7v30h-7L26 30v17z" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.75rem] leading-[0.85] font-extrabold uppercase">Nigat</span>
        <span className={cn("mt-1 text-[0.625rem] font-bold tracking-[0.42em] uppercase", onLight ? "text-steel" : "text-silver")}>
          Export
        </span>
      </span>
    </Link>
  );
}
