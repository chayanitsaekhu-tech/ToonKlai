"use client";

import { useEffect, useState } from "react";
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
  funding: string;
  fullScholarship: string;
  partialScholarship: string;
  level: string;
  field: string;
  deadline: string;
  view: string;
  language: string;
  languageOptions: Record<string, string>;
  location: string;
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

const SCHOLARSHIPS_PER_PAGE = 12;

export default function ScholarshipList({
  locale,
  scholarships,
  dictionary,
  emptyDictionary,
  filterDictionary,
}: ScholarshipListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    scholarships.length / SCHOLARSHIPS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [scholarships]);

  const startIndex =
    (currentPage - 1) * SCHOLARSHIPS_PER_PAGE;

  const endIndex =
    startIndex + SCHOLARSHIPS_PER_PAGE;

  const currentScholarships =
    scholarships.slice(startIndex, endIndex);

  const scholarshipLabel =
    scholarships.length === 1
      ? dictionary.singular
      : dictionary.plural;

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
          {dictionary.showing} {scholarships.length}{" "}
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
        <>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {currentScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                locale={locale}
                scholarship={scholarship}
                dictionary={dictionary}
                filterDictionary={filterDictionary}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {locale === "th" ? "← ก่อนหน้า" : "← Previous"}
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`min-w-10 rounded-lg px-3 py-2 text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-sky-600 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {locale === "th" ? "ถัดไป →" : "Next →"}
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <p className="mt-4 text-center text-sm text-slate-500">
              {locale === "th"
                ? `หน้า ${currentPage} จาก ${totalPages}`
                : `Page ${currentPage} of ${totalPages}`}
            </p>
          )}
        </>
      )}
    </section>
  );
}