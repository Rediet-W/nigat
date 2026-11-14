import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqList } from "@/features/faqs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQs",
  description: "Answers to common questions about Nigat Motors vehicles, services and how to get in touch.",
  path: ROUTES.faqs,
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Questions & answers"
        image="/images/hero-faqs.jpg"
        size="compact"
      />
      <FaqList />
      <EnquiryCta />
    </>
  );
}
