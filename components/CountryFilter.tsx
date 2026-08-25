"use client";

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
  function toggleCountry(code: string) {
    if (selectedCountries.includes(code)) {
      onCountriesChange(
        selectedCountries.filter(
          (country) => country !== code,
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
        {/* All */}
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

        {/* Countries */}
        {countries.map((country) => {
          const selected =
            selectedCountries.includes(
              country.code,
            );

          return (
            <button
              key={country.code}
              type="button"
              onClick={() =>
                toggleCountry(country.code)
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
        })}
      </div>
    </div>
  );
}