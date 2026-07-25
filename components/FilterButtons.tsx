import type {
  ScholarshipLevelFilter,
} from "@/types/scholarship";

type FilterDictionary = {
  label: string;
  all: string;
  undergraduate: string;
  postgraduate: string;
  international: string;
};

type FilterButtonsProps = {
  selectedLevel: ScholarshipLevelFilter;
  onLevelChange: (
    level: ScholarshipLevelFilter,
  ) => void;
  dictionary: FilterDictionary;
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
  dictionary,
}: FilterButtonsProps) {
  function getLabel(
    level: ScholarshipLevelFilter,
  ) {
    switch (level) {
      case "Undergraduate":
        return dictionary.undergraduate;

      case "Postgraduate":
        return dictionary.postgraduate;

      case "International":
        return dictionary.international;

      default:
        return dictionary.all;
    }
  }

  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">
        {dictionary.label}
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {levels.map((level) => {
          const isSelected =
            selectedLevel === level;

          return (
            <button
              key={level}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                onLevelChange(level)
              }
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {getLabel(level)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}