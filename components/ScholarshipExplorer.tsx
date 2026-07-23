"use client";

import { useState } from "react";
import FilterButtons from "@/components/FilterButtons";
import ScholarshipList from "@/components/ScholarshipList";
import SearchBar from "@/components/SearchBar";
import type {
  Scholarship,
  ScholarshipLevelFilter,
} from "@/types/scholarship";

type ScholarshipExplorerProps = {
  scholarships: Scholarship[];
};

export default function ScholarshipExplorer({
  scholarships,
}: ScholarshipExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] =
    useState<ScholarshipLevelFilter>("All");

  const normalisedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(normalisedSearchTerm) ||
      scholarship.field.toLowerCase().includes(normalisedSearchTerm) ||
      scholarship.description.toLowerCase().includes(normalisedSearchTerm);

    const matchesLevel =
      selectedLevel === "All" || scholarship.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedLevel !== "All";

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
        />

        <FilterButtons
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />

        {hasActiveFilters && (
          <div>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-bold text-sky-700 underline decoration-2 underline-offset-4 transition hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>

      <ScholarshipList scholarships={filteredScholarships} />
    </div>
  );
}