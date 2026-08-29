"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type TopNavProps = {
  locale: Locale;
};

export default function TopNav({ locale }: TopNavProps) {
  const dictionary = getDictionary(locale);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex min-h-12 w-full max-w-6xl items-center gap-6 px-5">

        <div className="group relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="flex items-center gap-2 py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
          >
            {dictionary.navigation.examPreparation}

            <span
              className={`text-xs transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`absolute left-0 top-full z-50 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-200 ${
              isOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-2 opacity-0"
            }`}
          >
            <Link
              href={`/${locale}/english`}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {dictionary.navigation.englishTutoring}
            </Link>
          </div>
        </div>

        <Link
          href={`/${locale}/about`}
          className="py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
        >
          {locale === "th" ? "เกี่ยวกับเรา" : "About Us"}
        </Link>

        <Link
          href={`/${locale}/contact`}
          className="py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
        >
          {dictionary.navigation.contact}
        </Link>

      </div>
    </nav>
  );
}

