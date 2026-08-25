"use client";

import type {
  ScholarshipLanguage,
} from "@/types/scholarship";

type LanguageFilterDictionary = {
  label: string;
  all: string;
  languageOptions: Record<
    ScholarshipLanguage,
    string
  >;
};

type LanguageFilterProps = {
  selectedLanguages: ScholarshipLanguage[];
  onLanguagesChange: (
    languages: ScholarshipLanguage[],
  ) => void;
  dictionary: LanguageFilterDictionary;
  availableLanguages: ScholarshipLanguage[];
};

export default function LanguageFilterButtons({
  selectedLanguages,
  onLanguagesChange,
  dictionary,
  availableLanguages,
}: LanguageFilterProps) {
  function toggleLanguage(
    language: ScholarshipLanguage,
  ) {
    if (
      selectedLanguages.includes(language)
    ) {
      onLanguagesChange(
        selectedLanguages.filter(
          (item) => item !== language,
        ),
      );
    } else {
      onLanguagesChange([
        ...selectedLanguages,
        language,
      ]);
    }
  }

  function clearLanguages() {
    onLanguagesChange([]);
  }

  return (
    <div>
      <h3 className="mb-3 font-bold text-slate-900">
        {dictionary.label}
      </h3>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={clearLanguages}
          className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
            selectedLanguages.length === 0
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {dictionary.all}
        </button>

        {availableLanguages.map(
          (language) => {
            const selected =
              selectedLanguages.includes(
                language,
              );

            return (
              <button
                key={language}
                type="button"
                onClick={() =>
                  toggleLanguage(language)
                }
                className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-sky-600 bg-sky-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {selected && "✓ "}
                {
                  dictionary.languageOptions[
                    language
                  ]
                }
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}