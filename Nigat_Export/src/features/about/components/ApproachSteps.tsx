import { NumberedSteps, Section, SectionHeading } from "@/components/ui";
import { APPROACH_STEPS } from "../data/about";

interface ApproachStepsProps {
  index?: string;
}

/** Three-stage approach rendered as a numbered route. */
export function ApproachSteps({ index }: ApproachStepsProps) {
  return (
    <Section tone="graphite">
      <SectionHeading
        inverse
        index={index}
        eyebrow="Our Approach"
        title="A straightforward way to ship"
        lead="However you work with us — samples, a trial order or a recurring contract — the process follows the same three stages."
        layout="split"
      />
      <NumberedSteps steps={APPROACH_STEPS} inverse />
    </Section>
  );
}
