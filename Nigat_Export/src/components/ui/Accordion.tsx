"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/cn";

interface AccordionProps {
  items: FaqItem[];
  /** Index opened on first render; `null` keeps all closed. */
  defaultOpen?: number | null;
}

/** Stack of rounded question cards; one panel open at a time. */
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "rounded-card border transition-colors duration-500 ease-soft",
              isOpen ? "border-line bg-shell" : "border-transparent bg-shell/55 hover:bg-shell",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center gap-5 px-6 py-5 text-left md:px-8 md:py-6"
              >
                <span className="type-h4 flex-1">{item.question}</span>
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ease-soft",
                    isOpen ? "border-forest bg-forest text-canvas" : "border-line",
                  )}
                >
                  <Plus
                    aria-hidden
                    className={cn("size-4 transition-transform duration-500 ease-soft", isOpen && "rotate-45")}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-700 ease-soft",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[44rem] px-6 pr-16 pb-6 text-muted md:px-8 md:pr-20 md:pb-8">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
