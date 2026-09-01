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

export type ScholarshipLanguageFilter =
  | "All"
  | ScholarshipLanguage;

export type ScholarshipContinentFilter =
  | "All"
  | ScholarshipContinent;

export type ScholarshipCountryFilter =
  | "All"
  | string;

export type ScholarshipLanguage =
  | "English"
  | "Japanese"
  | "German"
  | "French"
  | "Korean"
  | "Chinese"
  | "Spanish"
  | "Italian"
  | "Portuguese"
  | "Dutch"
  | "Swedish"
  | "Danish"
  | "Finnish"
  | "Norwegian"
  | "Polish"
  | "Turkish"
  | "Thai"
  | "Indonesian"
  | "Malay"
  | "Arabic";

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

  addedAt?: string;
  views?: number;
};