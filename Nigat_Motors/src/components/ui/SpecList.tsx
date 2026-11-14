import { cn } from "@/lib/cn";

export interface SpecRow {
  label: string;
  value: string;
}

interface SpecListProps {
  rows: SpecRow[];
  inverse?: boolean;
  className?: string;
}

/** Label / value rows separated by hairlines — a "spec sheet". */
export function SpecList({ rows, inverse, className }: SpecListProps) {
  return (
    <dl className={cn("border-t", inverse ? "border-line-inverse" : "border-line", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className={cn(
            "grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 border-b py-4",
            inverse ? "border-line-inverse" : "border-line",
          )}
        >
          <dt className={cn("type-eyebrow pt-1", inverse ? "text-silver" : "text-steel")}>{row.label}</dt>
          <dd className="font-medium">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
