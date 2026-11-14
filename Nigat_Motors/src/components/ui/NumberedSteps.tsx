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
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/** Oversized numerals strung along a single hairline "route". */
export function NumberedSteps({ steps, inverse, className }: NumberedStepsProps) {
  return (
    <ol
      className={cn(
        "relative grid gap-12 [--numeral:clamp(3.5rem,6vw,6rem)] md:gap-10",
        "before:absolute before:inset-x-0 before:top-[calc(var(--numeral)/2)] before:hidden before:h-px lg:before:block",
        inverse ? "before:bg-line-inverse" : "before:bg-line",
        COLUMNS[steps.length] ?? "md:grid-cols-3",
        className,
      )}
    >
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 120}>
          <span
            className={cn(
              "type-number relative inline-block pr-6 text-(length:--numeral) leading-none",
              inverse ? "bg-graphite text-paper" : "bg-paper text-ink",
            )}
          >
            {formatIndex(i)}
          </span>
          <span aria-hidden className="mt-8 block h-px w-12 bg-accent" />
          <h3 className="type-h3 mt-6">{step.title}</h3>
          <p className={cn("mt-3 max-w-[24rem]", inverse ? "text-silver" : "text-steel")}>{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
