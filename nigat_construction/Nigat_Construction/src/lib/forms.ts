import "server-only";

export interface FormResult {
  ok: boolean;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

export function field(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Forwards a submission to FORM_WEBHOOK_URL. The original template posted to a
 * `form-process.php` script that is not part of the project, so delivery is
 * opt-in via configuration and reported honestly when missing.
 */
export async function deliver(
  form: string,
  payload: Record<string, string>,
  messages: { notConfigured: string; failed: string },
): Promise<FormResult> {
  const endpoint = process.env.FORM_WEBHOOK_URL;
  if (!endpoint) {
    return { ok: false, message: messages.notConfigured };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, ...payload, submittedAt: new Date().toISOString() }),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    return { ok: true, message: "" };
  } catch (error) {
    console.error(`[forms] ${form} delivery failed`, error);
    return { ok: false, message: messages.failed };
  }
}
