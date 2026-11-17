import { Check, Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { CONTACT } from "@/constants/site";
import { ButtonLink, Eyebrow, NumberedSteps, Reveal, Section, SectionHeading } from "@/components/ui";
import type { Service } from "@/types";
import { SERVICE_PROCESS } from "../data/services";

/** Service detail body: overview beside a sticky "at a glance" card, then the process. */
export function ServiceDetail({ service }: { service: Service }) {
  const [intro, ...rest] = service.overview;

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="mb-8">Overview</Eyebrow>
              <p className="type-statement text-balance">{intro}</p>
            </Reveal>
            {rest.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="type-lead mt-8 max-w-[40rem] text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="aside" delay={150} className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-panel bg-forest p-8 text-canvas lg:sticky lg:top-[calc(var(--header-height)_+_1.5rem)] lg:p-10">
              <Eyebrow inverse className="mb-8">
                At a glance
              </Eyebrow>
              <ul className="space-y-4">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ochre-soft text-forest">
                      <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={ROUTES.enquire(service.slug)} variant="accent" className="mt-10 w-full justify-between">
                Enquire about this service
              </ButtonLink>
              <a
                href={CONTACT.phoneHref}
                className="type-nav mt-6 flex items-center justify-center gap-2 text-mist transition-colors hover:text-canvas"
              >
                <Phone aria-hidden className="size-3.5 text-ochre-soft" />
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="forest" inset>
        <SectionHeading
          inverse
          eyebrow="How it works"
          title="From enquiry to arrival"
          layout="split"
          lead="A clear, four-step process — so you always know what happens next."
        />
        <NumberedSteps steps={SERVICE_PROCESS} inverse />
      </Section>
    </>
  );
}
