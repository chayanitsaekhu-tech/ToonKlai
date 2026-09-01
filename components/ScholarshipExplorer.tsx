"use client";

import { useState } from "react";

import FilterButtons from "@/components/FilterButtons";
import ScholarshipList from "@/components/ScholarshipList";
import SearchBar from "@/components/SearchBar";
import FundingFilterButtons from "@/components/FundingFilterButtons";
import LanguageFilterButtons from "@/components/LanguageFilter";
import CountryFilterButtons from "@/components/CountryFilter";
import ContinentFilterButtons from "@/components/ContinentFilter";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

import type {
  Scholarship,
  ScholarshipLevelFilter,
  ScholarshipFundingFilter,
  ScholarshipLanguage,
  ScholarshipContinent,
} from "@/types/scholarship";

type ScholarshipExplorerProps = {
  locale: Locale;
  scholarships: Scholarship[];
  dictionary: Dictionary;
};

export default function ScholarshipExplorer({
  locale,
  scholarships,
  dictionary,
}: ScholarshipExplorerProps) {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedLevel,
    setSelectedLevel,
  ] =
    useState<ScholarshipLevelFilter>("All");

  const [
    selectedFunding,
    setSelectedFunding,
  ] =
    useState<ScholarshipFundingFilter>("All");

  const [
    selectedLanguages,
    setSelectedLanguages,
  ] = useState<ScholarshipLanguage[]>([]);

  const [
    selectedCountries,
    setSelectedCountries,
  ] = useState<string[]>([]);

  const [
    selectedContinents,
    setSelectedContinents,
  ] = useState<ScholarshipContinent[]>([]);

  const [showFilters, setShowFilters] =
    useState(false);

  const [sortBy, setSortBy] =
    useState<"relevance" | "new">("relevance");

  const normalisedSearchTerm =
    searchTerm.trim().toLowerCase();

  const availableLanguages =
    Array.from(
      new Set(
        scholarships.flatMap(
          (scholarship) =>
            scholarship.languages,
        ),
      ),
    );

  const availableCountries =
    Array.from(
      new Map(
        scholarships.map(
          (scholarship) => [
            scholarship.countryCode,
            {
              code: scholarship.countryCode,
              name: scholarship.location,
            },
          ],
        ),
      ).values(),
    );

  const filteredScholarships =
    scholarships.filter((scholarship) => {
      const matchesSearch =
        scholarship.name
          .toLowerCase()
          .includes(normalisedSearchTerm) ||
        scholarship.field
          .toLowerCase()
          .includes(normalisedSearchTerm) ||
        scholarship.description
          .toLowerCase()
          .includes(normalisedSearchTerm);

      const matchesLevel =
        selectedLevel === "All" ||
        scholarship.level === selectedLevel;

      const matchesFunding =
        selectedFunding === "All" ||
        (selectedFunding === "Full" &&
          scholarship.isFullScholarship) ||
        (selectedFunding === "Partial" &&
          !scholarship.isFullScholarship);

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((language) =>
          scholarship.languages.includes(language),
        );

      const matchesCountry =
        selectedCountries.length === 0 ||
        selectedCountries.includes(
          scholarship.countryCode,
        );

      const matchesContinent =
        selectedContinents.length === 0 ||
        selectedContinents.includes(
          scholarship.continent,
        );

      return (
        matchesSearch &&
        matchesLevel &&
        matchesFunding &&
        matchesLanguage &&
        matchesCountry &&
        matchesContinent
      );
    });

    const sortedScholarships = [
        ...filteredScholarships,
      ].sort((a, b) => {
        if (sortBy === "new") {
          const dateA = a.addedAt
            ? new Date(a.addedAt).getTime()
            : 0;

          const dateB = b.addedAt
            ? new Date(b.addedAt).getTime()
            : 0;

          return dateB - dateA;
        }

        const viewsA = a.views ?? 0;
        const viewsB = b.views ?? 0;

        return viewsB - viewsA;
      });

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedLevel !== "All" ||
    selectedFunding !== "All" ||
    selectedLanguages.length > 0 ||
    selectedCountries.length > 0 ||
    selectedContinents.length > 0;

  function clearFilters() {
    setSearchTerm("");
    setSelectedLevel("All");
    setSelectedFunding("All");
    setSelectedLanguages([]);
    setSelectedCountries([]);
    setSelectedContinents([]);
  }

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          label={dictionary.search.label}
          placeholder={
            dictionary.search.placeholder
          }
        />

        {/* Filter toggle */}
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
            aria-expanded={showFilters}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <span className="text-base">
              {showFilters ? "▲" : "☰"}
            </span>

            {showFilters
              ? dictionary.filters.hide
              : dictionary.filters.show
            }
          </button>

          {!showFilters &&
            hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-bold text-sky-700 underline decoration-2 underline-offset-4"
              >
                {dictionary.filters.clear}
              </button>
            )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-5 border-t border-slate-200 pt-5">
            <div className="grid gap-6">
              <div>
                <h3 className="mb-3 font-bold text-slate-900">
                  {locale === "th"
                    ? "เรียงลำดับ"
                    : "Sort by"}
                </h3>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSortBy("relevance")}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${sortBy === "relevance"
                      ? "border-sky-600 bg-sky-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {locale === "th"
                      ? "เกี่ยวข้อง"
                      : "Relevance"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSortBy("new")}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${sortBy === "new"
                      ? "border-sky-600 bg-sky-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {locale === "th"
                      ? "ทุนใหม่"
                      : "Newest"}
                  </button>
                </div>
              </div>
              {/* Study level */}
              <FilterButtons
                selectedLevel={selectedLevel}
                onLevelChange={
                  setSelectedLevel
                }
                dictionary={
                  dictionary.filters
                }
              />

              {/* Funding */}
              <FundingFilterButtons
                selectedFunding={
                  selectedFunding
                }
                onFundingChange={
                  setSelectedFunding
                }
                dictionary={
                  dictionary.funding
                }
              />

              {/* Language */}
              <LanguageFilterButtons
                selectedLanguages={
                  selectedLanguages
                }
                onLanguagesChange={
                  setSelectedLanguages
                }
                dictionary={{
                  label:
                    dictionary.filters
                      .language,
                  all:
                    dictionary.filters
                      .all,
                  languageOptions:
                    dictionary.scholarships
                      .languageOptions,
                }}
                availableLanguages={
                  availableLanguages
                }
              />

              {/* Country */}
              <CountryFilterButtons
                selectedCountries={
                  selectedCountries
                }
                onCountriesChange={
                  setSelectedCountries
                }
                dictionary={{
                  label:
                    dictionary.filters.country,
                  all:
                    dictionary.filters.all,
                }}
                countries={
                  availableCountries
                }
              />

              {/* Continent */}
              <ContinentFilterButtons
                selectedContinents={
                  selectedContinents
                }
                onContinentsChange={
                  setSelectedContinents
                }
                dictionary={{
                  label:
                    dictionary.filters
                      .continent,
                  all:
                    dictionary.filters
                      .all,
                  continentOptions:
                    dictionary.filters
                      .continentOptions,
                }}
              />

              {/* Clear */}
              {hasActiveFilters && (
                <div>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm font-bold text-sky-700 underline decoration-2 underline-offset-4"
                  >
                    {
                      dictionary.filters
                        .clear
                    }
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <ScholarshipList
        locale={locale}
        scholarships={
          sortedScholarships
        }
        dictionary={
          dictionary.scholarships
        }
        emptyDictionary={
          dictionary.empty
        }
        filterDictionary={
          dictionary.filters
        }
      />
    </div>
  );
}

