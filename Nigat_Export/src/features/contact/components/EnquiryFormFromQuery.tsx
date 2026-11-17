"use client";

import { Suspense, type ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import { isEnquiryOption } from "../lib/enquiry";
import { EnquiryForm } from "./EnquiryForm";

type EnquiryFormProps = Omit<ComponentProps<typeof EnquiryForm>, "defaultInterest">;

function QueryAwareForm(props: EnquiryFormProps) {
  const interest = useSearchParams().get("interest");
  const defaultInterest = isEnquiryOption(interest) ? interest : undefined;
  return <EnquiryForm key={defaultInterest} defaultInterest={defaultInterest} {...props} />;
}

/**
 * Enquiry form that pre-selects its topic from `?interest=<slug>`.
 * Search params are request-time data, so the read is wrapped in Suspense;
 * the prerendered fallback is the same form with the default topic.
 */
export function EnquiryFormFromQuery(props: EnquiryFormProps) {
  return (
    <Suspense fallback={<EnquiryForm {...props} />}>
      <QueryAwareForm {...props} />
    </Suspense>
  );
}
