"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

interface AccordionProps {
  items: FaqItem[];
  /** Index opened on first render; `null` keeps all closed. */
  defaultOpen?: number | null;
  inverse?: boolean;
}

/** Hairline accordion — one panel open at a time, numbered rows. */
export function Accordion({ items, defaultOpen = 0, inverse }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("border-t", inverse ? "border-line-inverse" : "border-line")}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className={cn("border-b", inverse ? "border-line-inverse" : "border-line")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-start gap-5 py-6 text-left md:gap-8 md:py-8"
              >
                <span className="type-number pt-1 text-sm text-accent">{formatIndex(index)}</span>
                <span className="type-h4 flex-1 transition-colors duration-500 group-hover:text-accent md:text-xl">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center border transition-colors duration-500 ease-drive",
                    inverse ? "border-line-inverse" : "border-line",
                    isOpen && "border-accent bg-accent text-ink",
                  )}
                >
                  <Plus
                    aria-hidden
                    className={cn("size-4 transition-transform duration-500 ease-drive", isOpen && "rotate-45")}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-700 ease-drive",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p
                  className={cn(
                    "max-w-[44rem] pr-14 pb-8 pl-10 md:pl-[3.75rem]",
                    inverse ? "text-silver" : "text-steel",
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
