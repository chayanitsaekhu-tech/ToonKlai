import Header from "@/components/Header";
import ScholarshipCard from "@/components/ScholarshipCard";
import scholarshipsData from "@/data/scholarships.json";
import type { Scholarship } from "@/types/scholarship";

export default function HomePage() {
  const scholarships = scholarshipsData as Scholarship[];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-10">
      <Header />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">
          Available Scholarships
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
            />
          ))}
        </div>
      </section>
    </main>
  );
}