import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Each variant also sets the colours of the round arrow badge. */
const VARIANTS = {
  /** Forest pill: the default action on light surfaces. */
  primary:
    "bg-forest text-canvas hover:bg-moss [--arrow-bg:var(--color-ochre-soft)] [--arrow-fg:var(--color-forest)]",
  /** Ochre pill: the primary action on forest surfaces and photography. */
  accent:
    "bg-ochre-soft text-forest hover:bg-shell [--arrow-bg:var(--color-forest)] [--arrow-fg:var(--color-canvas)]",
  /** Shell pill for photography and forest surfaces. */
  light: "bg-shell text-forest hover:bg-canvas [--arrow-bg:var(--color-forest)] [--arrow-fg:var(--color-canvas)]",
  /** Hairline outline that inherits the surrounding text colour. */
  outline: "border border-current/25 text-current hover:border-current/70",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

interface ButtonStyleProps {
  variant?: ButtonVariant;
  /** Hide the arrow badge. */
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
