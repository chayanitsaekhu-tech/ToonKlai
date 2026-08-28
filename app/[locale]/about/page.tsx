import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

  return {
    title:
      locale === "th"
        ? "เกี่ยวกับ Toonnok | เว็บรวมทุนเรียนต่อต่างประเทศ"
        : "About Toonnok | Study Abroad Scholarships",
    description:
      locale === "th"
        ? "Toonnok คือเว็บไซต์รวบรวมทุนการศึกษาสำหรับนักเรียนที่ต้องการเรียนต่อต่างประเทศ ทุนเต็มจำนวน ทุนรัฐบาล และทุนสำหรับปริญญาตรี ปริญญาโท และปริญญาเอก"
        : "Toonnok is a scholarship search website for students looking for study abroad scholarships, fully funded scholarships, government scholarships and international study opportunities.",
  };
}

export default async function AboutPage({
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

  const isThai = locale === "th";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-sky-600">
              Toonnok
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {isThai
                ? "เว็บรวมทุนเรียนต่อต่างประเทศสำหรับนักเรียน"
                : "Study Abroad Scholarships for Students"}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isThai
                ? "ค้นหาทุนการศึกษาจากหลากหลายประเทศ ทั้งทุนเต็มจำนวน ทุนบางส่วน และทุนรัฐบาล พร้อมข้อมูลสำคัญที่ช่วยให้คุณเตรียมตัวสมัครทุนได้ง่ายขึ้น"
                : "Discover scholarships from around the world, including fully funded, partially funded and government scholarships, with useful information to help you prepare your application."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}`}
                className="rounded-lg bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
              >
                {isThai
                  ? "ค้นหาทุนการศึกษา"
                  : "Find Scholarships"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              {isThai
                ? "Toonnok คืออะไร?"
                : "What is Toonnok?"}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {isThai
                ? "Toonnok คือเว็บไซต์ที่ช่วยให้นักเรียนและนักศึกษาค้นหาทุนการศึกษาและโอกาสเรียนต่อต่างประเทศได้ง่ายขึ้น เรารวบรวมข้อมูลทุนจากหลายประเทศและจัดหมวดหมู่ให้ค้นหาได้สะดวก"
                : "Toonnok is a website designed to make it easier for students to discover scholarships and study opportunities abroad. We collect scholarship opportunities from different countries and organise them into an easy-to-search platform."}
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              {isThai
                ? "คุณสามารถค้นหาทุนตามระดับการศึกษา ประเภททุน ภาษา ประเทศ และทวีป พร้อมดูรายละเอียดเกี่ยวกับคุณสมบัติ เงินสนับสนุน วันปิดรับสมัคร และเว็บไซต์ทางการของทุน"
                : "You can search for scholarships by study level, funding type, language, country and continent, while viewing important details such as eligibility, funding, deadlines and official scholarship websites."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              {isThai
                ? "ทุนที่คุณสามารถค้นหาได้"
                : "Scholarships you can discover"}
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                isThai
                  ? "ทุนเรียนต่อต่างประเทศ"
                  : "Study abroad scholarships",
                isThai
                  ? "ทุนเต็มจำนวน"
                  : "Fully funded scholarships",
                isThai
                  ? "ทุนบางส่วน"
                  : "Partially funded scholarships",
                isThai
                  ? "ทุนรัฐบาล"
                  : "Government scholarships",
                isThai
                  ? "ทุนปริญญาตรี ปริญญาโท และปริญญาเอก"
                  : "Undergraduate, Master's and PhD scholarships",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="font-bold text-emerald-600">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Toonnok */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              {isThai
                ? "ทำไมต้องค้นหาทุนกับ Toonnok?"
                : "Why use Toonnok?"}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {isThai
                ? "เราอยากทำให้การค้นหาทุนเรียนต่อต่างประเทศเป็นเรื่องง่าย ไม่ว่าคุณจะเพิ่งเริ่มหาทุนหรือกำลังเตรียมตัวสมัคร"
                : "Our goal is to make finding study abroad scholarships easier, whether you are just starting your search or preparing an application."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-2xl">🎓</div>

              <h3 className="mt-4 font-bold text-slate-900">
                {isThai
                  ? "ทุนหลากหลายระดับ"
                  : "Multiple Study Levels"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isThai
                  ? "ค้นหาทุนตั้งแต่ปริญญาตรีถึงปริญญาเอก"
                  : "Find scholarships from undergraduate to PhD level."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-2xl">🌍</div>

              <h3 className="mt-4 font-bold text-slate-900">
                {isThai
                  ? "หลายประเทศ"
                  : "Many Countries"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isThai
                  ? "ค้นหาโอกาสเรียนต่อจากประเทศต่าง ๆ ทั่วโลก"
                  : "Explore study opportunities across countries around the world."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-2xl">💰</div>

              <h3 className="mt-4 font-bold text-slate-900">
                {isThai
                  ? "ทุนเต็มจำนวน"
                  : "Fully Funded"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isThai
                  ? "ค้นหาทุนที่ช่วยลดภาระค่าใช้จ่ายในการเรียน"
                  : "Find opportunities that can significantly reduce study costs."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-2xl">🔎</div>

              <h3 className="mt-4 font-bold text-slate-900">
                {isThai
                  ? "ค้นหาได้ง่าย"
                  : "Easy to Search"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isThai
                  ? "กรองทุนตามข้อมูลที่เหมาะกับคุณ"
                  : "Filter scholarships based on what matters to you."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS / Preparation */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              {isThai
                ? "เตรียมตัวให้พร้อมก่อนสมัครทุน"
                : "Prepare before applying"}
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              {isThai
                ? "ทุนการศึกษาหลายแห่งมีข้อกำหนดด้านภาษาอังกฤษ และคะแนน IELTS ที่ดีสามารถช่วยให้คุณมีคุณสมบัติตรงตามเกณฑ์ของทุนและมหาวิทยาลัยมากขึ้น การเตรียมภาษาอังกฤษล่วงหน้าจึงเป็นส่วนสำคัญของการวางแผนสมัครทุน"
                : "Many scholarships and universities have English language requirements. A strong IELTS score can help you meet eligibility requirements and strengthen your study abroad application, making English preparation an important part of your scholarship journey."}
            </p>

            <Link
              href={`/${locale}/english`}
              className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              {isThai
                ? "เตรียมสอบ IELTS"
                : "Prepare for IELTS"}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            {isThai
              ? "พร้อมเริ่มค้นหาทุนแล้วหรือยัง?"
              : "Ready to find your scholarship?"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            {isThai
              ? "เริ่มค้นหาทุนเรียนต่อต่างประเทศที่เหมาะกับคุณได้เลย"
              : "Start exploring study abroad scholarships that match your goals."}
          </p>

          <Link
            href={`/${locale}`}
            className="mt-7 inline-flex rounded-lg bg-sky-600 px-6 py-3 font-bold text-white transition hover:bg-sky-700"
          >
            {isThai
              ? "ค้นหาทุนการศึกษา"
              : "Explore Scholarships"}
          </Link>
        </div>
      </section>

      {/* Hidden reference to dictionary so the page stays compatible
          with your existing i18n structure */}
      <div className="hidden">
        {dictionary.metadata.title}
      </div>
    </main>
  );
}