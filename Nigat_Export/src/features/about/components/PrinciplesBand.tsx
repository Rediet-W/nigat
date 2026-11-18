import Image from "next/image";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/i18n/server";
import { getAboutContent } from "../data/about";

interface PrinciplesBandProps {
  index?: string;
}

/** Brand principles as large numbered rows beside a tall framed landscape. */
export async function PrinciplesBand({ index }: PrinciplesBandProps) {
  const { locale, t } = await getDictionary();
  const principles = getAboutContent(locale).principles;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal variant="mask" className="lg:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden bg-bone lg:sticky lg:top-[calc(var(--header-height)_+_2rem)]">
            <Image src="/images/band-landscape.jpg" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </figure>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading index={index} eyebrow={t.about.principlesEyebrow} title={t.about.principlesTitle} />
          <ol className="border-t border-ink">
            {principles.map((principle, i) => (
              <Reveal
                as="li"
                key={principle.title}
                delay={i * 120}
                className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-6 border-b border-line py-8 md:grid-cols-[6.5rem_minmax(0,1fr)] md:py-10"
              >
                <span className="type-h2 text-accent">{formatIndex(i)}</span>
                <div>
                  <h3 className="type-h3">{principle.title}</h3>
                  <p className="mt-3 max-w-[30rem] text-steel">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
