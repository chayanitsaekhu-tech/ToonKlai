import { routeSegments } from "@/i18n/config";

import type { Locale } from "@/i18n/config";
import type { Scholarship } from "@/types/scholarship";

export function getHomePath(locale: Locale) {
  return `/${locale}`;
}

export function getScholarshipPath(
  locale: Locale,
  scholarship: Scholarship,
) {
  const section = routeSegments[locale].scholarships;

  return `/${locale}/${section}/${scholarship.slug}`;
}


