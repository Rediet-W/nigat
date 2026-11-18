import { ROUTES } from "@/constants/routes";
import { Accordion, Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { getDictionary } from "@/i18n/server";
import { getFeaturedFaqs } from "../data/faqs";

interface FaqPreviewProps {
  index?: string;
}

/** FAQ on moss: the heading across the top, the questions in two accordion columns. */
export async function FaqPreview({ index }: FaqPreviewProps) {
  const { locale, t, href } = await getDictionary();
  const featured = getFeaturedFaqs(locale);
  const half = Math.ceil(featured.length / 2);
  const columns = [featured.slice(0, half), featured.slice(half)];

  return (
    <Section tone="graphite">
      <SectionHeading
        inverse
        index={index}
        eyebrow={t.faqs.previewEyebrow}
        title={t.faqs.previewTitle}
        lead={t.faqs.previewLead}
        action={<TextLink href={href(ROUTES.faqs)}>{t.faqs.allFaqs}</TextLink>}
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
