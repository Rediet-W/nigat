import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Uppercase underlined link with a travelling arrow. */
export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn("btn min-h-0 gap-3 p-0 hover:text-accent", className)}
      {...props}
    >
      <span className="text-link">{children}</span>
      <span aria-hidden className="btn-arrow">
        <ArrowRight className="size-4" strokeWidth={2} />
      </span>
    </Link>
  );
}
