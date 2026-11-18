import { CONTACT } from "@/constants/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { fill } from "@/i18n/fill";
import type { EnquiryOption } from "@/types";

/**
 * Client-safe enquiry logic. Options and copy for a language are resolved on
 * the server by `getEnquiryFormData()` (./enquiry-data.ts) and passed in.
 */
export const GENERAL_ENQUIRY = "general";

/** Form copy passed from the server to the (client) enquiry form. */
export type EnquiryCopy = Dictionary["form"];

/** Everything the enquiry form needs, resolved for one language. */
export interface EnquiryFormData {
  options: EnquiryOption[];
  copy: EnquiryCopy;
  /** Site name used in the email subject. */
  siteName: string;
}

export function isEnquiryOption(options: EnquiryOption[], value: string | null | undefined): value is string {
  return !!value && options.some((option) => option.value === value);
}

export interface EnquiryValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

export function validateEnquiry(values: EnquiryValues, copy: EnquiryCopy): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!values.firstName.trim()) errors.firstName = copy.errors.firstName;
  if (!values.lastName.trim()) errors.lastName = copy.errors.lastName;
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = copy.errors.email;
  if (!PHONE_PATTERN.test(values.phone.trim())) errors.phone = copy.errors.phone;
  if (values.message.trim().length < 10) errors.message = copy.errors.message;

  return errors;
}

/**
 * Builds a `mailto:` link containing the enquiry.
 * No backend/email integration has been specified, so the form hands the
 * message to the visitor's email app. Replace with an API route or email
 * service when one is chosen (README → "Enquiry form").
 */
export function buildEnquiryMailto(values: EnquiryValues, { options, copy, siteName }: EnquiryFormData): string {
  const topic = options.find((option) => option.value === values.interest)?.label ?? copy.generalEnquiry;
  const name = `${values.firstName.trim()} ${values.lastName.trim()}`;

  const subject = fill(copy.mail.subject, { name: siteName, topic });
  const body = [
    `${copy.mail.name}: ${name}`,
    `${copy.mail.email}: ${values.email.trim()}`,
    `${copy.mail.phone}: ${values.phone.trim()}`,
    `${copy.mail.topic}: ${topic}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
