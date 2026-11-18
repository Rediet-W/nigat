import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";
import logo from "../../../public/images/logo.png";

export interface LogoProps {
  /** Render for a light background (ink wordmark). */
  onLight?: boolean;
  /** Home route in the current language. */
  href?: string;
  /** Accessible name, e.g. "Nigat Export — home". */
  label?: string;
  /** Two-line wordmark beside the mark. */
  wordmark?: [string, string];
  /** Extra classes for the wordmark (e.g. to hide it at some widths). */
  wordmarkClassName?: string;
  className?: string;
}

/** Official Nigat mark beside the condensed "Nigat / Export" wordmark. */
export function Logo({
  onLight,
  href = ROUTES.home,
  label = `${SITE.name} — home`,
  wordmark = ["Nigat", "Export"],
  wordmarkClassName,
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn("group inline-flex items-center gap-3", onLight ? "text-ink" : "text-paper", className)}
    >
      <Image
        src={logo}
        alt=""
        aria-hidden
        fetchPriority="high"
        sizes="80px"
        className="h-9 w-auto shrink-0 transition-opacity duration-500 group-hover:opacity-80"
      />
      <span className={cn("flex flex-col leading-none", wordmarkClassName)}>
        <span className="font-display text-[1.75rem] leading-[0.85] font-extrabold uppercase">{wordmark[0]}</span>
        <span className={cn("mt-1 text-[0.625rem] font-bold tracking-[0.42em] uppercase", onLight ? "text-steel" : "text-silver")}>
          {wordmark[1]}
        </span>
      </span>
    </Link>
  );
}
