import type { ScholarshipLevelFilter } from "@/types/scholarship";

type FilterButtonsProps = {
  selectedLevel: ScholarshipLevelFilter;
  onLevelChange: (level: ScholarshipLevelFilter) => void;
};

const levels: ScholarshipLevelFilter[] = [
  "All",
  "Undergraduate",
  "Postgraduate",
  "International",
];

export default function FilterButtons({
  selectedLevel,
  onLevelChange,
}: FilterButtonsProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">
        Filter by study level
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {levels.map((level) => {
          const isSelected = selectedLevel === level;

          return (
            <button
              key={level}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onLevelChange(level)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-500 hover:bg-slate-50"
              }`}
            >
              {level}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}