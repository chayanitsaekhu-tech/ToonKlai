import Link from "next/link";
import { notFound } from "next/navigation";
import scholarshipsData from "@/data/scholarships.json";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const scholarships = scholarshipsData as Scholarship[];

export function generateStaticParams() {
  return scholarships.map((scholarship) => ({
    id: scholarship.id.toString(),
  }));
}

export default async function ScholarshipPage({
  params,
}: ScholarshipPageProps) {
  const { id } = await params;

  const scholarship = scholarships.find(
    (item) => item.id.toString() === id,
  );

  if (!scholarship) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-10">
      <Link
        href="/"
        className="inline-flex items-center font-semibold text-sky-700 transition hover:text-sky-900"
      >
        ← Back to all scholarships
      </Link>

      <article className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <header className="bg-slate-900 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Scholarship opportunity
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {scholarship.name}
              </h1>
            </div>

            {scholarship.featured && (
              <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-bold text-amber-950">
                Featured
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
                Amount
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.amount}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                Study level
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.level}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                Subject
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.field}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <dt className="text-sm font-semibold text-slate-500">
                Deadline
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.deadline}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2">
              <dt className="text-sm font-semibold text-slate-500">
                Location
              </dt>
              <dd className="mt-1 text-lg font-bold text-slate-900">
                {scholarship.location}
              </dd>
            </div>
          </dl>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Eligibility
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
              className="inline-flex rounded-lg bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Visit scholarship website
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}