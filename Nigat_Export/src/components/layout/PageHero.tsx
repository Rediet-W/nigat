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

/** Inner-page opener: serif title on the canvas beside a rounded photograph. */
export function PageHero({ title, eyebrow, image, lead, trail = [], size = "tall", children }: PageHeroProps) {
  const crumbs: NavLink[] = [{ label: "Home", href: ROUTES.home }, ...trail];

  return (
    <section className="pt-[calc(var(--header-height)_+_2.5rem)] lg:pt-[calc(var(--header-height)_+_4rem)]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-6 lg:pb-4">
          <nav aria-label="Breadcrumb" className="mb-8 animate-rise">
            <ol className="type-nav flex flex-wrap items-center gap-2 text-muted">
              {crumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className="transition-colors hover:text-ink">
                    {crumb.label}
                  </Link>
                  <span aria-hidden className="text-line">
                    /
                  </span>
                </li>
              ))}
              <li aria-current="page" className="text-ink">
                {title}
              </li>
            </ol>
          </nav>

          <div className="animate-rise [animation-delay:100ms]">
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <h1 className="type-display text-balance">{title}</h1>
          </div>
          {(lead || children) && (
            <div className="mt-8 max-w-[34rem] animate-rise [animation-delay:200ms]">
              {lead && <p className="type-lead text-muted">{lead}</p>}
              {children && <div className="mt-8">{children}</div>}
            </div>
          )}
        </div>

        <div className="animate-rise [animation-delay:150ms] lg:col-span-6">
          <div
            className={cn(
              "relative overflow-hidden rounded-panel bg-sand",
              size === "tall" ? "aspect-[4/3] lg:aspect-[6/5]" : "aspect-[16/10] lg:aspect-[3/2]",
            )}
          >
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="animate-hero-zoom object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
