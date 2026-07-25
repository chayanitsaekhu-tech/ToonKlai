import ScholarshipCard from "@/components/ScholarshipCard";

import type { Locale } from "@/i18n/config";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipDictionary = {
  heading: string;
  description: string;
  showing: string;
  singular: string;
  plural: string;
  featured: string;
  amount: string;
  level: string;
  field: string;
  deadline: string;
  view: string;
};

type EmptyDictionary = {
  title: string;
  description: string;
};

type FilterDictionary = {
  undergraduate: string;
  postgraduate: string;
  international: string;
};

type ScholarshipListProps = {
  locale: Locale;
  scholarships: Scholarship[];
  dictionary: ScholarshipDictionary;
  emptyDictionary: EmptyDictionary;
  filterDictionary: FilterDictionary;
};

export default function ScholarshipList({
  locale,
  scholarships,
  dictionary,
  emptyDictionary,
  filterDictionary,
}: ScholarshipListProps) {
  const scholarshipLabel =
    scholarships.length === 1
      ? dictionary.singular
      : dictionary.plural;

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {dictionary.heading}
          </h2>

          <p className="mt-1 text-slate-600">
            {dictionary.description}
          </p>
        </div>

        <p className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-800">
          {dictionary.showing}{" "}
          {scholarships.length}{" "}
          {scholarshipLabel}
        </p>
      </div>

      {scholarships.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <h3 className="text-lg font-bold text-slate-900">
            {emptyDictionary.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {emptyDictionary.description}
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {scholarships.map(
            (scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                locale={locale}
                scholarship={
                  scholarship
                }
                dictionary={
                  dictionary
                }
                filterDictionary={
                  filterDictionary
                }
              />
            ),
          )}
        </div>
      )}
    </section>
  );
}