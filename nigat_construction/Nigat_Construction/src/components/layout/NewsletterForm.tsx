"use client";

import Image from "next/image";
import { useState, useTransition, type FormEvent } from "react";

import { subscribeNewsletter } from "@/features/contact/actions";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Footer newsletter signup. Uses native `required`/`type=email` validation as the
 * original did; the result is reported in place of the helper note below the field.
 */
export function NewsletterForm() {
  const t = useI18n().dict.footer;
  const [note, setNote] = useState(t.newsletterNote);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const result = await subscribeNewsletter(data);
      setNote(result.message);
      if (result.ok) form.reset();
    });
  };

  return (
    <div className="footer-links footer-newsletter-box">
      <h2>{t.newsletter}</h2>
      <form id="newslettersForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="mail"
            className="form-control"
            id="mail"
            placeholder={t.emailPlaceholder}
            aria-label={t.emailLabel}
            required
          />
          <button type="submit" className="newsletter-btn" aria-label={t.subscribe} disabled={pending}>
            <Image src="/images/arrow-primary.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </form>
      <p role="status">{note}</p>
    </div>
  );
}
