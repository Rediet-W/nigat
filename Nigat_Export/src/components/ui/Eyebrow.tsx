import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  /** Optional chapter number shown before the label ("01"). */
  index?: string;
  inverse?: boolean;
  className?: string;
}

/** Outlined pill label with an ochre dot: opens every section. */
export function Eyebrow({ children, index, inverse, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "type-eyebrow inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5",
        inverse ? "border-line-inverse text-mist" : "border-line text-muted",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", inverse ? "bg-ochre-soft" : "bg-ochre")} />
      {index && <span className={cn("type-number", inverse ? "text-canvas" : "text-ink")}>{index}</span>}
      {children}
    </p>
  );
}
