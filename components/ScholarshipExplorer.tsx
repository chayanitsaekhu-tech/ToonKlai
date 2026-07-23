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
      </div>

      <ScholarshipList scholarships={filteredScholarships} />
    </div>
  );
}