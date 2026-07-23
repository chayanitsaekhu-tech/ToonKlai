export type ScholarshipLevel =
  | "Undergraduate"
  | "Postgraduate"
  | "International";

export type ScholarshipLevelFilter = "All" | ScholarshipLevel;

export type Scholarship = {
  id: number;
  name: string;
  amount: string;
  level: ScholarshipLevel;
  field: string;
  deadline: string;
  location: string;
  description: string;
  eligibility: string;
  link: string;
  featured: boolean;
};