import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { VehicleShowcase } from "@/features/vehicles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Vehicles",
  description: "Explore vehicle categories at Nigat Motors — sedans, SUVs, pickups, hatchbacks, crossovers and electric or hybrid vehicles.",
  path: ROUTES.vehicles,
});

export default function VehiclesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Range"
        title="Vehicles"
        lead="Six categories to start from. Tell us which one fits, and we'll share current availability."
        image="/images/hero-vehicles.jpg"
      />
      <VehicleShowcase />
      <EnquiryCta />
    </>
  );
}
