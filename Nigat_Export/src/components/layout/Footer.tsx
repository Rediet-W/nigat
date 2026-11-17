import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUp } from "lucide-react";
import { FOOTER_EXPLORE_LINKS, FOOTER_SERVICE_LINKS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { CONTACT, SITE } from "@/constants/site";
import { ButtonLink, Container, Logo } from "@/components/ui";
import type { NavLink } from "@/types";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="type-eyebrow mb-5 text-mist">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-canvas/85 transition-colors duration-500 hover:text-ochre-soft">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Closing forest panel: call to action, directory and an oversized serif wordmark. */
export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="px-(--frame) pt-[calc(var(--frame)_/_2)] pb-(--frame)">
      <div className="overflow-hidden rounded-panel bg-forest text-canvas">
        <Container>
          {/* Closing call to action */}
          <div className="flex flex-col gap-10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
            <p className="type-display max-w-[16ch] text-balance">
              Your next shipment starts with a <em className="serif-italic text-ochre-soft">conversation.</em>
            </p>
            <ButtonLink href={ROUTES.contact} variant="accent" className="self-start lg:self-auto">
              Request a quote
            </ButtonLink>
          </div>

          {/* Directory */}
          <div className="grid grid-cols-1 gap-12 border-t border-line-inverse py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-4">
              <Logo inverse />
              <p className="mt-6 max-w-[22rem] text-mist">
                Coffee, cereals and pulses — sourced, prepared and shipped from Ethiopia to the world.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />
            </div>
            <div className="lg:col-span-3">
              <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
            </div>
            <div className="lg:col-span-3">
              <h2 className="type-eyebrow mb-5 text-mist">Contact</h2>
              <ul className="space-y-3 text-canvas/85">
                <li>
                  <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-ochre-soft">
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all transition-colors duration-500 hover:text-ochre-soft"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="text-mist">{CONTACT.address}</li>
                <li className="text-mist">{CONTACT.hours}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-line-inverse py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <p>
                © {year} {SITE.name}. All rights reserved.
              </p>
              <Link href={ROUTES.credits} className="transition-colors hover:text-canvas">
                Image credits
              </Link>
            </div>
            <a href="#main-content" className="inline-flex items-center gap-2 transition-colors hover:text-canvas">
              Back to top <ArrowUp aria-hidden className="size-3.5" />
            </a>
          </div>
        </Container>

        {/* Oversized wordmark */}
        <p aria-hidden className="type-wordmark -mb-[0.16em] text-center text-moss select-none">
          Nigat <span className="serif-italic">Export</span>
        </p>
      </div>
    </footer>
  );
}
