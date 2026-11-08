import type { FaqGroup } from "@/types";

/**
 * PLACEHOLDER CONTENT — answers describe how to use this website and the
 * enquiry process only. Confirm policies (pricing, financing, warranties,
 * opening hours) with Nigat Motors before adding them (README → "Content to confirm").
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Vehicles",
    items: [
      {
        question: "How can I find out which vehicles are available?",
        answer:
          "Browse our vehicle categories, then send an enquiry for the type you are interested in. Our team will reply with current availability and details.",
      },
      {
        question: "Can you help me choose between vehicle types?",
        answer:
          "Yes. Tell us how you plan to use the vehicle — commuting, family travel or work — and we will talk you through the categories that suit you best.",
      },
      {
        question: "Can I arrange to see a vehicle in person?",
        answer:
          "Get in touch through the contact page or by phone and we will discuss arranging a visit at a convenient time.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        question: "How do I book a service or inspection?",
        answer:
          "Send an enquiry choosing the service you need, or call us. Share your vehicle details and we will confirm the next steps with you.",
      },
      {
        question: "Can you help me source a specific part?",
        answer:
          "Yes — send us your vehicle details and a description of the part or accessory you need, and we will let you know what options are available.",
      },
    ],
  },
  {
    title: "Getting in touch",
    items: [
      {
        question: "What is the best way to contact Nigat Motors?",
        answer:
          "Use the enquiry form on our contact page, call us, or send an email. Including your vehicle details or what you are looking for helps us respond faster.",
      },
      {
        question: "What happens after I send an enquiry?",
        answer:
          "A member of our team reviews your message and gets back to you using the contact details you provided.",
      },
    ],
  },
];

/** A short selection used in the home page FAQ preview. */
export const FEATURED_FAQS = FAQ_GROUPS.flatMap((group) => group.items).slice(0, 5);
