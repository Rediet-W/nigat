import { ROUTES } from "@/constants/routes";
import { Accordion, Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { FEATURED_FAQS } from "../data/faqs";

interface FaqPreviewProps {
  index?: string;
}

/** FAQ on moss: the heading across the top, the questions in two accordion columns. */
export function FaqPreview({ index }: FaqPreviewProps) {
  const half = Math.ceil(FEATURED_FAQS.length / 2);
  const columns = [FEATURED_FAQS.slice(0, half), FEATURED_FAQS.slice(half)];

  return (
    <Section tone="graphite">
      <SectionHeading
        inverse
        index={index}
        eyebrow="Questions"
        title="Good to know"
        lead="Quick answers about our products, export process and how to reach us."
        action={<TextLink href={ROUTES.faqs}>All FAQs</TextLink>}
        layout="split"
      />
      <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
        {columns.map((items, i) =>
          items.length > 0 ? (
            <Reveal key={items[0].question} delay={i * 120} className={i === 1 ? "-mt-px lg:mt-0" : undefined}>
              <Accordion items={items} inverse defaultOpen={i === 0 ? 0 : null} />
            </Reveal>
          ) : null,
        )}
      </div>
    </Section>
  );
}
