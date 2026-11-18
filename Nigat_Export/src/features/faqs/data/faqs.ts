import type { Locale } from "@/i18n/config";
import type { FaqGroup, FaqItem } from "@/types";

/**
 * PLACEHOLDER CONTENT — answers describe products, the enquiry process and
 * general export practice only. Confirm minimum volumes, payment terms,
 * certifications and lead times with Nigat Export before adding them
 * (README → "Content to confirm").
 *
 * `id` is the anchor used on the FAQ page; keep it the same in every language.
 */
const FAQ_GROUPS_BY_LOCALE: Record<Locale, FaqGroup[]> = {
  en: [
    {
      id: "products",
      title: "Products",
      items: [
        {
          question: "What products can I source?",
          answer:
            "We supply Ethiopian green and roasted coffee, teff, wheat, barley, maize, sorghum, pulses and oilseeds. Browse the product categories, then send an enquiry for the item you are interested in.",
        },
        {
          question: "Can I request samples?",
          answer:
            "Yes. Samples can be arranged for serious enquiries. Availability, sample size and any costs are confirmed with you before dispatch.",
        },
        {
          question: "Can you match a specific grade or specification?",
          answer:
            "Tell us the grade, moisture, defect tolerance, packing and labelling you require. We will confirm what can be matched and any points that need to be agreed before an order is placed.",
        },
      ],
    },
    {
      id: "export-process",
      title: "Export process",
      items: [
        {
          question: "How does an order start?",
          answer:
            "Send an enquiry with the product, grade, volume, destination and timing you have in mind. Our team will reply with availability, samples where appropriate, pricing and next steps.",
        },
        {
          question: "What are your minimum order quantities?",
          answer:
            "Minimum volumes vary by product, preparation and destination. We confirm them in your quotation rather than publish a single figure.",
        },
      ],
    },
    {
      id: "logistics",
      title: "Logistics",
      items: [
        {
          question: "Which destinations do you ship to?",
          answer:
            "We arrange sea and air freight to a range of international destinations. Most sea freight moves through Djibouti; the routing that suits your destination is confirmed in the quotation.",
        },
        {
          question: "Who handles export documentation?",
          answer:
            "We coordinate the documents a shipment requires and confirm any product-specific certification with you and your buyer before the order is placed.",
        },
      ],
    },
    {
      id: "getting-in-touch",
      title: "Getting in touch",
      items: [
        {
          question: "What is the best way to contact Nigat Export?",
          answer:
            "Use the enquiry form on our contact page, send an email, or call us. Including the product, grade, volume and destination helps us respond faster.",
        },
        {
          question: "What happens after I send an enquiry?",
          answer:
            "A member of our team reviews your message and gets back to you using the contact details you provided, usually with a few follow-up questions.",
        },
      ],
    },
  ],
  am: [
    {
      id: "products",
      title: "ምርቶች",
      items: [
        {
          question: "ምን ዓይነት ምርቶችን ማግኘት እችላለሁ?",
          answer:
            "የኢትዮጵያ ጥሬና የተቆላ ቡና፣ ጤፍ፣ ስንዴ፣ ገብስ፣ በቆሎ፣ ማሽላ፣ ጥራጥሬዎችና የቅባት እህሎች እናቀርባለን። የምርት ዘርፎቹን ይመልከቱና ለሚፈልጉት ምርት ጥያቄ ይላኩ።",
        },
        {
          question: "ናሙና መጠየቅ እችላለሁ?",
          answer: "አዎ። ለቁርጥ ጥያቄዎች ናሙና ማዘጋጀት ይቻላል። አቅርቦቱ፣ የናሙናው መጠንና ማንኛውም ወጪ ከመላኩ በፊት ከእርስዎ ጋር ይረጋገጣሉ።",
        },
        {
          question: "የተለየ ደረጃ ወይም መስፈርት ማሟላት ትችላላችሁ?",
          answer:
            "የሚፈልጉትን ደረጃ፣ እርጥበት፣ የጉድለት ገደብ፣ ማሸጊያና መለያ ይንገሩን። ልናሟላ የምንችለውንና ትዕዛዝ ከመሰጠቱ በፊት መስማማት የሚያስፈልጋቸውን ነጥቦች እናረጋግጣለን።",
        },
      ],
    },
    {
      id: "export-process",
      title: "የወጪ ንግድ ሂደት",
      items: [
        {
          question: "ትዕዛዝ እንዴት ይጀመራል?",
          answer:
            "የሚፈልጉትን ምርት፣ ደረጃ፣ መጠን፣ መድረሻና ጊዜ የያዘ ጥያቄ ይላኩ። ቡድናችን ስለ አቅርቦቱ፣ አስፈላጊ ሲሆን ስለ ናሙና፣ ስለ ዋጋና ስለ ቀጣይ እርምጃዎች ምላሽ ይሰጣል።",
        },
        {
          question: "ዝቅተኛው የትዕዛዝ መጠን ስንት ነው?",
          answer: "ዝቅተኛው መጠን እንደ ምርቱ፣ እንደ ዝግጅቱና እንደ መድረሻው ይለያያል። አንድ ቁጥር ከማስቀመጥ ይልቅ በዋጋ ማቅረቢያዎ ላይ እናረጋግጠዋለን።",
        },
      ],
    },
    {
      id: "logistics",
      title: "ሎጂስቲክስ",
      items: [
        {
          question: "ወደ የትኞቹ መዳረሻዎች ትልካላችሁ?",
          answer:
            "ወደ ተለያዩ ዓለም አቀፍ መዳረሻዎች የባሕርና የአየር ጭነት እናዘጋጃለን። አብዛኛው የባሕር ጭነት በጅቡቲ በኩል ያልፋል፤ ለመድረሻዎ የሚስማማው መስመር በዋጋ ማቅረቢያው ላይ ይረጋገጣል።",
        },
        {
          question: "የወጪ ንግድ ሰነዶችን የሚያዘጋጀው ማን ነው?",
          answer:
            "ጭነቱ የሚፈልጋቸውን ሰነዶች እናስተባብራለን፤ ለምርቱ የተለየ የምስክር ወረቀት የሚያስፈልግ ከሆነም ትዕዛዙ ከመሰጠቱ በፊት ከእርስዎና ከገዢዎ ጋር እናረጋግጣለን።",
        },
      ],
    },
    {
      id: "getting-in-touch",
      title: "እኛን ለማግኘት",
      items: [
        {
          question: "ንጋት ኤክስፖርትን ለማግኘት የተሻለው መንገድ ምንድን ነው?",
          answer:
            "በአድራሻ ገጻችን ላይ ያለውን የጥያቄ ቅጽ ይጠቀሙ፣ ኢሜይል ይላኩ ወይም ይደውሉልን። ምርቱን፣ ደረጃውን፣ መጠኑንና መድረሻውን ማካተት በፍጥነት ምላሽ እንድንሰጥ ይረዳናል።",
        },
        {
          question: "ጥያቄ ከላክሁ በኋላ ምን ይሆናል?",
          answer:
            "ከቡድናችን አንዱ መልእክትዎን ይመለከትና ባስቀመጡት አድራሻ ያገኝዎታል — ብዙውን ጊዜ ጥቂት ተጨማሪ ጥያቄዎችን ይዞ።",
        },
      ],
    },
  ],
};

export function getFaqGroups(locale: Locale): FaqGroup[] {
  return FAQ_GROUPS_BY_LOCALE[locale];
}

/** A short selection used in the home page FAQ preview. */
export function getFeaturedFaqs(locale: Locale): FaqItem[] {
  return FAQ_GROUPS_BY_LOCALE[locale].flatMap((group) => group.items).slice(0, 5);
}
