import { ArrowUpRight, ChevronDown, LayoutGrid } from "lucide-react";
import { CURRENT_SECTOR, GROUP, SECTORS } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Container } from "@/components/ui";

/**
 * Group switcher (≥ 1024px). Follows the main menu's pattern: a trigger in
 * the header that opens a full-width panel on hover or keyboard focus,
 * listing every Nigat sector with the current site marked.
 */
export function SectorSwitcher() {
  return (
    <div className="group flex h-full items-center">
      <button
        type="button"
        aria-haspopup="true"
        aria-label={`${GROUP.name} — switch sector`}
        className="type-nav flex items-center gap-2 whitespace-nowrap text-silver transition-colors duration-500 hover:text-paper group-focus-within:text-paper"
      >
        <LayoutGrid aria-hidden className="size-4 text-accent" />
        <span className="hidden 2xl:inline">{GROUP.name}</span>
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
            <span className="type-eyebrow text-silver">{GROUP.name}</span>
            <span className="text-sm leading-relaxed text-silver">
              {SITE.legalName} — one parent company, three sectors.
            </span>
          </div>
          {SECTORS.map((sector, index) => {
            const current = sector.key === CURRENT_SECTOR;

            return (
              <a
                key={sector.key}
                href={current ? ROUTES.home : sector.href}
                aria-current={current ? "page" : undefined}
                className="group/item flex flex-col gap-3 border-l border-line-inverse px-6 py-2 transition-colors duration-500 hover:border-accent aria-[current=page]:border-accent"
              >
                <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
                <span className="type-h4 flex items-start justify-between gap-3 text-paper">
                  {sector.name}
                  {!current && (
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 opacity-0 transition-all duration-500 ease-drive group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100"
                    />
                  )}
                </span>
                <span className="text-sm leading-relaxed text-silver">{sector.description}</span>
                {current && <span className="type-eyebrow text-accent">You are here</span>}
              </a>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
