import { Eyebrow, TextLink } from "@/components/ui";
import type { NavLink } from "@/types";
import { ABOUT_INTRO, ABOUT_TOPICS } from "../data/about";
import { AboutTopics } from "./AboutTopics";

interface AboutManifestoProps {
  index?: string;
  /** Optional closing link (e.g. "More about us" on the home page). */
  cta?: NavLink;
}

/** Brand introduction: half-screen pinned photo beside the intro and topics. */
export function AboutManifesto({ index, cta }: AboutManifestoProps) {
  return (
    <section className="bg-paper text-ink">
      <AboutTopics
        topics={ABOUT_TOPICS}
        intro={
          <>
            <Eyebrow index={index} className="mb-8">
              About Nigat Motors
            </Eyebrow>
            <h2 className="type-display text-balance lg:text-[length:clamp(2.5rem,4vw,4.75rem)]">{ABOUT_INTRO.title}</h2>
            <p className="type-lead mt-8 text-steel">{ABOUT_INTRO.lead}</p>
          </>
        }
        footer={cta && <TextLink href={cta.href}>{cta.label}</TextLink>}
      />
    </section>
  );
}
