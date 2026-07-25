import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import ScholarshipLanguageSwitcher from "@/components/ScholarshipLanguageSwitcher";

import {
  isLocale,
  locales,
  routeSegments,
} from "@/i18n/config";

import {
  getDictionary,
} from "@/i18n/dictionaries";

import {
  getScholarshipById,
  getScholarshipBySlug,
  getScholarships,
} from "@/i18n/scholarships";

import {
  getHomePath,
  getScholarshipPath,
} from "@/i18n/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const scholarships =
      getScholarships(locale);

    return scholarships.map(
      (scholarship) => ({
        locale,
        scholarshipsSegment:
          routeSegments[locale]
            .scholarships,
        slug: scholarship.slug,
      }),
    );
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
    scholarshipsSegment: string;
    slug: string;
  }>;
}): Promise<Metadata> {
  const {
    locale,
    scholarshipsSegment,
    slug,
  } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (
    scholarshipsSegment !==
    routeSegments[locale].scholarships
  ) {
    return {};
  }

  const scholarship =
    getScholarshipBySlug(
      locale,
      slug,
    );

  if (!scholarship) {
    return {};
  }

  const englishScholarship =
  getScholarshipById(
    "en",
    scholarship.id,
  );

const thaiScholarship =
  getScholarshipById(
    "th",
    scholarship.id,
  );

return {
  title: scholarship.name,

  description:
    scholarship.description,

  alternates: {
    languages: {
      en: englishScholarship
        ? getScholarshipPath(
            "en",
            englishScholarship,
          )
        : undefined,

      th: thaiScholarship
        ? getScholarshipPath(
            "th",
            thaiScholarship,
          )
        : undefined,
    },
  },
};

}

export default async function ScholarshipPage({
  params,
}: {
  params: Promise<{
    locale: string;
    scholarshipsSegment: string;
    slug: string;
  }>;
}) {
  const {
    locale,
    scholarshipsSegment,
    slug,
  } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const expectedSegment =
    routeSegments[locale]
      .scholarships;

  if (
    scholarshipsSegment !==
    expectedSegment
  ) {
    notFound();
  }

  const scholarship =
    getScholarshipBySlug(
      locale,
      slug,
    );

  if (!scholarship) {
    notFound();
  }

  const dictionary =
    getDictionary(locale);

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-10">
      <Link
        href={getHomePath(locale)}
        className="inline-flex font-semibold text-sky-700 hover:text-sky-900"
      >
        ← {dictionary.scholarships.back}
      </Link>

    <div className="mb-6 flex justify-end">
        <ScholarshipLanguageSwitcher
        locale={locale}
        scholarshipId={
        scholarship.id
        }
        />
    </div>

      <article className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <header className="bg-slate-900 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                {
                  dictionary
                    .scholarships
                    .opportunity
                }
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {scholarship.name}
              </h1>
            </div>

            {scholarship.featured && (
              <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-bold text-amber-950">
                {
                  dictionary
                    .scholarships
                    .featured
                }
              </span>
            )}
          </div>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {scholarship.description}
          </p>
        </header>

        <div className="p-6 sm:p-10">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                {
                  dictionary
                    .scholarships
                    .amount
                }
              </dt>

              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.amount}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                {
                  dictionary
                    .scholarships
                    .level
                }
              </dt>

              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.level}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                {
                  dictionary
                    .scholarships
                    .field
                }
              </dt>

              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.field}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                {
                  dictionary
                    .scholarships
                    .deadline
                }
              </dt>

              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.deadline}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
              <dt className="text-sm font-semibold text-slate-500">
                {
                  dictionary
                    .scholarships
                    .location
                }
              </dt>

              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.location}
              </dd>
            </div>
          </dl>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {
                dictionary
                  .scholarships
                  .eligibility
              }
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {scholarship.eligibility}
            </p>
          </section>

          <div className="mt-8 border-t border-slate-200 pt-8">
            <a
              href={scholarship.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg bg-sky-600 px-5 py-3 font-bold text-white hover:bg-sky-700"
            >
              {
                dictionary
                  .scholarships
                  .visitWebsite
              }
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}