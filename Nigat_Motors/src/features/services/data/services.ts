import type { ProcessStep, Service } from "@/types";

/**
 * PLACEHOLDER CONTENT — the exact services offered by Nigat Motors have not
 * been confirmed. Copy is intentionally general and free of factual claims;
 * review, edit, add or remove entries before launch (README → "Content to confirm").
 */
export const SERVICES: Service[] = [
  {
    slug: "vehicle-sales",
    title: "Vehicle Sales",
    image: "/images/service-vehicle-sales.jpg",
    excerpt: "Guidance in choosing a vehicle that fits your needs, your budget and the way you drive.",
    overview: [
      "Choosing a vehicle is a big decision. Our team takes the time to understand how you will use it — daily commuting, family travel, business or heavy-duty work — and helps you compare the options that make sense for you.",
      "Tell us what you are looking for and we will share current availability, specifications and next steps, so you can decide with confidence.",
    ],
    highlights: [
      "Help comparing vehicle categories and models",
      "Clear information on availability and specifications",
      "Straightforward next steps from enquiry to handover",
      "Support after you drive away",
    ],
  },
  {
    slug: "maintenance-servicing",
    title: "Maintenance & Servicing",
    image: "/images/service-maintenance.jpg",
    excerpt: "Routine servicing and maintenance to keep your vehicle safe, reliable and running well.",
    overview: [
      "Regular maintenance is the simplest way to protect your vehicle and avoid unexpected breakdowns. We help you keep on top of routine servicing so your vehicle stays dependable.",
      "Get in touch to discuss your vehicle, its service history and what it needs next — we will explain the work clearly before anything begins.",
    ],
    highlights: [
      "Routine and scheduled servicing",
      "Clear explanation of recommended work",
      "Transparent communication throughout",
      "Advice on keeping your vehicle in good condition",
    ],
  },
  {
    slug: "parts-accessories",
    title: "Parts & Accessories",
    image: "/images/service-parts.jpg",
    excerpt: "Help sourcing the right parts and accessories for your vehicle.",
    overview: [
      "The right part makes all the difference. Share your vehicle details and what you need, and our team will help you find suitable parts and accessories.",
      "Whether it is a replacement component or an upgrade for comfort and convenience, we will talk you through the options available.",
    ],
    highlights: [
      "Help identifying the correct part for your vehicle",
      "Replacement components and accessories",
      "Guidance on compatibility",
      "Simple enquiry process",
    ],
  },
  {
    slug: "diagnostics-inspection",
    title: "Diagnostics & Inspection",
    image: "/images/service-inspection.jpg",
    excerpt: "Checks and inspections to understand your vehicle's condition before problems grow.",
    overview: [
      "Warning light on the dashboard, an unfamiliar noise, or simply want peace of mind? An inspection helps identify issues early and gives you a clear picture of your vehicle's condition.",
      "Contact us to describe what you are noticing and we will advise on the best next step.",
    ],
    highlights: [
      "Vehicle condition checks",
      "Investigation of warning lights and faults",
      "Clear findings and recommendations",
      "Peace of mind before long journeys",
    ],
  },
];

export const SERVICE_PROCESS: ProcessStep[] = [
  {
    title: "Get in touch",
    description: "Send an enquiry or call us and tell us what you need.",
  },
  {
    title: "Discuss your needs",
    description: "We listen, ask the right questions and explain your options.",
  },
  {
    title: "Agree the plan",
    description: "You receive clear next steps before any commitment.",
  },
  {
    title: "Drive with confidence",
    description: "We stay available for questions and follow-up support.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
