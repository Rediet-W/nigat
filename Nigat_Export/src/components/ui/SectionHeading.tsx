import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  index?: string;
  title: string;
  lead?: ReactNode;
  /** Extra content under the lead (usually a link or button). */
  action?: ReactNode;
  as?: "h1" | "h2";
  size?: "display" | "h2";
  /**
   * `stack` — eyebrow, title and lead stacked.
   * `split` — title on the left, lead and action in the right column.
   */
  layout?: "stack" | "split";
  inverse?: boolean;
  /** Remove the bottom margin (when the heading is not followed by content). */
  flush?: boolean;
  className?: string;
}

/** Section opener shared by every page. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  lead,
  action,
  as: Heading = "h2",
  size = "h2",
  layout = "stack",
  inverse,
  flush,
  className,
}: SectionHeadingProps) {
  const isSplit = layout === "split";

  return (
    <div
      className={cn(
        isSplit && "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end",
        !flush && "mb-12 lg:mb-16",
        className,
      )}
    >
      <div className={cn(isSplit && "lg:col-span-7")}>
        <Reveal>
          <Eyebrow index={index} inverse={inverse} className="mb-6">
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Heading className={cn(size === "display" ? "type-display" : "type-h2", "text-balance")}>{title}</Heading>
        </Reveal>
      </div>

      {(lead || action) && (
        <Reveal delay={160} className={cn(isSplit ? "lg:col-span-4 lg:col-start-9" : "mt-6 max-w-[38rem]")}>
          {lead && <p className={cn("type-lead", inverse ? "text-mist" : "text-muted")}>{lead}</p>}
          {action && <div className="mt-6">{action}</div>}
        </Reveal>
      )}
    </div>
  );
}
