import { FAQS } from "@/constants/faqs";
import type { ContentOverrides, FaqCategory } from "@/i18n/dictionaries/en";
import type { FaqItem } from "@/types";

/** Applies per-id translations from a dictionary over the English items in src/constants. */
export function localize<T extends { id: string }>(
  items: readonly T[],
  overrides: Readonly<Record<string, Partial<NoInfer<T>>>>,
): T[] {
  return items.map((item) => ({ ...item, ...overrides[item.id] }));
}

/** FAQ list for a category in the current language, falling back to English. */
export function localizeFaqs(category: FaqCategory, content: ContentOverrides): readonly FaqItem[] {
  return content.faqs[category] ?? FAQS[category];
}
