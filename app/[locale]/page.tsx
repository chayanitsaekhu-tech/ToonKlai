import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";
import scholarshipsData from "@/data/scholarships.json";
import type { Scholarship } from "@/types/scholarship";

export default function HomePage() {
  const scholarships = scholarshipsData as Scholarship[];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-10">
      <Header />

      <div className="mt-10">
        <ScholarshipExplorer scholarships={scholarships} />
      </div>

      <Footer />
    </main>
  );
}