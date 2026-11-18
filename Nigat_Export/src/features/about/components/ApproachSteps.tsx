import { NumberedSteps, Section, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/i18n/server";
import { getAboutContent } from "../data/about";

interface ApproachStepsProps {
  index?: string;
}

/** Three-stage approach rendered as a numbered route. */
export async function ApproachSteps({ index }: ApproachStepsProps) {
  const { locale, t } = await getDictionary();

  return (
    <Section tone="graphite">
      <SectionHeading
        inverse
        index={index}
        eyebrow={t.about.approachEyebrow}
        title={t.about.approachTitle}
        lead={t.about.approachLead}
        layout="split"
      />
      <NumberedSteps steps={getAboutContent(locale).approach} inverse />
    </Section>
  );
}
