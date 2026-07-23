import Link from "next/link";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipCardProps = {
  scholarship: Scholarship;
};

export default function ScholarshipCard({
  scholarship,
}: ScholarshipCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-slate-900">
          {scholarship.name}
        </h3>

        {scholarship.featured && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            Featured
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {scholarship.description}
      </p>

      <dl className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-900">Amount</dt>
          <dd className="mt-1">{scholarship.amount}</dd>
        </div>

        <div>
          <dt className="font-semibold text-slate-900">Level</dt>
          <dd className="mt-1">{scholarship.level}</dd>
        </div>

        <div>
          <dt className="font-semibold text-slate-900">Field</dt>
          <dd className="mt-1">{scholarship.field}</dd>
        </div>

        <div>
          <dt className="font-semibold text-slate-900">Deadline</dt>
          <dd className="mt-1">{scholarship.deadline}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <Link
          href={`/scholarships/${scholarship.id}`}
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          View scholarship
        </Link>
      </div>
    </article>
  );
}