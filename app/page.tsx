import Header from "@/components/Header";
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

        <div className="mt-6 grid gap-5">
          {scholarships.map((scholarship) => (
            <article
              key={scholarship.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {scholarship.name}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {scholarship.description}
              </p>

              <div className="mt-4 space-y-1 text-slate-700">
                <p>
                  <strong>Amount:</strong> {scholarship.amount}
                </p>

                <p>
                  <strong>Level:</strong> {scholarship.level}
                </p>

                <p>
                  <strong>Deadline:</strong> {scholarship.deadline}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}