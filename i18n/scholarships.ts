import englishScholarships from "@/data/scholarships.en.json";
import thaiScholarships from "@/data/scholarships.th.json";

import type { Locale } from "@/i18n/config";
import type { Scholarship } from "@/types/scholarship";

const scholarshipsByLocale = {
  en: englishScholarships as Scholarship[],
  th: thaiScholarships as Scholarship[],
} satisfies Record<Locale, Scholarship[]>;

export function getScholarships(locale: Locale): Scholarship[] {
  return scholarshipsByLocale[locale];
}

export function getScholarshipBySlug(
  locale: Locale,
  slug: string
) {
  const decodedSlug = decodeURIComponent(slug);

  return getScholarships(locale).find(
    (scholarship) =>
      scholarship.slug === decodedSlug
  );
}

export function getScholarshipById(
  locale: Locale,
  id: number,
): Scholarship | undefined {
  return getScholarships(locale).find(
    (scholarship) => scholarship.id === id,
  );
}