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

/** Inner-page opener on linen: the title column beside a framed photograph with a leaf-green tag. */
export function PageHero({ title, eyebrow, image, lead, trail = [], size = "tall", children }: PageHeroProps) {
  const crumbs: NavLink[] = [{ label: "Home", href: ROUTES.home }, ...trail];

  return (
    <section className="border-b border-line bg-paper pt-[calc(var(--header-height)_+_2.5rem)] pb-14 text-ink lg:pt-[calc(var(--header-height)_+_3.5rem)] lg:pb-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="animate-rise">
            <ol className="type-nav flex flex-wrap items-center gap-3 text-steel">
              {crumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-3">
                  <Link href={crumb.href} className="transition-colors hover:text-ink">
                    {crumb.label}
                  </Link>
                  <span aria-hidden className="h-px w-4 bg-accent" />
                </li>
              ))}
              <li aria-current="page" className="text-ink">
                {title}
              </li>
            </ol>
          </nav>

          <Eyebrow className="mt-12 mb-6 animate-rise [animation-delay:80ms] lg:mt-16">{eyebrow}</Eyebrow>
          <h1 className="type-display animate-rise text-balance [animation-delay:140ms]">{title}</h1>
          {lead && (
            <p className="type-lead mt-8 max-w-[34rem] animate-rise text-steel [animation-delay:220ms]">{lead}</p>
          )}
          {children && <div className="mt-8 animate-rise [animation-delay:280ms]">{children}</div>}
        </div>

        <figure className="relative animate-rise [animation-delay:200ms] lg:col-span-5">
          <div
            className={cn(
              "relative overflow-hidden bg-bone",
              size === "tall" ? "aspect-[4/5] lg:aspect-[4/3]" : "aspect-[4/3] lg:aspect-[16/10]",
            )}
          >
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="animate-hero-zoom object-cover"
            />
          </div>
          <figcaption className="type-eyebrow absolute bottom-0 left-0 bg-accent px-4 py-3 text-ink">{eyebrow}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
