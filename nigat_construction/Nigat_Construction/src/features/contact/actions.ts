"use server";

import { getDictionary } from "@/i18n/server";
import { deliver, field, isEmail, type FormResult } from "@/lib/forms";

export async function submitContactForm(data: FormData): Promise<FormResult> {
  const t = (await getDictionary()).form;
  const payload = {
    firstName: field(data, "fname"),
    lastName: field(data, "lname"),
    email: field(data, "email"),
    phone: field(data, "phone"),
    message: field(data, "message"),
  };

  // Server-side mirror of the client validation (never trust the browser).
  if (!payload.firstName || !payload.lastName || !payload.phone || !isEmail(payload.email)) {
    return { ok: false, message: t.requiredFields };
  }

  const result = await deliver("contact", payload, t);
  return result.ok ? { ok: true, message: t.messageSent } : result;
}

export async function subscribeNewsletter(data: FormData): Promise<FormResult> {
  const t = (await getDictionary()).form;
  const email = field(data, "mail");
  if (!isEmail(email)) return { ok: false, message: t.invalidEmail };

  const result = await deliver("newsletter", { email }, t);
  return result.ok ? { ok: true, message: t.subscribed } : result;
}
