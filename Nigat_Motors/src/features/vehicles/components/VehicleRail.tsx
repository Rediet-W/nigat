import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { formatIndex } from "@/lib/format";
import { ScrollRail, Section, SectionHeading, TextLink } from "@/components/ui";
import { VEHICLE_CATEGORIES } from "../data/vehicle-categories";

interface VehicleRailProps {
  index?: string;
}

/** Home page showcase: a horizontal rail of tall category portraits. */
export function VehicleRail({ index }: VehicleRailProps) {
  return (
    <Section tone="ink">
      <SectionHeading
        inverse
        index={index}
        eyebrow="The Range"
        title="Find the vehicle that fits your life"
        lead="City runabout, family SUV or a pickup for work — start with the category, and our team will guide you from there."
        action={<TextLink href={ROUTES.vehicles}>View all categories</TextLink>}
        layout="split"
      />

      <ScrollRail label="Vehicle categories" inverse>
        {VEHICLE_CATEGORIES.map((category, i) => (
          <li key={category.slug} className="w-[78vw] shrink-0 snap-start sm:w-[22rem] xl:w-[26rem]">
            <Link href={`${ROUTES.vehicles}#${category.slug}`} className="group block">
              <figure className="photo-zoom relative aspect-[3/4] overflow-hidden bg-carbon">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1280px) 416px, (min-width: 640px) 352px, 78vw"
                  className="object-cover"
                />
                <span className="type-number absolute top-5 left-5 text-sm text-paper">{formatIndex(i)}</span>
              </figure>
              <div className="mt-6 flex items-end justify-between gap-4 border-b border-line-inverse pb-6">
                <div>
                  <h3 className="type-h3 transition-colors duration-500 group-hover:text-accent">{category.name}</h3>
                  <p className="mt-2 text-sm text-silver">{category.idealFor}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ScrollRail>
    </Section>
  );
}
