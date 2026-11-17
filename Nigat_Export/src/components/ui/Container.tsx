import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** 1400px content frame with fluid gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("gutter mx-auto w-full max-w-[1400px]", className)} {...props} />;
}
