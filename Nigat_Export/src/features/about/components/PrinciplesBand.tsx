import Image from "next/image";
import { ClipboardCheck, MessagesSquare, Sprout, type LucideIcon } from "lucide-react";
import { Eyebrow, Reveal, Section } from "@/components/ui";
import { PRINCIPLES } from "../data/about";

interface PrinciplesBandProps {
  index?: string;
}

/** One icon per principle, in the same order as `PRINCIPLES`. */
const ICONS: LucideIcon[] = [Sprout, ClipboardCheck, MessagesSquare];

/** Forest panel: heading and landscape photo beside the three brand principles. */
export function PrinciplesBand({ index }: PrinciplesBandProps) {
  return (
    <Section tone="forest" inset>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <div>
            <Reveal>
              <Eyebrow index={index} inverse className="mb-6">
                Why Nigat Export
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-display text-balance">
                A clearer way to export <em className="serif-italic text-ochre-soft">from Ethiopia.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="mask" className="relative aspect-[4/3] overflow-hidden rounded-card bg-moss">
            <Image src="/images/band-landscape.jpg" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
        </div>

        <ol className="border-t border-line-inverse lg:col-span-6 lg:col-start-7 lg:self-end">
          {PRINCIPLES.map((principle, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                as="li"
                key={principle.title}
                delay={i * 120}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-line-inverse py-8 md:gap-8 md:py-10"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-ochre-soft text-forest">
                  <Icon aria-hidden className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="type-h3">{principle.title}</h3>
                  <p className="mt-3 max-w-[28rem] text-mist">{principle.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
