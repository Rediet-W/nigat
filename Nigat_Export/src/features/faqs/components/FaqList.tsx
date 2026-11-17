import { Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { CONTACT } from "@/constants/site";
import { formatIndex } from "@/lib/format";
import { Accordion, ButtonLink, Eyebrow, Reveal, Section } from "@/components/ui";
import { FAQ_GROUPS } from "../data/faqs";

function toAnchor(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/** Full FAQ page: sticky topic pills and a help card on the left, grouped question cards on the right. */
export function FaqList() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:sticky lg:top-[calc(var(--header-height)_+_2rem)] lg:col-span-4 lg:self-start">
          <nav aria-label="FAQ topics">
            <Eyebrow className="mb-6">Topics</Eyebrow>
            <ol className="flex flex-wrap gap-2 lg:flex-col">
              {FAQ_GROUPS.map((group, i) => (
                <li key={group.title}>
                  <a
                    href={`#${toAnchor(group.title)}`}
                    className="type-nav flex items-center gap-3 rounded-full border border-line px-4 py-2.5 transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-canvas lg:justify-between lg:px-5 lg:py-3.5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="type-number text-xs text-muted">{formatIndex(i)}</span>
                      {group.title}
                    </span>
                    <span className="type-number hidden text-xs text-muted lg:inline">
                      {group.items.length} {group.items.length === 1 ? "question" : "questions"}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 hidden rounded-panel bg-forest p-8 text-canvas lg:block">
            <p className="type-h3">Still have a question?</p>
            <p className="mt-3 text-mist">Our team is happy to help.</p>
            <a
              href={CONTACT.phoneHref}
              className="type-nav mt-6 flex items-center gap-2 text-mist transition-colors hover:text-canvas"
            >
              <Phone aria-hidden className="size-3.5 text-ochre-soft" />
              {CONTACT.phone}
            </a>
            <ButtonLink href={ROUTES.contact} variant="accent" className="mt-8 w-full justify-between">
              Contact us
            </ButtonLink>
          </div>
        </aside>

        <div className="space-y-16 lg:col-span-8 lg:space-y-24">
          {FAQ_GROUPS.map((group, i) => (
            <section key={group.title} id={toAnchor(group.title)} className="scroll-mt-(--header-height)">
              <Reveal className="mb-8 flex items-baseline gap-4">
                <span className="type-number text-sm text-muted">{formatIndex(i)}</span>
                <h2 className="type-h2">{group.title}</h2>
              </Reveal>
              <Reveal delay={100}>
                <Accordion items={group.items} defaultOpen={i === 0 ? 0 : null} />
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
