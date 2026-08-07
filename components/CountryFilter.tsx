type CountryOption = {
  code: string;
  name: string;
};

type FilterDictionary = {
  label: string;
  all: string;
};

type CountryFilterButtonsProps = {
  selectedCountry: string;
  onCountryChange: (
    country: string,
  ) => void;
  dictionary: FilterDictionary;
  countries: CountryOption[];
};

export default function CountryFilterButtons({
  selectedCountry,
  onCountryChange,
  dictionary,
  countries,
}: CountryFilterButtonsProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-900">
        {dictionary.label}
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={
            selectedCountry === "All"
          }
          onClick={() =>
            onCountryChange("All")
          }
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            selectedCountry === "All"
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          {dictionary.all}
        </button>

        {countries.map((country) => {
          const isSelected =
            selectedCountry === country.code;

          return (
            <button
              key={country.code}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                onCountryChange(country.code)
              }
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {country.name}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}