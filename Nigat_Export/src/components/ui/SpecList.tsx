import { cn } from "@/lib/cn";

export interface SpecRow {
  label: string;
  value: string;
}

interface SpecListProps {
  rows: SpecRow[];
  className?: string;
}

/** Label / value tiles: a compact "spec sheet". */
export function SpecList({ rows, className }: SpecListProps) {
  return (
    <dl className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", className)}>
      {rows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-line px-5 py-4">
          <dt className="type-eyebrow text-muted">{row.label}</dt>
          <dd className="mt-1.5 font-medium">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
