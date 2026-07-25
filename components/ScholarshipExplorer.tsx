"use client";

import { useState } from "react";

import FilterButtons from "@/components/FilterButtons";
import ScholarshipList from "@/components/ScholarshipList";
import SearchBar from "@/components/SearchBar";

import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

import type {
  Scholarship,
  ScholarshipLevelFilter,
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

  const normalisedSearchTerm =
    searchTerm.trim().toLowerCase();

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

      return (
        matchesSearch &&
        matchesLevel
      );
    });

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedLevel !== "All";

  function clearFilters() {
    setSearchTerm("");
    setSelectedLevel("All");
  }

  return (
    <div>
      <div className="mb-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          label={dictionary.search.label}
          placeholder={
            dictionary.search.placeholder
          }
        />

        <FilterButtons
          selectedLevel={selectedLevel}
          onLevelChange={
            setSelectedLevel
          }
          dictionary={
            dictionary.filters
          }
        />

        {hasActiveFilters && (
          <div>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-bold text-sky-700 underline decoration-2 underline-offset-4"
            >
              {dictionary.filters.clear}
            </button>
          </div>
        )}
      </div>

      <ScholarshipList
        locale={locale}
        scholarships={
          filteredScholarships
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