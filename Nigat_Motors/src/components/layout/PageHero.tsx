import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { Container, Eyebrow } from "@/components/ui";
import type { NavLink } from "@/types";

interface PageHeroProps {
  title: string;
  eyebrow: string;
  image: string;
  lead?: string;
  /** Crumbs between "Home" and the current page. */
  trail?: NavLink[];
  /** `tall` for landing-style pages, `compact` for utility pages. */
  size?: "tall" | "compact";
  children?: ReactNode;
}

/** Cinematic inner-page opener: full-bleed photo, bottom-aligned display title. */
export function PageHero({ title, eyebrow, image, lead, trail = [], size = "tall", children }: PageHeroProps) {
  const crumbs: NavLink[] = [{ label: "Home", href: ROUTES.home }, ...trail];

  return (
    <section
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden bg-ink text-paper",
        size === "tall" ? "min-h-[min(88svh,960px)]" : "min-h-[min(64svh,680px)]",
      )}
    >
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 animate-hero-zoom object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_10_11/0.55)_0%,rgb(10_10_11/0.15)_35%,rgb(10_10_11/0.9)_100%)]"
      />

      <Container className="pt-[calc(var(--header-height)+4rem)] pb-12 lg:pb-20">
        <nav aria-label="Breadcrumb" className="mb-10 animate-rise lg:mb-14">
          <ol className="type-nav flex flex-wrap items-center gap-3 text-silver">
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-3">
                <Link href={crumb.href} className="transition-colors hover:text-paper">
                  {crumb.label}
                </Link>
                <span aria-hidden className="h-px w-4 bg-silver/50" />
              </li>
            ))}
            <li aria-current="page" className="text-paper">
              {title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="animate-rise [animation-delay:120ms] lg:col-span-8">
            <Eyebrow inverse className="mb-6">
              {eyebrow}
            </Eyebrow>
            <h1 className="type-display text-balance">{title}</h1>
          </div>
          {(lead || children) && (
            <div className="animate-rise [animation-delay:240ms] lg:col-span-4">
              {lead && <p className="type-lead text-silver">{lead}</p>}
              {children && <div className="mt-8">{children}</div>}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
