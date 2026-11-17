import type { ProcessStep, Service } from "@/types";

/**
 * Services offered by Nigat Motors (Nigat Fanawi Trading PLC).
 * `SERVICES` is the English (en) data rendered by the site; `SERVICES_AM`
 * holds the matching Amharic (am) version with the same slugs and images.
 */
export const SERVICES: Service[] = [
  {
    slug: "electric-hybrid-vehicles",
    title: "Electric & Hybrid Vehicles",
    image: "/images/service-vehicle-sales.jpg",
    excerpt:
      "Electric and hybrid vehicles including the BYD E7, Yuan Up, Seagull, Leopard, Sea Lion 06, Toyota Cross Hybrid and others.",
    overview: [
      "We supply electric and hybrid vehicles, including the BYD E7, BYD Yuan Up, BYD Seagull, BYD Leopard, BYD Sea Lion 06 and Toyota Cross Hybrid, along with other models.",
      "Tell us what you are looking for and we will share current availability, specifications and next steps, so you can decide with confidence.",
    ],
    highlights: [
      "BYD E7, Yuan Up and Seagull",
      "BYD Leopard and Sea Lion 06",
      "Toyota Cross Hybrid",
      "Other electric and hybrid models on request",
    ],
  },
  {
    slug: "after-sales-support",
    title: "After-Sales Support",
    image: "/images/service-maintenance.jpg",
    excerpt: "Warranty and maintenance garage services to keep your vehicle running well after purchase.",
    overview: [
      "Our support continues after you drive away. We provide warranty service and maintenance garage services to keep your vehicle safe, reliable and running well.",
      "Get in touch to discuss your vehicle, its warranty and what it needs next — we will explain the work clearly before anything begins.",
    ],
    highlights: [
      "Warranty service",
      "Maintenance garage services",
      "Clear explanation of recommended work",
      "Transparent communication throughout",
    ],
  },
];

/** Amharic (am) version of `SERVICES`. */
export const SERVICES_AM: Service[] = [
  {
    slug: "electric-hybrid-vehicles",
    title: "የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች",
    image: "/images/service-vehicle-sales.jpg",
    excerpt:
      "BYD E7፣ Yuan Up፣ Seagull፣ Leopard፣ Sea Lion 06፣ Toyota Cross Hybrid እና ሌሎችንም ጨምሮ የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች።",
    overview: [
      "BYD E7፣ BYD Yuan Up፣ BYD Seagull፣ BYD Leopard፣ BYD Sea Lion 06 እና Toyota Cross Hybridን ጨምሮ የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎችን ከሌሎች ሞዴሎች ጋር እናቀርባለን።",
      "የሚፈልጉትን ይንገሩን፤ በአሁኑ ጊዜ ያሉትን ተሽከርካሪዎች፣ ዝርዝር መግለጫዎቻቸውን እና ቀጣይ እርምጃዎችን እናሳውቅዎታለን፤ በእርግጠኝነት እንዲወስኑ።",
    ],
    highlights: [
      "BYD E7፣ Yuan Up እና Seagull",
      "BYD Leopard እና Sea Lion 06",
      "Toyota Cross Hybrid",
      "ሌሎች የኤሌክትሪክ እና ሃይብሪድ ሞዴሎች በጥያቄ",
    ],
  },
  {
    slug: "after-sales-support",
    title: "ከሽያጭ በኋላ ድጋፍ",
    image: "/images/service-maintenance.jpg",
    excerpt: "ተሽከርካሪዎ ከተገዛ በኋላም በጥሩ ሁኔታ እንዲሠራ የዋስትና እና የጋራዥ ጥገና አገልግሎቶች።",
    overview: [
      "ድጋፋችን ተሽከርካሪዎን ከወሰዱ በኋላም ይቀጥላል። ተሽከርካሪዎ ደህንነቱ የተጠበቀ፣ አስተማማኝ እና በጥሩ ሁኔታ የሚሠራ እንዲሆን የዋስትና አገልግሎት እና የጋራዥ ጥገና አገልግሎቶችን እንሰጣለን።",
      "ስለ ተሽከርካሪዎ፣ ስለ ዋስትናው እና ቀጣይ ስለሚያስፈልገው ለመወያየት ያግኙን — ሥራው ከመጀመሩ በፊት በግልጽ እናብራራለን።",
    ],
    highlights: [
      "የዋስትና አገልግሎት",
      "የጋራዥ ጥገና አገልግሎቶች",
      "የሚመከረውን ሥራ ግልጽ ማብራሪያ",
      "በሂደቱ ሁሉ ግልጽ ግንኙነት",
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
