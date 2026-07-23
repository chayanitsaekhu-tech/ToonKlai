"use client";

import { useState } from "react";
import ScholarshipList from "@/components/ScholarshipList";
import SearchBar from "@/components/SearchBar";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipExplorerProps = {
  scholarships: Scholarship[];
};

export default function ScholarshipExplorer({
  scholarships,
}: ScholarshipExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const normalisedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredScholarships = scholarships.filter((scholarship) => {
    return (
      scholarship.name.toLowerCase().includes(normalisedSearchTerm) ||
      scholarship.field.toLowerCase().includes(normalisedSearchTerm) ||
      scholarship.description.toLowerCase().includes(normalisedSearchTerm)
    );
  });

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      <ScholarshipList scholarships={filteredScholarships} />
    </div>
  );
}