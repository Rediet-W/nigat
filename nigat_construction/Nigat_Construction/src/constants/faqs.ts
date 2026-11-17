import type { FaqItem } from "@/types";

export const FAQS = {
  general: [
    {
      question: "How long does a construction project take?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Do you offer customized construction solutions?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "What types of projects do you handle?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you ensure quality in your work?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Do you provide project cost estimates?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    }
  ],
  process: [
    {
      question: "How do I start a construction project?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you create a project timeline?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you minimize project delays?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "What is the final inspection process?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    }
  ],
  pricing: [
    {
      question: "How much does a construction project cost?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you calculate construction costs?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you calculate construction costs?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    }
  ],
  design: [
    {
      question: "Do you provide architectural design services?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Can you work with my existing architect or designer?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Do you offer 2D and 3D design plans?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do you ensure quality in your work?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How many design revisions are included?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    }
  ],
  warranty: [
    {
      question: "What is not covered by the warranty?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "Do you provide a warranty on your construction work?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "When does the warranty period begin?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    },
    {
      question: "How do I make a warranty claim?",
      answer: "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery."
    }
  ]
} as const satisfies Record<string, readonly FaqItem[]>;
