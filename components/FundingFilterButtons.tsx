import type {
  ScholarshipFundingFilter,
} from "@/types/scholarship";

type FilterDictionary = {
  label: string;
  all: string;
  full: string;
  partial: string;
};

type FundingFilterButtonsProps = {
  selectedFunding: ScholarshipFundingFilter;
  onFundingChange: (
    funding: ScholarshipFundingFilter,
  ) => void;
  dictionary: FilterDictionary;
};

const fundingOptions: ScholarshipFundingFilter[] = [
  "All",
  "Full",
  "Partial",
];

export default function FundingFilterButtons({
  selectedFunding,
  onFundingChange,
  dictionary,
}: FundingFilterButtonsProps) {
  function getLabel(
    funding: ScholarshipFundingFilter,
  ) {
    switch (funding) {
      case "Full":
        return dictionary.full;

      case "Partial":
        return dictionary.partial;

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
        {fundingOptions.map((funding) => {
          const isSelected =
            selectedFunding === funding;

          return (
            <button
              key={funding}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                onFundingChange(funding)
              }
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isSelected
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {getLabel(funding)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}