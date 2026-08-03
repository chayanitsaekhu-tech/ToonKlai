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

export type Scholarship = {
  id: number;
  slug: string;
  name: string;
  amount: string;
  isFullScholarship: boolean;
  level: ScholarshipLevel;
  field: string;
  deadline: string;
  location: string;
  description: string;
  eligibility: string;
  link: string;
  featured: boolean;
};