import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal } from "./Reveal";

interface Step {
  title: string;
  description: string;
}

interface NumberedStepsProps {
  steps: Step[];
  inverse?: boolean;
  className?: string;
}

const COLUMNS: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

/** Step cards, each carrying a segmented progress bar that fills as the process advances. */
export function NumberedSteps({ steps, inverse, className }: NumberedStepsProps) {
  return (
    <ol className={cn("grid grid-cols-1 gap-4", COLUMNS[steps.length] ?? "md:grid-cols-3", className)}>
      {steps.map((step, i) => (
        <Reveal
          as="li"
          key={step.title}
          delay={i * 120}
          className={cn("flex min-h-[17rem] flex-col rounded-card p-7 md:p-8", inverse ? "bg-moss" : "bg-shell")}
        >
          <span className={cn("type-eyebrow", inverse ? "text-mist" : "text-muted")}>
            Step <span className={cn("type-number", inverse ? "text-canvas" : "text-ink")}>{formatIndex(i)}</span>
          </span>
          <span aria-hidden className="mt-5 flex gap-1.5">
            {steps.map((other, j) => (
              <span
                key={other.title}
                className={cn(
                  "h-1 flex-1 rounded-full",
                  j <= i
                    ? inverse
                      ? "bg-ochre-soft"
                      : "bg-ochre"
                    : inverse
                      ? "bg-line-inverse"
                      : "bg-line",
                )}
              />
            ))}
          </span>
          <h3 className="type-h3 mt-auto pt-12">{step.title}</h3>
          <p className={cn("mt-3", inverse ? "text-mist" : "text-muted")}>{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
