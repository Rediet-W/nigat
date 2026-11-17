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

/**
 * Brand introduction as a bento grid: a wide intro card, a tall photo card,
 * and two photo cards beneath (one per topic).
 */
export function AboutManifesto({ index, cta }: AboutManifestoProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Reveal className="flex flex-col justify-between gap-12 rounded-panel bg-sand p-8 md:p-12 lg:col-span-2">
          <div>
            <Eyebrow index={index} className="mb-8">
              About Nigat Export
            </Eyebrow>
            <h2 className="type-display max-w-[14ch] text-balance">{ABOUT_INTRO.title}</h2>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="type-lead max-w-[34rem] text-muted">{ABOUT_INTRO.lead}</p>
            {cta && (
              <TextLink href={cta.href} className="shrink-0">
                {cta.label}
              </TextLink>
            )}
          </div>
        </Reveal>

        {ABOUT_TOPICS.map((topic, i) => (
          <Reveal
            as="article"
            variant="mask"
            key={topic.title}
            delay={i * 120}
            className={cn(
              "relative isolate flex flex-col justify-between overflow-hidden rounded-panel bg-forest p-7 text-canvas md:p-8",
              i === 0 ? "min-h-[30rem] lg:row-span-2" : "min-h-[24rem]",
            )}
          >
            <Image
              src={topic.image}
              alt={topic.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="-z-20 object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(16_38_26/0.92)_0%,rgb(16_38_26/0.15)_60%,rgb(16_38_26/0.25)_100%)]"
            />
            <span className="type-number self-start rounded-full border border-line-inverse bg-forest/30 px-3 py-1 text-sm backdrop-blur-md">
              {formatIndex(i)}
            </span>
            <div>
              <h3 className="type-h3">{topic.title}</h3>
              <p className="mt-3 max-w-[26rem] text-canvas/80">{topic.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
