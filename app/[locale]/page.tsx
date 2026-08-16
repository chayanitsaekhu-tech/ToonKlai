import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";
import Footer from "@/components/Footer";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getScholarships } from "@/i18n/scholarships";


export default async function HomePage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const scholarships = getScholarships(locale);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-10">
      <Header dictionary={dictionary.header} />

      <div className="mt-10">
        <ScholarshipExplorer
          locale={locale}
          scholarships={scholarships}
          dictionary={dictionary}
        />
      </div>

      <Footer text={dictionary.footer.text} />
    </main>
  );
}