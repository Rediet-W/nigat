import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  /** Optional chapter number shown before the label ("01"). */
  index?: string;
  inverse?: boolean;
  className?: string;
}

/** Small uppercase label with a copper rule — opens every section. */
export function Eyebrow({ children, index, inverse, className }: EyebrowProps) {
  return (
    <p className={cn("type-eyebrow flex items-center gap-3", inverse ? "text-silver" : "text-steel", className)}>
      {index && <span className="text-accent">{index}</span>}
      <span aria-hidden className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}
