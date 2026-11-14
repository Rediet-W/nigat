import { ROUTES } from "@/constants/routes";
import { Accordion, Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { FEATURED_FAQS } from "../data/faqs";

interface FaqPreviewProps {
  index?: string;
}

/** Two-column FAQ: sticky heading on the left, hairline accordion on the right. */
export function FaqPreview({ index }: FaqPreviewProps) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
          <SectionHeading
            index={index}
            eyebrow="Questions"
            title="Good to know"
            lead="Quick answers about our vehicles, services and how to reach us."
            action={<TextLink href={ROUTES.faqs}>All FAQs</TextLink>}
            flush
          />
        </div>
        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <Accordion items={FEATURED_FAQS} />
        </Reveal>
      </div>
    </Section>
  );
}
