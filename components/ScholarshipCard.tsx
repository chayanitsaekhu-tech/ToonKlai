import Link from "next/link";

import { getScholarshipPath } from "@/i18n/routes";

import type { Locale } from "@/i18n/config";

import type {
  Scholarship,
  ScholarshipLevel,
  ScholarshipLanguage,
} from "@/types/scholarship";

type ScholarshipCardDictionary = {
  featured: string;
  amount: string;
  funding: string;
  fullScholarship: string;
  partialScholarship: string;
  level: string;
  field: string;
  deadline: string;
  view: string;
  language: string;
  languageOptions: Record<
    ScholarshipLanguage,
    string
  >;
  location: string;
};

type FilterDictionary = {
  undergraduate: string;
  postgraduate: string;
  international: string;
};

type ScholarshipCardProps = {
  locale: Locale;
  scholarship: Scholarship;
  dictionary: ScholarshipCardDictionary;
  filterDictionary: FilterDictionary;
};

export default function ScholarshipCard({
  locale,
  scholarship,
  dictionary,
  filterDictionary,
}: ScholarshipCardProps) {
  function getLevelLabel(
    level: ScholarshipLevel,
  ) {
    switch (level) {
      case "Undergraduate":
        return filterDictionary.undergraduate;

      case "Postgraduate":
        return filterDictionary.postgraduate;

      case "International":
        return filterDictionary.international;
    }
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-slate-900">
          {scholarship.name}
        </h3>

        {scholarship.featured && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            {dictionary.featured}
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {scholarship.description}
      </p>

      <dl className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">

          <div>
      <dt className="font-semibold text-slate-900">
        {dictionary.funding}
      </dt>

      <dd className="mt-1">
        {scholarship.isFullScholarship
          ? dictionary.fullScholarship
          : dictionary.partialScholarship}
      </dd>
    </div>

        <div>
          <dt className="font-semibold text-slate-900">
            {dictionary.level}
          </dt>

          <dd className="mt-1">
            {getLevelLabel(
              scholarship.level,
            )}
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-slate-900">
            {dictionary.field}
          </dt>

          <dd className="mt-1">
            {scholarship.field}
          </dd>
        </div>

        <div>
          <dt className="font-semibold text-slate-900">
            {dictionary.deadline}
          </dt>

          <dd className="mt-1">
            {scholarship.deadline}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">
            {dictionary.language}
          </dt>

          <dd className="mt-1">
                    {scholarship.languages
            .map(
              (language) =>
                dictionary.languageOptions[language],
            )
            .join(" / ")}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">
            {dictionary.location}
          </dt>

          <dd className="mt-1">
            {scholarship.location}
          </dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <Link
          href={getScholarshipPath(
            locale,
            scholarship,
          )}
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white"
        >
          {dictionary.view}
        </Link>
      </div>
    </article>
  );
}


