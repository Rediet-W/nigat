import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Wide 1520px content frame with fluid gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("gutter mx-auto w-full max-w-[1520px]", className)} {...props} />;
}
