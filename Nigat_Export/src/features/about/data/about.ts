import type { Locale } from "@/i18n/config";
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

interface AboutContent {
  intro: { title: string; lead: string };
  topics: AboutTopic[];
  principles: Feature[];
  approach: Feature[];
}

const ABOUT_BY_LOCALE: Record<Locale, AboutContent> = {
  en: {
    intro: {
      title: "Rooted in Ethiopian origin.",
      lead: "We source coffee, cereals and pulses from growers and processors we know, prepare them to specification, and keep buyers informed from sample to shipment.",
    },
    topics: [
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
    ],
    principles: [
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
    ],
    approach: [
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
    ],
  },
  am: {
    intro: {
      title: "ከኢትዮጵያ ምንጭ የተገኘ።",
      lead: "ቡና፣ የአገዳ እህሎችና ጥራጥሬዎችን ከምናውቃቸው አምራቾችና አቀነባባሪዎች እናሰባስባለን፣ በመስፈርቱ መሠረት እናዘጋጃለን፣ ገዢዎችንም ከናሙና እስከ ጭነት ድረስ እናሳውቃለን።",
    },
    topics: [
      {
        title: "ከምንጩ የተሰበሰበ",
        description:
          "በኢትዮጵያ ዋና ዋና የምርት አካባቢዎች ካሉ አምራቾች፣ ኅብረት ሥራ ማኅበራትና አቀነባባሪዎች ጋር በመሥራት ምርቱንና ደረጃውን ከፍላጎትዎ ጋር እናጣጥማለን።",
        image: "/images/about-source.jpg",
        imageAlt: "በኢትዮጵያ በምንጩ የሚደርቅ ቡና",
      },
      {
        title: "በጥንቃቄ የተዘጋጀ",
        description:
          "ማጽዳት፣ ደረጃ ማውጣት፣ መቁላትና ማሸግ ከእርስዎ ጋር በተስማማንበት መስፈርት ይከናወናሉ — ምንም ነገር ከመላኩ በፊት ይፈተሻል።",
        image: "/images/about-prepare.jpg",
        imageAlt: "በእጅ መዳፍ የተያዘ የገብስ ፍሬ",
      },
      {
        title: "በግልጽነት የተላከ",
        description: "ጭነት፣ ፍተሻና የወጪ ንግድ ሰነዶች በአንድ ቡድን ይያዛሉ — ከመጫን እስከ መድረሻው ግልጽ መረጃ እየደረሰዎት።",
        image: "/images/about-ship.jpg",
        imageAlt: "በወደብ ላይ የተደረደሩ የጭነት ኮንቴይነሮች",
      },
    ],
    principles: [
      {
        title: "ከምንጩ ጋር ያለ ትስስር",
        description: "ከአምራቾችና ከአቀነባባሪዎች ጋር ያለን የረጅም ጊዜ ትስስር ከወቅት ወቅት ወጥ በሆነ መንገድ ምርት እንድናሰባስብ ይረዳናል።",
      },
      {
        title: "መስፈርት ይቀድማል",
        description: "ትዕዛዝ ከመንቀሳቀሱ በፊት ምርቱ፣ ደረጃው፣ ማሸጊያውና የአቅርቦት ሁኔታው ይወሰናሉ።",
      },
      {
        title: "ግልጽ ግንኙነት",
        description: "አንድ ቡድን ጭነትዎን ይከታተላል፣ በእያንዳንዱ ደረጃም ያሳውቅዎታል።",
      },
    ],
    approach: [
      {
        title: "እንረዳለን",
        description: "በምርትዎ፣ በደረጃው፣ በመጠኑ፣ በመድረሻውና በጊዜው እንጀምራለን።",
      },
      {
        title: "እናቀርባለን",
        description: "አቅርቦቱን፣ ናሙናውን፣ ዋጋውንና የአቅርቦት ሁኔታውን እናረጋግጣለን።",
      },
      {
        title: "እናደርሳለን",
        description: "ዝግጅትን፣ ፍተሻን፣ ጭነትንና ሰነዶችን እስከ መድረሻው እናስተባብራለን።",
      },
    ],
  },
};

export function getAboutContent(locale: Locale): AboutContent {
  return ABOUT_BY_LOCALE[locale];
}
