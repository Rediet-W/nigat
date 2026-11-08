"use client";

import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Check, ChevronDown } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui";
import {
  buildEnquiryMailto,
  ENQUIRY_OPTIONS,
  GENERAL_ENQUIRY,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from "../lib/enquiry";

interface EnquiryFormProps {
  /** Pre-selected topic (service slug or vehicle category slug). */
  defaultInterest?: string;
  /** Render for a dark background. */
  inverse?: boolean;
}

const EMPTY_VALUES: Omit<EnquiryValues, "interest"> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

/** Underline-style enquiry form. Validates client-side, then hands off to the visitor's email app. */
export function EnquiryForm({ defaultInterest = GENERAL_ENQUIRY, inverse }: EnquiryFormProps) {
  const formId = useId();
  const [values, setValues] = useState<EnquiryValues>({ ...EMPTY_VALUES, interest: defaultInterest });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof EnquiryValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus();
      return;
    }

    window.location.href = buildEnquiryMailto(values);
    setSubmitted(true);
  };

  const fieldId = (name: keyof EnquiryValues) => `${formId}-${name}`;
  const errorId = (name: keyof EnquiryValues) => `${formId}-${name}-error`;

  const fieldProps = (name: keyof EnquiryValues) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
    className: cn(
      "w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-lg outline-none transition-colors duration-500",
      inverse
        ? "border-line-inverse text-paper placeholder:text-silver/50 focus:border-accent"
        : "border-ink/25 text-ink placeholder:text-steel/60 focus:border-accent",
      errors[name] && "border-error",
    ),
  });

  const fieldBase = { inverse, errors, fieldId, errorId };

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-x-8 gap-y-10 md:grid-cols-2">
      <Field {...fieldBase} name="firstName" label="First name">
        <input type="text" autoComplete="given-name" {...fieldProps("firstName")} />
      </Field>
      <Field {...fieldBase} name="lastName" label="Last name">
        <input type="text" autoComplete="family-name" {...fieldProps("lastName")} />
      </Field>
      <Field {...fieldBase} name="email" label="Email">
        <input type="email" autoComplete="email" {...fieldProps("email")} />
      </Field>
      <Field {...fieldBase} name="phone" label="Phone">
        <input type="tel" autoComplete="tel" {...fieldProps("phone")} />
      </Field>
      <Field {...fieldBase} name="interest" label="Topic" className="md:col-span-2">
        <div className="relative">
          <select {...fieldProps("interest")}>
            {ENQUIRY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} className="text-ink">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-accent"
          />
        </div>
      </Field>
      <Field {...fieldBase} name="message" label="Message" className="md:col-span-2">
        <textarea rows={3} placeholder="Tell us what you are looking for…" {...fieldProps("message")} />
      </Field>

      <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className={cn("max-w-[26rem] text-sm", inverse ? "text-silver" : "text-steel")}>
          Submitting opens your email app with the enquiry ready to send.
        </p>
        <Button type="submit" variant={inverse ? "primary" : "dark"}>
          Send enquiry
        </Button>
      </div>

      <p role="status" aria-live="polite" className="empty:hidden md:col-span-2">
        {submitted && (
          <span className="flex items-start gap-3">
            <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
            <span>
              Your email app should now open with your enquiry. If it didn&apos;t, email us at{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-link">
                {CONTACT.email}
              </a>
              .
            </span>
          </span>
        )}
      </p>
    </form>
  );
}

interface FieldProps {
  name: keyof EnquiryValues;
  label: string;
  inverse?: boolean;
  errors: EnquiryErrors;
  fieldId: (name: keyof EnquiryValues) => string;
  errorId: (name: keyof EnquiryValues) => string;
  className?: string;
  children: ReactNode;
}

function Field({ name, label, inverse, errors, fieldId, errorId, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={fieldId(name)} className={cn("type-eyebrow block", inverse ? "text-silver" : "text-steel")}>
        {label}
      </label>
      {children}
      {errors[name] && (
        <p id={errorId(name)} className="mt-2 text-sm font-medium text-error">
          {errors[name]}
        </p>
      )}
    </div>
  );
}
