"use client";

import type {
  ScholarshipContinent,
} from "@/types/scholarship";

type ContinentFilterDictionary = {
  label: string;
  all: string;
  continentOptions: Record<
    ScholarshipContinent,
    string
  >;
};

type ContinentFilterProps = {
  selectedContinents: ScholarshipContinent[];
  onContinentsChange: (
    continents: ScholarshipContinent[],
  ) => void;
  dictionary: ContinentFilterDictionary;
};

const continents: ScholarshipContinent[] = [
  "Europe",
  "Asia",
  "NorthAmerica",
  "SouthAmerica",
  "Africa",
  "Oceania",
  "MiddleEast",
];

export default function ContinentFilterButtons({
  selectedContinents,
  onContinentsChange,
  dictionary,
}: ContinentFilterProps) {
  function toggleContinent(
    continent: ScholarshipContinent,
  ) {
    if (
      selectedContinents.includes(continent)
    ) {
      onContinentsChange(
        selectedContinents.filter(
          (item) => item !== continent,
        ),
      );
    } else {
      onContinentsChange([
        ...selectedContinents,
        continent,
      ]);
    }
  }

  function clearContinents() {
    onContinentsChange([]);
  }

  return (
    <div>
      <h3 className="mb-3 font-bold text-slate-900">
        {dictionary.label}
      </h3>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={clearContinents}
          className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
            selectedContinents.length === 0
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {dictionary.all}
        </button>

        {continents.map((continent) => {
          const selected =
            selectedContinents.includes(
              continent,
            );

          return (
            <button
              key={continent}
              type="button"
              onClick={() =>
                toggleContinent(continent)
              }
              className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                selected
                  ? "border-sky-600 bg-sky-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {selected && "✓ "}
              {
                dictionary
                  .continentOptions[
                    continent
                  ]
              }
            </button>
          );
        })}
      </div>
    </div>
  );
}