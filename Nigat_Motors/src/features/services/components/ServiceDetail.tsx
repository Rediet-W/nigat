import { Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { CONTACT } from "@/constants/site";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Eyebrow, NumberedSteps, Reveal, Section, SectionHeading } from "@/components/ui";
import type { Service } from "@/types";
import { SERVICE_PROCESS } from "../data/services";

/** Service detail body: editorial overview with a sticky "at a glance" sheet, then the process. */
export function ServiceDetail({ service }: { service: Service }) {
  const [intro, ...rest] = service.overview;

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="mb-8">
                Overview
              </Eyebrow>
              <p className="type-statement text-balance">{intro}</p>
            </Reveal>
            {rest.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="type-lead mt-8 max-w-[40rem] text-steel">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="aside" delay={150} className="lg:col-span-4 lg:col-start-9">
            <div className="bg-ink p-8 text-paper lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:p-10">
              <Eyebrow inverse className="mb-8">
                At a glance
              </Eyebrow>
              <ol className="border-t border-line-inverse">
                {service.highlights.map((highlight, i) => (
                  <li key={highlight} className="flex gap-4 border-b border-line-inverse py-4">
                    <span className="type-number pt-0.5 text-xs text-accent">{formatIndex(i)}</span>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ol>
              <ButtonLink href={ROUTES.enquire(service.slug)} className="mt-10 w-full">
                Enquire about this service
              </ButtonLink>
              <a
                href={CONTACT.phoneHref}
                className="type-nav mt-6 flex items-center justify-center gap-2 text-silver transition-colors hover:text-paper"
              >
                <Phone aria-hidden className="size-3.5 text-accent" />
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading
          inverse
          eyebrow="How it works"
          title="From first call to the open road"
          layout="split"
          lead="A clear, four-step process — so you always know what happens next."
        />
        <NumberedSteps steps={SERVICE_PROCESS} inverse />
      </Section>
    </>
  );
}
