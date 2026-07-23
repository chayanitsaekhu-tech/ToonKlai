import ScholarshipCard from "@/components/ScholarshipCard";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipListProps = {
  scholarships: Scholarship[];
};

export default function ScholarshipList({
  scholarships,
}: ScholarshipListProps) {
  const scholarshipLabel =
    scholarships.length === 1 ? "scholarship" : "scholarships";

  return (
    <section aria-labelledby="scholarships-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="scholarships-heading"
            className="text-2xl font-bold text-slate-900"
          >
            Available Scholarships
          </h2>

          <p className="mt-1 text-slate-600">
            Explore the opportunities currently listed.
          </p>
        </div>

        <p
          className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-800"
          aria-live="polite"
        >
          Showing {scholarships.length} {scholarshipLabel}
        </p>
      </div>

      {scholarships.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <h3 className="text-lg font-bold text-slate-900">
            No scholarships found
          </h3>

          <p className="mt-2 text-slate-600">
            Try changing your search term or selecting a different study level.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
            />
          ))}
        </div>
      )}
    </section>
  );
}