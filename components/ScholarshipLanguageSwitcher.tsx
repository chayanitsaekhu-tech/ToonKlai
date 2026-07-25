import Link from "next/link";

import {
  localeNames,
  locales,
} from "@/i18n/config";

import {
  getScholarshipPath,
} from "@/i18n/routes";

import {
  getScholarshipById,
} from "@/i18n/scholarships";

import type { Locale } from "@/i18n/config";

type ScholarshipLanguageSwitcherProps = {
  locale: Locale;
  scholarshipId: number;
};

export default function ScholarshipLanguageSwitcher({
  locale,
  scholarshipId,
}: ScholarshipLanguageSwitcherProps) {
  return (
    <nav
      aria-label="Language"
      className="flex gap-2"
    >
      {locales.map(
        (targetLocale) => {
          const targetScholarship =
            getScholarshipById(
              targetLocale,
              scholarshipId,
            );

          if (!targetScholarship) {
            return null;
          }

          return (
            <Link
              key={targetLocale}
              href={getScholarshipPath(
                targetLocale,
                targetScholarship,
              )}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                locale ===
                targetLocale
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              {
                localeNames[
                  targetLocale
                ]
              }
            </Link>
          );
        },
      )}
    </nav>
  );
}