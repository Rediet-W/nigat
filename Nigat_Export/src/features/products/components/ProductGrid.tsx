import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "../data/product-categories";

interface ProductGridProps {
  index?: string;
}

/** Bento placement on a 6-column grid: one feature tile, two wide, three thirds. */
const TILE_PATTERN = [
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

/** Home page showcase: product categories as a bento grid of photo tiles. */
export function ProductGrid({ index }: ProductGridProps) {
  return (
    <Section tone="sand" inset>
      <SectionHeading
        index={index}
        eyebrow="What we export"
        title="Ethiopian origin, prepared for your market"
        lead="From highland coffee to staple cereals — start with the product, and our team will confirm grades, volumes and shipping."
        action={<TextLink href={ROUTES.products}>View all products</TextLink>}
        layout="split"
      />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[clamp(14rem,19vw,17rem)] lg:grid-cols-6">
        {PRODUCT_CATEGORIES.map((category, i) => (
          <Reveal
            as="li"
            variant="mask"
            key={category.slug}
            delay={(i % 3) * 100}
            className={cn("min-h-[20rem] lg:min-h-0", TILE_PATTERN[i % TILE_PATTERN.length])}
          >
            <Link
              href={`${ROUTES.products}#${category.slug}`}
              className="group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-card bg-forest p-6 text-canvas"
            >
              <span className="photo-zoom absolute inset-0 -z-20">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover"
                />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(16_38_26/0.88)_0%,rgb(16_38_26/0.05)_65%)]"
              />
              <span className="flex items-start justify-between gap-4">
                <span className="type-number rounded-full border border-line-inverse bg-forest/30 px-3 py-1 text-sm backdrop-blur-md">
                  {formatIndex(i)}
                </span>
                <span className="flex size-11 items-center justify-center rounded-full bg-shell text-forest transition-colors duration-500 group-hover:bg-ochre-soft">
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 transition-transform duration-500 ease-soft group-hover:rotate-45"
                  />
                </span>
              </span>
              <span>
                <span className="type-h3 block">{category.name}</span>
                <span className="mt-2 block text-sm text-canvas/75">{category.idealFor}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
