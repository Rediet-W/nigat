import Image from "next/image";
import { formatIndex } from "@/lib/format";
import { Container, Eyebrow, Reveal } from "@/components/ui";
import { PRINCIPLES } from "../data/about";

interface PrinciplesBandProps {
  index?: string;
}

/** Full-bleed landscape photograph carrying the three brand principles. */
export function PrinciplesBand({ index }: PrinciplesBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Image
        src="/images/band-landscape.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_10_11/0.75)_0%,rgb(10_10_11/0.3)_38%,rgb(10_10_11/0.88)_68%,rgb(10_10_11/0.96)_100%)]"
      />

      <Container className="flex min-h-[min(110svh,1000px)] flex-col justify-between gap-24 py-(--space-section)">
        <div className="max-w-[56rem]">
          <Reveal>
            <Eyebrow index={index} inverse className="mb-8">
              Why Nigat Motors
            </Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="type-display text-balance">A better way to own a vehicle.</h2>
          </Reveal>
        </div>

        <ol className="grid border-t border-line-inverse md:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={i * 120}
              className="border-b border-line-inverse py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <span className="type-number text-sm text-accent">{formatIndex(i)}</span>
              <h3 className="type-h3 mt-6">{principle.title}</h3>
              <p className="mt-3 max-w-[22rem] text-silver">{principle.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
