import { ArrowUpRight, ChevronDown, LayoutGrid } from "lucide-react";
import type { LocalizedSector } from "@/constants/nigat-group";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Container } from "@/components/ui";

export interface GroupNavProps {
  groupName: string;
  /** "Nigat Fanawi Trading PLC — one parent company, three sectors." */
  tagline: string;
  /** "Nigat Group — switch sector" */
  triggerLabel: string;
  youAreHere: string;
  sectors: LocalizedSector[];
}

/**
 * Group switcher (≥ 1024px). Follows the Services menu's pattern: a trigger
 * in the header that opens a full-width panel on hover or keyboard focus,
 * listing every Nigat sector with the current site marked. The label is
 * hidden below 1536px so the header never wraps.
 */
export function SectorSwitcher({ groupName, tagline, triggerLabel, youAreHere, sectors }: GroupNavProps) {
  return (
    <div className="group flex h-full items-center">
      <button
        type="button"
        aria-haspopup="true"
        aria-label={triggerLabel}
        className="type-nav flex items-center gap-2 whitespace-nowrap text-steel transition-colors duration-500 group-focus-within:text-ink hover:text-ink"
      >
        <LayoutGrid aria-hidden className="size-4 text-accent" />
        <span className="hidden 2xl:inline">{groupName}</span>
        <ChevronDown
          aria-hidden
          className="size-3.5 transition-transform duration-500 ease-drive group-focus-within:rotate-180 group-hover:rotate-180"
        />
      </button>

      <div
        className={cn(
          "invisible absolute inset-x-0 top-full border-y border-line-inverse bg-ink/95 opacity-0 backdrop-blur-xl",
          "-translate-y-2 transition-all duration-500 ease-drive",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Container className="grid grid-cols-4 gap-px py-10">
          <div className="flex flex-col gap-3 px-6 py-2">
            <span className="type-eyebrow text-silver">{groupName}</span>
            <span className="text-sm leading-relaxed text-silver">{tagline}</span>
          </div>
          {sectors.map((sector, index) => (
            <a
              key={sector.key}
              href={sector.href}
              aria-current={sector.current ? "page" : undefined}
              className="group/item flex flex-col gap-3 border-l border-line-inverse px-6 py-2 transition-colors duration-500 hover:border-accent aria-[current=page]:border-accent"
            >
              <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
              <span className="type-h4 flex items-start justify-between gap-3 text-paper">
                {sector.name}
                {!sector.current && (
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 opacity-0 transition-all duration-500 ease-drive group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                  />
                )}
              </span>
              <span className="text-sm leading-relaxed text-silver">{sector.description}</span>
              {sector.current && <span className="type-eyebrow text-accent">{youAreHere}</span>}
            </a>
          ))}
        </Container>
      </div>
    </div>
  );
}
