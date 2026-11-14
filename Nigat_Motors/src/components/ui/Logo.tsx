import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

/**
 * Typographic wordmark with a copper speed-slash monogram.
 * PLACEHOLDER — replace with the official Nigat Motors logo when supplied.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — home`}
      className={cn("group inline-flex items-center gap-3 text-paper", className)}
    >
      <svg viewBox="0 0 40 40" aria-hidden className="size-9 shrink-0">
        <rect width="40" height="40" className="fill-accent transition-colors duration-500 group-hover:fill-paper" />
        <path d="M10 30V10h5l10 12V10h5v20h-5L15 18v12z" className="fill-ink" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.04em] uppercase [font-variation-settings:'wdth'_125]">
          Nigat
        </span>
        <span className="mt-1 text-[0.625rem] font-bold tracking-[0.42em] text-silver uppercase">Motors</span>
      </span>
    </Link>
  );
}
