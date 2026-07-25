import english from "@/i18n/messages/en.json";
import thai from "@/i18n/messages/th.json";

import type { Locale } from "@/i18n/config";

const dictionaries = {
  en: english,
  th: thai,
} satisfies Record<Locale, typeof english>;

export type Dictionary = typeof english;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}