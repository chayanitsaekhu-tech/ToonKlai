import Link from "next/link";

import {
  localeNames,
  locales,
} from "@/i18n/config";

import {
  getHomePath,
} from "@/i18n/routes";

import type {
  Locale,
} from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  return (
    <nav
      aria-label="Language"
      className="flex gap-2"
    >
      {locales.map(
        (language) => (
          <Link
            key={language}
            href={getHomePath(
              language,
            )}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              locale === language
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-700"
            }`}
          >
            {
              localeNames[
                language
              ]
            }
          </Link>
        ),
      )}
    </nav>
  );
}