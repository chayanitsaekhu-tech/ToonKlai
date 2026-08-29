"use client";

import { useState } from "react";

type Country = {
  code: string;
  name: string;
};

type CountryFilterDictionary = {
  label: string;
  all: string;
};

type CountryFilterProps = {
  selectedCountries: string[];
  onCountriesChange: (
    countries: string[],
  ) => void;
  dictionary: CountryFilterDictionary;
  countries: Country[];
};

export default function CountryFilterButtons({
  selectedCountries,
  onCountriesChange,
  dictionary,
  countries,
}: CountryFilterProps) {
  const [showOther, setShowOther] =
    useState(false);

  const mainCountryCodes = [
    "GB",
    "JP",
    "KR",
    "US",
    "AU",
    "DE",
    "FR",
    "CA",
    "NZ",
    "SG",
  ];

  const visibleMainCountries =
    mainCountryCodes
      .map((code) =>
        countries.find(
          (country) =>
            country.code === code,
        ),
      )
      .filter(
        (country): country is Country =>
          country !== undefined,
      );

  const otherCountries =
    countries.filter(
      (country) =>
        !mainCountryCodes.includes(
          country.code,
        ),
    );

  function toggleCountry(code: string) {
    if (selectedCountries.includes(code)) {
      onCountriesChange(
        selectedCountries.filter(
          (country) =>
            country !== code,
        ),
      );
    } else {
      onCountriesChange([
        ...selectedCountries,
        code,
      ]);
    }
  }

  function clearCountries() {
    onCountriesChange([]);
  }

  return (
    <div>
      <h3 className="mb-3 font-bold text-slate-900">
        {dictionary.label}
      </h3>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={clearCountries}
          className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
            selectedCountries.length === 0
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {dictionary.all}
        </button>

        {visibleMainCountries.map(
          (country) => {
            const selected =
              selectedCountries.includes(
                country.code,
              );

            return (
              <button
                key={country.code}
                type="button"
                onClick={() =>
                  toggleCountry(
                    country.code,
                  )
                }
                className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-sky-600 bg-sky-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {selected && "✓ "}
                {country.name}
              </button>
            );
          },
        )}

        {otherCountries.length > 0 && (
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
        otherCountries.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
            {otherCountries.map(
              (country) => {
                const selected =
                  selectedCountries.includes(
                    country.code,
                  );

                return (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() =>
                      toggleCountry(
                        country.code,
                      )
                    }
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      selected
                        ? "border-sky-600 bg-sky-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:bg-white"
                    }`}
                  >
                    {selected && "✓ "}
                    {country.name}
                  </button>
                );
              },
            )}
          </div>
        )}
    </div>
  );
}

