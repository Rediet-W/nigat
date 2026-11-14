import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const VARIANTS = {
  /** Copper fill — the single primary action in a view. */
  primary: "bg-accent text-ink hover:bg-accent-hover",
  /** Warm-white fill for dark backgrounds. */
  light: "bg-paper text-ink hover:bg-accent",
  /** Ink fill for light backgrounds. */
  dark: "bg-ink text-paper hover:bg-accent hover:text-ink",
  /** Hairline outline that inherits the surrounding text colour. */
  outline: "border border-current/30 text-current hover:border-accent hover:bg-accent hover:text-ink",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

interface ButtonStyleProps {
  variant?: ButtonVariant;
  /** Hide the trailing arrow. */
  hideArrow?: boolean;
}

function ButtonArrow() {
  return (
    <span aria-hidden className="btn-arrow">
      <ArrowRight className="size-4" strokeWidth={2} />
    </span>
  );
}

/** Link styled as a button. */
export function ButtonLink({
  variant = "primary",
  hideArrow,
  className,
  children,
  ...props
}: ButtonStyleProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn("btn", VARIANTS[variant], className)} {...props}>
      {children}
      {!hideArrow && <ButtonArrow />}
    </Link>
  );
}

/** Native button with the same appearance as `ButtonLink`. */
export function Button({
  variant = "primary",
  hideArrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonStyleProps & ComponentProps<"button">) {
  return (
    <button type={type} className={cn("btn", VARIANTS[variant], className)} {...props}>
      {children}
      {!hideArrow && <ButtonArrow />}
    </button>
  );
}
