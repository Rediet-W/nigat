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
        title="Simple, honest, focused on you"
        lead="However you work with us — buying, servicing or sourcing a part — the experience follows the same three stages."
        layout="split"
      />
      <NumberedSteps steps={APPROACH_STEPS} inverse />
    </Section>
  );
}
