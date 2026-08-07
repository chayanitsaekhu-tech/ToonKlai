import type {
  ScholarshipContinent,
  ScholarshipContinentFilter,
} from "@/types/scholarship";

type FilterDictionary = {
  label: string;
  all: string;
  continentOptions: Record<
    ScholarshipContinent,
    string
  >;
};

type ContinentFilterButtonsProps = {
  selectedContinent: ScholarshipContinentFilter;
  onContinentChange: (
    continent: ScholarshipContinentFilter,
  ) => void;
  dictionary: FilterDictionary;
};

const continents: ScholarshipContinentFilter[] = [
  "All",
  "Europe",
  "Asia",
  "NorthAmerica",
  "SouthAmerica",
  "Africa",
  "Oceania",
  "MiddleEast",
];

export default function ContinentFilterButtons({
  selectedContinent,
  onContinentChange,
  dictionary,
}: ContinentFilterButtonsProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">
        {dictionary.label}
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {continents.map((continent) => {
          const isSelected =
            selectedContinent === continent;

          const label =
            continent === "All"
              ? dictionary.all
              : dictionary.continentOptions[
                  continent
                ];

          return (
            <button
              key={continent}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                onContinentChange(continent)
              }
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}