import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { getDictionary } from "@/i18n/server";
import { getProductCategories } from "../data/product-categories";

interface ProductMosaicProps {
  index?: string;
}

/** Tile placement on large screens: one tall lead tile, four squares and a closing wide banner. */
const TILES = ["lg:row-span-2", "", "", "", "", "lg:col-span-3"];

/** Home page showcase on forest: the product categories as a photographic mosaic. */
export async function ProductMosaic({ index }: ProductMosaicProps) {
  const { locale, t, href } = await getDictionary();

  return (
    <Section tone="ink">
      <SectionHeading
        inverse
        index={index}
        eyebrow={t.products.mosaicEyebrow}
        title={t.products.mosaicTitle}
        lead={t.products.mosaicLead}
        action={<TextLink href={href(ROUTES.products)}>{t.products.viewAll}</TextLink>}
        layout="split"
      />

      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:auto-rows-[19rem] lg:grid-cols-3">
        {getProductCategories(locale).map((category, i) => (
          <Reveal as="li" key={category.slug} delay={(i % 3) * 100} className={cn("min-h-[22rem] lg:min-h-0", TILES[i])}>
            <Link
              href={`${href(ROUTES.products)}#${category.slug}`}
              className="group relative flex h-full flex-col justify-end overflow-hidden bg-graphite p-6 lg:p-8"
            >
              <span className="photo-zoom absolute inset-0">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes={i === 5 ? "100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover"
                />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 to-ink/0 transition-colors duration-700"
              />
              <span className="absolute top-6 right-6 flex size-11 items-center justify-center border border-paper/40 text-paper transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink lg:top-8 lg:right-8">
                <ArrowUpRight aria-hidden className="size-5" />
              </span>

              <span className="relative">
                <span className="type-number text-sm text-accent">{formatIndex(i)}</span>
                <span className="type-h2 mt-2 block text-paper">{category.name}</span>
                <span className="mt-3 block max-w-[26rem] text-sm text-silver">{category.idealFor}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
