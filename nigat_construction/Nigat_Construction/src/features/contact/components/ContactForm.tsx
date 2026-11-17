"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ComponentProps,
  type FormEvent,
} from "react";

import { submitContactForm } from "@/features/contact/actions";

type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type Status = { ok: boolean; message: string } | null;

interface FormContextValue {
  errors: Record<string, string>;
  validate: (el: FieldElement) => void;
  validateLater: (el: FieldElement) => void;
  pending: boolean;
  status: Status;
}

const FormContext = createContext<FormContextValue | null>(null);

function useFormContext(): FormContextValue {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("FormField/FormSubmit must be rendered inside <ContactForm>.");
  return ctx;
}

/**
 * Contact/quote form. Replicates the template's Bootstrap Validator behaviour
 * (native constraint messages shown in `.help-block.with-errors`, field checked
 * on blur and 500ms after typing, all fields on submit) and its success/error
 * message in `#msgSubmit`. Submission goes through a Server Action.
 */
export function ContactForm({ children, ...props }: Omit<ComponentProps<"form">, "onSubmit" | "action">) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();
  const timers = useRef<Record<string, number>>({});

  const validate = useCallback((el: FieldElement) => {
    window.clearTimeout(timers.current[el.name]);
    const message = el.checkValidity() ? "" : el.validationMessage;
    setErrors((current) => (current[el.name] === message ? current : { ...current, [el.name]: message }));
  }, []);

  const validateLater = useCallback(
    (el: FieldElement) => {
      window.clearTimeout(timers.current[el.name]);
      timers.current[el.name] = window.setTimeout(() => validate(el), 500);
    },
    [validate],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Array.from(form.querySelectorAll<FieldElement>("input[name], textarea[name]"));
    fields.forEach(validate);
    if (!form.checkValidity()) return;

    const data = new FormData(form);
    startTransition(async () => {
      const result = await submitContactForm(data);
      setStatus(result);
      if (result.ok) {
        form.reset();
        setErrors({});
      }
    });
  };

  const value = useMemo(
    () => ({ errors, validate, validateLater, pending, status }),
    [errors, validate, validateLater, pending, status],
  );

  return (
    <FormContext.Provider value={value}>
      <form id="contactForm" noValidate onSubmit={handleSubmit} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

interface FormFieldProps {
  className: string;
  name: string;
  id: string;
  placeholder: string;
  as?: "input" | "textarea";
  type?: "text" | "email" | "tel";
  rows?: number;
  required?: boolean;
}

export function FormField({ className, name, id, placeholder, as = "input", type = "text", rows, required }: FormFieldProps) {
  const { errors, validate, validateLater } = useFormContext();
  const error = errors[name];
  const shared = {
    name,
    id,
    placeholder,
    required,
    className: "form-control",
    onBlur: (e: { currentTarget: FieldElement }) => validate(e.currentTarget),
    onInput: (e: { currentTarget: FieldElement }) => validateLater(e.currentTarget),
    "aria-invalid": error ? true : undefined,
  };

  return (
    <div className={error ? `${className} has-error has-danger` : className}>
      {as === "textarea" ? <textarea rows={rows} {...shared} /> : <input type={type} {...shared} />}
      <div className="help-block with-errors">
        {error && (
          <ul className="list-unstyled">
            <li>{error}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export function FormSubmit({ className, label }: { className: string; label: string }) {
  const { pending, status } = useFormContext();
  const statusClass = status ? `h5 ${status.ok ? "text-success" : "text-danger"}` : "h5 d-none mb-0";

  return (
    <div className={className}>
      <button type="submit" className="btn-default" disabled={pending}>
        {label}
      </button>
      <div id="msgSubmit" className={statusClass} role="status">
        {status?.message}
      </div>
    </div>
  );
}
