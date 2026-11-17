import { ROUTES } from "@/constants/routes";
import { Accordion, Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { FEATURED_FAQS } from "../data/faqs";

interface FaqPreviewProps {
  index?: string;
}

/** Two-column FAQ: sticky heading on the left, question cards on the right. */
export function FaqPreview({ index }: FaqPreviewProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-[calc(var(--header-height)_+_2rem)] lg:col-span-5 lg:self-start">
          <SectionHeading
            index={index}
            eyebrow="Questions"
            title="Good to know"
            lead="Quick answers about our products, export process and how to reach us."
            action={<TextLink href={ROUTES.faqs}>All FAQs</TextLink>}
            flush
          />
        </div>
        <Reveal delay={150} className="lg:col-span-7">
          <Accordion items={FEATURED_FAQS} />
        </Reveal>
      </div>
    </Section>
  );
}
