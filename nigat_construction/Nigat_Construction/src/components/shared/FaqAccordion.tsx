"use client";

import { useId, useState } from "react";

import { useCollapse } from "@/hooks/useCollapse";
import { wowDelay } from "@/lib/animation";
import type { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: readonly FaqItem[];
  /** Index of the item expanded on load (the template opens the first one). */
  defaultOpen?: number;
}

/**
 * Bootstrap accordion with `data-bs-parent` semantics: one panel open at a
 * time, clicking the open panel closes it. Keeps Bootstrap's class names.
 */
export function FaqAccordion({ items, defaultOpen = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={`${index}-${item.question}`}
          item={item}
          id={`${baseId}-${index}`}
          delay={wowDelay(index)}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  item: FaqItem;
  id: string;
  delay?: string;
  open: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, id, delay, open, onToggle }: AccordionItemProps) {
  const { ref, phase, style } = useCollapse<HTMLDivElement>(open, 350);
  const panelClass =
    phase === "opening" || phase === "closing"
      ? "accordion-collapse collapsing"
      : `accordion-collapse collapse${phase === "open" ? " show" : ""}`;

  return (
    <div className="accordion-item wow fadeInUp" data-wow-delay={delay}>
      <h2 className="accordion-header" id={`${id}-heading`}>
        <button
          className={open ? "accordion-button" : "accordion-button collapsed"}
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
        >
          {item.question}
        </button>
      </h2>
      <div ref={ref} id={`${id}-panel`} className={panelClass} style={style} role="region" aria-labelledby={`${id}-heading`}>
        <div className="accordion-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
