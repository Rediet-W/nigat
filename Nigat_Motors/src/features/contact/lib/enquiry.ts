import { CONTACT, SITE } from "@/constants/site";
import { SERVICES } from "@/features/services/data/services";
import { VEHICLE_CATEGORIES } from "@/features/vehicles/data/vehicle-categories";
import type { EnquiryOption } from "@/types";

export const GENERAL_ENQUIRY = "general";

export const ENQUIRY_OPTIONS: EnquiryOption[] = [
  { value: GENERAL_ENQUIRY, label: "General enquiry" },
  ...SERVICES.map((service) => ({ value: service.slug, label: service.title })),
  ...VEHICLE_CATEGORIES.map((category) => ({ value: category.slug, label: `Vehicles — ${category.name}` })),
];

export function isEnquiryOption(value: string | null | undefined): value is string {
  return !!value && ENQUIRY_OPTIONS.some((option) => option.value === value);
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

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!PHONE_PATTERN.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (values.message.trim().length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  return errors;
}

/**
 * Builds a `mailto:` link containing the enquiry.
 * No backend/email integration has been specified, so the form hands the
 * message to the visitor's email app. Replace with an API route or email
 * service when one is chosen (README → "Enquiry form").
 */
export function buildEnquiryMailto(values: EnquiryValues): string {
  const topic = ENQUIRY_OPTIONS.find((option) => option.value === values.interest)?.label ?? "General enquiry";
  const name = `${values.firstName.trim()} ${values.lastName.trim()}`;

  const subject = `${SITE.name} enquiry — ${topic}`;
  const body = [
    `Name: ${name}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Topic: ${topic}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
