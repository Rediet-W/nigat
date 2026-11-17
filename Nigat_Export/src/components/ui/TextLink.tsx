import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Underlined link with an arrow that lifts on hover. */
export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link className={cn("group/link type-nav inline-flex items-center gap-1.5", className)} {...props}>
      <span className="text-link">{children}</span>
      <ArrowUpRight
        aria-hidden
        className="size-4 shrink-0 transition-transform duration-500 ease-soft group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </Link>
  );
}
