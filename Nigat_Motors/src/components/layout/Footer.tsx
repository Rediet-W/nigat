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
      <h2 className="type-eyebrow mb-6 text-silver">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-paper/85 transition-colors duration-500 hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <Container>
        {/* Closing call to action */}
        <div className="flex flex-col gap-10 border-b border-line-inverse py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <p className="type-h2 max-w-[18ch] text-balance">Your next drive starts with a conversation.</p>
          <ButtonLink href={ROUTES.contact}>Send an Enquiry</ButtonLink>
        </div>

        {/* Directory */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-[22rem] text-silver">
              Vehicles, servicing, parts and straightforward advice — all in one place.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />
          </div>
          <div className="lg:col-span-3">
            <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
          </div>
          <div className="lg:col-span-3">
            <h2 className="type-eyebrow mb-6 text-silver">Contact</h2>
            <ul className="space-y-3 text-paper/85">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-500 hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-silver">{CONTACT.address}</li>
              <li className="text-silver">{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Oversized wordmark */}
      <div aria-hidden className="select-none">
        <p className="type-wordmark -mb-[0.1em] text-center text-graphite">
          Nigat Motors
        </p>
      </div>

      <div className="border-t border-line-inverse">
        <Container className="flex flex-col gap-4 py-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <a href="#main-content" className="type-nav inline-flex items-center gap-2 transition-colors hover:text-paper">
            Back to top <ArrowUp aria-hidden className="size-3.5" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
