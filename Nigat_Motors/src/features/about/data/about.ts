import type { Feature } from "@/types";

/**
 * PLACEHOLDER CONTENT — brand copy written without company-specific facts
 * (founding year, figures, awards). Replace with verified Nigat Motors
 * information when available (README → "Content to confirm").
 */

/** A brand topic shown in the About split section, each with its own photo. */
export interface AboutTopic extends Feature {
  image: string;
  imageAlt: string;
}

export const ABOUT_INTRO = {
  title: "Ownership, made simpler.",
  lead: "We help you find the right car and keep it running well, with clear advice and a team that is easy to talk to.",
};

export const ABOUT_TOPICS: AboutTopic[] = [
  {
    title: "People first",
    description: "We listen before we recommend, so every conversation starts with your needs.",
    image: "/images/editorial-interior.jpg",
    imageAlt: "Driver's view of a modern vehicle cockpit and touchscreen",
  },
  {
    title: "Reliability",
    description: "Dependable vehicles and care that keep you moving with confidence.",
    image: "/images/service-maintenance.jpg",
    imageAlt: "Vehicle in a workshop during routine maintenance",
  },
  {
    title: "Here for the long run",
    description: "We stay in touch after the conversation ends, ready to help whenever you need us.",
    image: "/images/gallery-11.jpg",
    imageAlt: "Black estate car parked in an open field",
  },
];

export const PRINCIPLES: Feature[] = [
  {
    title: "Clear advice",
    description: "Straightforward explanations so you always understand your options.",
  },
  {
    title: "Quality focus",
    description: "Attention to detail in every vehicle we discuss and every job we take on.",
  },
  {
    title: "Ongoing support",
    description: "We are here for questions and follow-up long after your first visit.",
  },
];

export const APPROACH_STEPS: Feature[] = [
  {
    title: "Listen",
    description: "We start by understanding how you use your vehicle, your priorities and your budget.",
  },
  {
    title: "Advise",
    description: "We explain the options clearly and recommend what genuinely fits your needs.",
  },
  {
    title: "Support",
    description: "We stay in touch after the conversation ends, ready to help whenever you need us.",
  },
];
