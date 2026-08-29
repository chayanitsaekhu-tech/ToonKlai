import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title:
      locale === "th"
        ? "ติดต่อเรา | Toonnok"
        : "Contact Us | Toonnok",

    description:
      locale === "th"
        ? "ติดต่อ Toonnok.com เว็บหาทุนเรียนต่างประเทศ"
        : "Contact Toonnok.com, a scholarship website for studying abroad.",
  };
}

export default async function ContactPage({
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

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 py-12">

      <Link
        href={`/${locale}`}
        className="inline-flex font-semibold text-sky-700 hover:text-sky-900"
      >
        ← {dictionary.scholarships.back}
      </Link>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
            Toonnok.com
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {locale === "th"
              ? "ติดต่อเรา"
              : "Contact Us"}
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            {locale === "th"
              ? "หากมีคำถาม ข้อเสนอแนะ หรือต้องการติดต่อเกี่ยวกับ Toonnok.com สามารถติดต่อเราได้ผ่าน Facebook"
              : "If you have any questions, suggestions, or would like to contact Toonnok.com, you can reach us through Facebook."}
          </p>

        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">

          <p className="text-sm font-semibold text-slate-500">
            Facebook
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=61590534505753"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-lg font-bold text-sky-700 hover:text-sky-900 hover:underline"
          >
            Toonnok.com เว็บหาทุนเรียนต่างประเทศ
          </a>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            {locale === "th"
              ? "กดที่ชื่อ Facebook ด้านบนเพื่อเปิดหน้า Facebook ของเรา หากไม่สามารถเปิดลิงก์ได้ สามารถค้นหาชื่อ “Toonnok.com เว็บหาทุนเรียนต่างประเทศ” บน Facebook ได้"
              : 'Click the Facebook name above to visit our page. If the link does not work, search for "Toonnok.com เว็บหาทุนเรียนต่างประเทศ" on Facebook.'}
          </p>

        </div>

      </section>
    </main>
  );
}

