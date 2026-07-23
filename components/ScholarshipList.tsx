import ScholarshipCard from "@/components/ScholarshipCard";
import type { Scholarship } from "@/types/scholarship";

type ScholarshipListProps = {
  scholarships: Scholarship[];
};

export default function ScholarshipList({
  scholarships,
}: ScholarshipListProps) {
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
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {scholarships.map((scholarship) => (
          <ScholarshipCard
            key={scholarship.id}
            scholarship={scholarship}
          />
        ))}
      </div>
    </section>
  );
}