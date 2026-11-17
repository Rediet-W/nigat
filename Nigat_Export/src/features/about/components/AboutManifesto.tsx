import Image from "next/image";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Eyebrow, Reveal, Section, TextLink } from "@/components/ui";
import type { NavLink } from "@/types";
import { ABOUT_INTRO, ABOUT_TOPICS } from "../data/about";

interface AboutManifestoProps {
  index?: string;
  /** Optional closing link (e.g. "More about us" on the home page). */
  cta?: NavLink;
}

/** Brand introduction: title beside a large statement, then three staggered photo columns. */
export function AboutManifesto({ index, cta }: AboutManifestoProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow index={index} className="mb-6 lg:mb-8">
            About Nigat Export
          </Eyebrow>
          <h2 className="type-h2 text-balance">{ABOUT_INTRO.title}</h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:col-start-6 lg:pt-14">
          <p className="type-statement text-balance">{ABOUT_INTRO.lead}</p>
          {cta && (
            <TextLink href={cta.href} className="mt-10">
              {cta.label}
            </TextLink>
          )}
        </Reveal>
      </div>

      <ol className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:mt-28 lg:gap-10">
        {ABOUT_TOPICS.map((topic, i) => (
          <Reveal as="li" key={topic.title} delay={i * 120} className={cn("group", i === 1 && "md:mt-20")}>
            <figure className="photo-zoom relative aspect-[4/5] overflow-hidden bg-bone">
              <Image
                src={topic.image}
                alt={topic.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-t border-ink pt-5">
              <span className="type-h2 text-accent">{formatIndex(i)}</span>
              <div className="pt-1">
                <h3 className="type-h3">{topic.title}</h3>
                <p className="mt-2 text-steel">{topic.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
