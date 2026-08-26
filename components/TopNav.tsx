import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type TopNavProps = {
  locale: Locale;
};

export default function TopNav({
  locale,
}: TopNavProps) {
  const dictionary = getDictionary(locale);

  return (
    <nav className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex h-12 w-full max-w-6xl items-center px-5">
        <div className="group relative">
          <button
            type="button"
            className="flex items-center gap-2 py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
          >
            {dictionary.navigation.examPreparation}

            <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
              ▼
            </span>
          </button>

          <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={`/${locale}/english`}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {dictionary.navigation.englishTutoring}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}