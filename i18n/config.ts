export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  th: "ไทย",
};

export const routeSegments = {
  en: {
    scholarships: "scholarships",
  },

  th: {
    scholarships: "ทุนการศึกษา",
  },
} satisfies Record<
  Locale,
  {
    scholarships: string;
  }
>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
Now we can get a translated route like this:

routeSegments.en.scholarships
which returns:

scholarships
And:

routeSegments.th.scholarships
returns:

ทุนการศึกษา