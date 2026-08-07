export type ScholarshipLevel =
  | "Undergraduate"
  | "Postgraduate"
  | "International";

export type ScholarshipLevelFilter =
  | "All"
  | ScholarshipLevel;

export type ScholarshipFundingFilter =
  | "All"
  | "Full"
  | "Partial";

  export type ScholarshipLanguage =
  | "English"
  | "German"
  | "French"
  | "Spanish"
  | "Italian"
  | "Japanese"
  | "Chinese"
  | "Korean"
  | "Hungarian"
  | "Turkish";

  export type ScholarshipCoverage =
  | "Tuition"
  | "MonthlyStipend"
  | "Airfare"
  | "Visa"
  | "HealthInsurance"
  | "Accommodation"
  | "ResearchGrant";

  export type ScholarshipContinent =
  | "Europe"
  | "Asia"
  | "NorthAmerica"
  | "SouthAmerica"
  | "Africa"
  | "Oceania"
  | "MiddleEast";

export type Scholarship = {
  id: number;
  slug: string;
  name: string;

  amount: string;
  isFullScholarship: boolean;
  coverage: ScholarshipCoverage[];

  languages: ScholarshipLanguage[];

  level: ScholarshipLevel;
  field: string;
  deadline: string;
  location: string;
  countryCode: string;
  continent: ScholarshipContinent;

  description: string;
  eligibility: string;

  link: string;

  featured: boolean;
};