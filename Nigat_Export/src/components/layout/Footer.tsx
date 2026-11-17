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

function ColumnTitle({ children }: { children: string }) {
  return (
    <h2 className="type-eyebrow mb-6 flex items-center gap-3 text-silver">
      <span aria-hidden className="h-px w-5 bg-accent" />
      {children}
    </h2>
  );
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <ColumnTitle>{title}</ColumnTitle>
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

/** Forest footer: brand row with a back-to-top block, a four-column directory and the legal line. */
export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-ink text-paper">
      <Container>
        {/* Brand row */}
        <div className="flex items-start justify-between gap-8 border-b border-line-inverse py-14 lg:py-16">
          <div>
            <Logo />
            <p className="mt-6 max-w-[24rem] text-silver">
              Coffee, cereals and pulses — sourced, prepared and shipped from Ethiopia to the world.
            </p>
          </div>
          <a
            href="#main-content"
            aria-label="Back to top"
            className="flex size-14 shrink-0 items-center justify-center bg-accent text-ink transition-colors duration-500 hover:bg-paper lg:size-16"
          >
            <ArrowUp aria-hidden className="size-5" />
          </a>
        </div>

        {/* Directory */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
          <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />
          <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
          <div>
            <ColumnTitle>Contact</ColumnTitle>
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
          <div>
            <ColumnTitle>Enquiries</ColumnTitle>
            <p className="text-silver">Products, grades, volumes or freight — tell us what you need.</p>
            <ButtonLink href={ROUTES.contact} className="mt-6">
              Request a quote
            </ButtonLink>
          </div>
        </div>

        {/* Legal line */}
        <div className="flex flex-col gap-3 border-t border-line-inverse py-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <Link href={ROUTES.credits} className="transition-colors hover:text-paper">
            Image credits
          </Link>
        </div>
      </Container>
    </footer>
  );
}
