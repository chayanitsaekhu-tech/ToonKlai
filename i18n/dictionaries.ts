import english from "@/i18n/messages/en.json";
import thai from "@/i18n/messages/th.json";

import type { Locale } from "@/i18n/config";


const dictionaries = {
  en: english,
  th: thai,
} satisfies Record<Locale, typeof english>;

export type Dictionary = typeof dictionaries.en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}