"use client";

import { useState } from "react";

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
  const [showOther, setShowOther] =
    useState(false);

  const mainLanguages: ScholarshipLanguage[] = [
    "English",
    "Japanese",
    "Chinese",
    "Korean",
    "German",
  ];

  const visibleMainLanguages =
    mainLanguages.filter((language) =>
      availableLanguages.includes(language),
    );

  const otherLanguages =
    availableLanguages.filter(
      (language) =>
        !mainLanguages.includes(language),
    );

  function toggleLanguage(
    language: ScholarshipLanguage,
  ) {
    if (selectedLanguages.includes(language)) {
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

        {visibleMainLanguages.map(
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

        {otherLanguages.length > 0 && (
          <button
            type="button"
            onClick={() =>
              setShowOther(!showOther)
            }
            className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
              showOther
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {showOther
              ? "Other ▲"
              : "Other ▼"}
          </button>
        )}
      </div>

      {showOther &&
        otherLanguages.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
            {otherLanguages.map(
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
                      toggleLanguage(
                        language,
                      )
                    }
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      selected
                        ? "border-sky-600 bg-sky-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:bg-white"
                    }`}
                  >
                    {selected && "✓ "}
                    {
                      dictionary
                        .languageOptions[
                        language
                      ]
                    }
                  </button>
                );
              },
            )}
          </div>
        )}
    </div>
  );
}

