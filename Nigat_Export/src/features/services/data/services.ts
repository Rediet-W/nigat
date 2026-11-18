import type { Locale } from "@/i18n/config";
import type { ProcessStep, Service } from "@/types";

/**
 * PLACEHOLDER CONTENT — the exact services offered by Nigat Export have not
 * been confirmed. Copy is intentionally general and free of factual claims;
 * review, edit, add or remove entries before launch (README → "Content to confirm").
 * Each language lists the same services in the same order and with the same slugs.
 */
const SERVICES_BY_LOCALE: Record<Locale, Service[]> = {
  en: [
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
  ],
  am: [
    {
      slug: "sourcing-procurement",
      title: "ምርት ማሰባሰብና ግዢ",
      image: "/images/service-sourcing.jpg",
      excerpt: "ከኢትዮጵያ አምራቾች፣ ኅብረት ሥራ ማኅበራትና አቀነባባሪዎች በቀጥታ — ከእርስዎ መስፈርት ጋር የተጣጣመ።",
      overview: [
        "ጥሩ የወጪ ንግድ ከምንጩ ይጀምራል። የሚፈልጉትን ምርት፣ ደረጃና መጠን ለማሟላት በኢትዮጵያ ዋና ዋና የምርት አካባቢዎች ካሉ አምራቾች፣ ኅብረት ሥራ ማኅበራትና አቀነባባሪዎች ጋር እንሠራለን።",
        "የሚፈልጉትንና የሚፈልጉበትን ጊዜ ይንገሩን። ያለውን እናረጋግጣለን፣ አስፈላጊ ሲሆን ናሙና እናዘጋጃለን፣ ምንም ነገር ከመንቀሳቀሱ በፊትም የንግድ ውሉን በግልጽ እናስቀምጣለን።",
      ],
      highlights: [
        "ከታወቁ የኢትዮጵያ የምርት አካባቢዎች ማሰባሰብ",
        "ከኅብረት ሥራ ማኅበራት፣ እርሻዎችና አቀነባባሪዎች ጋር ትስስር",
        "የናሙና ጥያቄዎችና የደረጃ ማጣጣም",
        "መጠንና ጊዜ ቀድሞ ይወሰናሉ",
      ],
    },
    {
      slug: "processing-grading",
      title: "ማቀነባበርና ደረጃ ማውጣት",
      image: "/images/service-processing.jpg",
      excerpt: "ማጽዳት፣ ደረጃ ማውጣት፣ መቁላትና ማሸግ — ከእርስዎ ጋር በተስማማንበት መስፈርት የተዘጋጀ።",
      overview: [
        "ቡናና እህሎች ለትዕዛዝዎ በተስማማንበት መስፈርት ይዘጋጃሉ። ይህም ማጽዳትን፣ ደረጃ ማውጣትን፣ ቡናን በተስማማንበት አቆላል መቁላትንና ለወጪ ንግድ ማሸግን ሊያካትት ይችላል።",
        "እያንዳንዱን ደረጃ ከአቀነባባሪው ጋር እናስተባብራለን፣ ሂደቱንም እናሳውቅዎታለን — የሚደርስዎ ጭነት ከቀረበውና ካጸደቁት ጋር እንዲመሳሰል።",
      ],
      highlights: [
        "በገዢው መስፈርት ማጽዳትና ደረጃ ማውጣት",
        "ለተቆላ ቡና በተስማማንበት አቆላል መቁላት",
        "የማሸጊያና የመለያ ጽሑፍ ማስተባበር",
        "ከመላኩ በፊት የቅድመ-ጭነት ፍተሻ",
      ],
    },
    {
      slug: "quality-compliance",
      title: "ጥራትና ደንብ ተገዢነት",
      image: "/images/service-quality.jpg",
      excerpt: "ተግባራዊ የጥራት ፍተሻዎችና የወጪ ንግድ ሰነዶች — በገዢዎ መስፈርት ዙሪያ የተቀናጁ።",
      overview: [
        "ምርቶች ከምንጩ ከመውጣታቸው በፊት ጥራታቸው ይፈተሻል። እንደ ምርቱና መድረሻው የእርጥበት፣ የጉድለትና የደረጃ ፍተሻዎችን፣ የናሙና ማጽደቅንና ከተቆጣጣሪ ድርጅቶች ጋር ማስተባበርን ሊያካትት ይችላል።",
        "ለጭነቱ የሚያስፈልጉ ሰነዶችን በማዘጋጀትም እናግዛለን። የተለየ የምስክር ወረቀትና የአስመጪ አገር መስፈርቶች ትዕዛዙ ከመሰጠቱ በፊት ከእርስዎና ከገዢዎ ጋር ይረጋገጣሉ።",
      ],
      highlights: [
        "የእርጥበት፣ የጉድለትና የደረጃ ፍተሻዎች",
        "ከጭነት በፊት የናሙና ማጽደቅ",
        "ከገለልተኛ ተቆጣጣሪ ድርጅቶች ጋር ማስተባበር",
        "ከገዢው መስፈርት ጋር የተጣጣሙ ሰነዶች",
      ],
    },
    {
      slug: "logistics-documentation",
      title: "ሎጂስቲክስና ሰነዶች",
      image: "/images/service-logistics.jpg",
      excerpt: "የኮንቴይነርና የአየር ጭነት ማስተባበር፣ የወጪ ንግድ ሰነዶችና ግልጽ የጭነት መረጃ።",
      overview: [
        "ጭነቱን ከምንጩ እስከ መድረሻዎ — በባሕር ወይም በአየር — በዋጋ ማቅረቢያው ላይ በተስማማንበት የአቅርቦት ሁኔታ መሠረት እናስተባብራለን።",
        "ከቦታ ማስያዝና ከመጫን እስከ የወጪ ንግድ ሰነዶችና የክትትል መረጃ ድረስ አንድ ቡድን ከጭነቱ ጋር ይቆያል — ሁልጊዜ ያለበትን ሁኔታ ያውቃሉ።",
      ],
      highlights: [
        "የኮንቴይነርና የአየር ጭነት ማስተባበር",
        "የወጪ ንግድ ሰነዶች ድጋፍ",
        "የጭነት ክትትል መረጃ",
        "በዋጋ ማቅረቢያው የተስማማንበት የአቅርቦት ሁኔታ",
      ],
    },
  ],
};

const SERVICE_PROCESS_BY_LOCALE: Record<Locale, ProcessStep[]> = {
  en: [
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
  ],
  am: [
    {
      title: "ፍላጎትዎን ያጋሩ",
      description: "የሚፈልጉትን ምርት፣ ደረጃ፣ መጠን፣ መድረሻና ጊዜ ይንገሩን።",
    },
    {
      title: "የዋጋ ማቅረቢያ ይቀበሉ",
      description: "ያለውን አቅርቦት፣ ዋጋ፣ ናሙናና የምናቀርባቸውን ውሎች እናረጋግጣለን።",
    },
    {
      title: "ናሙናና ውሉን ያጽድቁ",
      description: "ከዝግጅት ወይም ከጭነት በፊት መስፈርቱንና የንግድ ውሉን ያጸድቃሉ።",
    },
    {
      title: "ከሰነዶች ጋር ይላካል",
      description: "ዝግጅትን፣ ፍተሻን፣ ጭነትንና የወጪ ንግድ ሰነዶችን እስከ መድረሻው እናስተባብራለን።",
    },
  ],
};

/** Slugs are identical in every language; English is used for routing. */
export const SERVICES: Service[] = SERVICES_BY_LOCALE.en;

export function getServices(locale: Locale): Service[] {
  return SERVICES_BY_LOCALE[locale];
}

export function getServiceProcess(locale: Locale): ProcessStep[] {
  return SERVICE_PROCESS_BY_LOCALE[locale];
}

export function getServiceBySlug(slug: string, locale: Locale = "en"): Service | undefined {
  return SERVICES_BY_LOCALE[locale].find((service) => service.slug === slug);
}
