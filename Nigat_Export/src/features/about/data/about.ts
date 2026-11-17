import type { Feature } from "@/types";

/**
 * PLACEHOLDER CONTENT — brand copy written without company-specific facts
 * (founding year, figures, awards). Replace with verified Nigat Export
 * information when available (README → "Content to confirm").
 */

/** A brand topic shown in the About split section, each with its own photo. */
export interface AboutTopic extends Feature {
  image: string;
  imageAlt: string;
}

export const ABOUT_INTRO = {
  title: "Rooted in Ethiopian origin.",
  lead: "We source coffee, cereals and pulses from growers and processors we know, prepare them to specification, and keep buyers informed from sample to shipment.",
};

export const ABOUT_TOPICS: AboutTopic[] = [
  {
    title: "Sourced at origin",
    description:
      "We work with growers, cooperatives and processors across Ethiopia's main growing regions, matching product and grade to your requirements.",
    image: "/images/about-source.jpg",
    imageAlt: "Coffee drying at origin in Ethiopia",
  },
  {
    title: "Prepared with care",
    description:
      "Cleaning, grading, roasting and packing are coordinated to the specification agreed with you, with checks before anything is dispatched.",
    image: "/images/about-prepare.jpg",
    imageAlt: "Barley grain held in cupped hands",
  },
  {
    title: "Shipped with clarity",
    description:
      "Freight, inspection and export documents are handled by one team, with clear updates from loading through to arrival.",
    image: "/images/about-ship.jpg",
    imageAlt: "Stacked shipping containers at a port",
  },
];

export const PRINCIPLES: Feature[] = [
  {
    title: "Origin relationships",
    description: "Long-standing links with growers and processors help us source consistently, season after season.",
  },
  {
    title: "Specification first",
    description: "Product, grade, packing and delivery terms are agreed before an order moves.",
  },
  {
    title: "Clear communication",
    description: "One team follows your shipment and keeps you informed at each stage.",
  },
];

export const APPROACH_STEPS: Feature[] = [
  {
    title: "Understand",
    description: "We start with your product, grade, volume, destination and timing.",
  },
  {
    title: "Propose",
    description: "We confirm availability, samples, pricing and delivery terms.",
  },
  {
    title: "Deliver",
    description: "We coordinate preparation, inspection, freight and documents through to arrival.",
  },
];
