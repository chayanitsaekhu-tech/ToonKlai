import Header from "@/components/Header";
import ScholarshipList from "@/components/ScholarshipList";
import scholarshipsData from "@/data/scholarships.json";
import type { Scholarship } from "@/types/scholarship";

export default function HomePage() {
  const scholarships = scholarshipsData as Scholarship[];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-10">
      <Header />

      <div className="mt-10">
        <ScholarshipList scholarships={scholarships} />
      </div>
    </main>
  );
}