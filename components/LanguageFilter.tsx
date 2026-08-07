import type {
  ScholarshipLanguage,
  ScholarshipLanguageFilter,
} from "@/types/scholarship";

type FilterDictionary = {
  label: string;
  all: string;
  languageOptions: Record<
    ScholarshipLanguage,
    string
  >;
};

type LanguageFilterButtonsProps = {
  selectedLanguage: ScholarshipLanguageFilter;
  onLanguageChange: (
    language: ScholarshipLanguageFilter,
  ) => void;
  dictionary: FilterDictionary;
  availableLanguages: ScholarshipLanguage[];
};

export default function LanguageFilterButtons({
  selectedLanguage,
  onLanguageChange,
  dictionary,
  availableLanguages,
}: LanguageFilterButtonsProps) {
  const languages: ScholarshipLanguageFilter[] = [
    "All",
    ...availableLanguages,
  ];

  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">
        {dictionary.label}
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {languages.map((language) => {
          const isSelected =
            selectedLanguage === language;

          const label =
            language === "All"
              ? dictionary.all
              : dictionary.languageOptions[language];

          return (
            <button
              key={language}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                onLanguageChange(language)
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