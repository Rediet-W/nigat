import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";
import logo from "../../../public/images/logo.png";

interface LogoProps {
  className?: string;
}

/** Official Nigat mark beside the "Nigat / Motors" wordmark. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — home`}
      className={cn("group inline-flex items-center gap-3 text-paper", className)}
    >
      <Image src={logo} alt="" aria-hidden fetchPriority="high" className="h-9 w-auto shrink-0" sizes="64px" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.04em] uppercase [font-variation-settings:'wdth'_125]">
          Nigat
        </span>
        <span className="mt-1 text-[0.625rem] font-bold tracking-[0.42em] text-silver uppercase">Motors</span>
      </span>
    </Link>
  );
}
