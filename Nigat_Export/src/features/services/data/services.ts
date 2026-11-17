import type { ProcessStep, Service } from "@/types";

/**
 * PLACEHOLDER CONTENT — the exact services offered by Nigat Export have not
 * been confirmed. Copy is intentionally general and free of factual claims;
 * review, edit, add or remove entries before launch (README → "Content to confirm").
 */
export const SERVICES: Service[] = [
  {
    slug: "sourcing-procurement",
    title: "Sourcing & Procurement",
    image: "/images/service-sourcing.jpg",
    excerpt: "Direct sourcing from Ethiopian growers, cooperatives and processors, matched to your specification.",
    overview: [
      "Good export starts at origin. We work with growers, cooperatives and processors across Ethiopia's main growing regions to match your product, grade and volume requirements.",
      "Tell us what you need and when you need it. We will confirm what is available, arrange samples where appropriate, and set out the commercial terms before anything moves.",
    ],
    highlights: [
      "Sourcing from established Ethiopian growing regions",
      "Access to cooperatives, estates and processors",
      "Sample requests and grade matching",
      "Volume and timing discussed up front",
    ],
  },
  {
    slug: "processing-grading",
    title: "Processing & Grading",
    image: "/images/service-processing.jpg",
    excerpt: "Cleaning, grading, roasting and packing — prepared to the specification agreed with you.",
    overview: [
      "Coffee and cereals are prepared to the specification agreed for your order. That can include cleaning, grading, roasting coffee to an agreed profile, and packing for export.",
      "We coordinate each stage with the processor and keep you informed of progress, so the shipment you receive matches what was quoted and approved.",
    ],
    highlights: [
      "Cleaning and grading to buyer specification",
      "Roasting to agreed profiles for roasted coffee",
      "Packaging and labelling coordination",
      "Pre-shipment checks before dispatch",
    ],
  },
  {
    slug: "quality-compliance",
    title: "Quality & Compliance",
    image: "/images/service-quality.jpg",
    excerpt: "Practical quality checks and export paperwork, coordinated around your buyer requirements.",
    overview: [
      "Quality is checked before goods leave origin. Depending on the product and destination, this can include moisture, defect and grade checks, sample approval and coordination with inspection providers.",
      "We also help assemble the documents a shipment requires. Specific certification and import requirements are confirmed with you and your buyer before the order is placed.",
    ],
    highlights: [
      "Moisture, defect and grade checks",
      "Sample approval before shipment",
      "Coordination with independent inspection providers",
      "Documentation aligned with buyer requirements",
    ],
  },
  {
    slug: "logistics-documentation",
    title: "Logistics & Documentation",
    image: "/images/service-logistics.jpg",
    excerpt: "Container and air freight coordination, export documents and clear shipment updates.",
    overview: [
      "We coordinate freight from origin to your destination, by sea or air, according to the delivery terms agreed in the quotation.",
      "From booking and loading to the export documents and tracking updates, one team stays with the shipment so you always know where things stand.",
    ],
    highlights: [
      "Container and air freight coordination",
      "Export documentation support",
      "Shipment tracking updates",
      "Delivery terms agreed in the quotation",
    ],
  },
];

export const SERVICE_PROCESS: ProcessStep[] = [
  {
    title: "Share your requirement",
    description: "Tell us the product, grade, volume, destination and timing you have in mind.",
  },
  {
    title: "Receive a proposal",
    description: "We confirm availability, pricing, samples and the terms we can offer.",
  },
  {
    title: "Approve samples & terms",
    description: "You approve the specification and commercial terms before production or dispatch.",
  },
  {
    title: "Ship with documentation",
    description: "We coordinate preparation, inspection, freight and export documents through to delivery.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
