import type { FaqGroup } from "@/types";

/**
 * PLACEHOLDER CONTENT — answers describe products, the enquiry process and
 * general export practice only. Confirm minimum volumes, payment terms,
 * certifications and lead times with Nigat Export before adding them
 * (README → "Content to confirm").
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
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
];

/** A short selection used in the home page FAQ preview. */
export const FEATURED_FAQS = FAQ_GROUPS.flatMap((group) => group.items).slice(0, 5);
