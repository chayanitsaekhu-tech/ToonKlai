
import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";

export default async function EnglishPreparationPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return null;
  }

  const isThai = locale === "th";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
              {isThai
                ? "เตรียมตัวให้พร้อมก่อนสมัครทุน"
                : "Prepare before applying for scholarships"}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {isThai
                ? "ภาษาอังกฤษดี เปิดโอกาสให้คุณเข้าถึงทุนได้มากขึ้น"
                : "Strong English opens more scholarship opportunities"}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {isThai
                ? "ทุนการศึกษาจากมหาวิทยาลัยและองค์กรต่างประเทศจำนวนมากกำหนดคะแนนภาษาอังกฤษเป็นหนึ่งในคุณสมบัติสำคัญ การเตรียมสอบ IELTS ให้ได้คะแนนตามเป้าหมายจึงเป็นอีกขั้นตอนที่ไม่ควรมองข้าม"
                : "Many universities and scholarship programmes use English proficiency as part of their eligibility requirements. Preparing for IELTS and reaching your target score can therefore be an important step before applying."}
            </p>

            <div className="mt-8">
              <a
                href="https://claylingua.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-sky-600 px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-sky-700"
              >
                {isThai
                  ? "เริ่มติว IELTS"
                  : "Start IELTS Preparation"}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why IELTS */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">
            {isThai
              ? "ทำไม IELTS จึงสำคัญสำหรับคนอยากเรียนต่อต่างประเทศ?"
              : "Why does IELTS matter for studying abroad?"}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {isThai
              ? "ก่อนสมัครทุน ควรตรวจสอบคุณสมบัติของทุนและมหาวิทยาลัยที่สนใจให้ละเอียด เพราะแต่ละแห่งอาจกำหนดคะแนนภาษาอังกฤษไม่เท่ากัน"
              : "Before applying, always check the requirements of your chosen scholarship and university, as English requirements can vary between programmes."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🎓</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {isThai
                ? "เพิ่มตัวเลือกในการสมัคร"
                : "More opportunities"}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {isThai
                ? "คะแนนภาษาอังกฤษที่ดีช่วยให้คุณมีตัวเลือกหลักสูตรและมหาวิทยาลัยมากขึ้น โดยเฉพาะหลักสูตรนานาชาติ"
                : "A strong English score can give you access to more international programmes and universities."}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">📄</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {isThai
                ? "ผ่านเงื่อนไขของทุน"
                : "Meet scholarship requirements"}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {isThai
                ? "ทุนบางประเภทกำหนดคะแนนภาษาอังกฤษขั้นต่ำ ดังนั้นการเตรียมตัวล่วงหน้าจะช่วยให้พร้อมเมื่อถึงเวลาสมัคร"
                : "Some scholarships require a minimum English score, so preparing early can help you meet the eligibility requirements."}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🚀</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {isThai
                ? "พร้อมสำหรับการเรียนจริง"
                : "Be ready for university"}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {isThai
                ? "ภาษาอังกฤษไม่ได้สำคัญแค่ตอนสมัคร แต่ยังเป็นทักษะที่จำเป็นสำหรับการเรียนและใช้ชีวิตในต่างประเทศ"
                : "English is not only important for applications. It is also an essential skill for studying and living abroad."}
            </p>
          </div>
        </div>
      </section>

      {/* Target score */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">
              {isThai
                ? "ตั้งเป้าคะแนน IELTS ให้เหมาะกับทุนที่คุณต้องการ"
                : "Set an IELTS target that matches your goals"}
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {isThai
                ? "อย่าเพิ่งตั้งเป้าคะแนนแบบเดาสุ่ม ให้เริ่มจากการดูข้อกำหนดของทุนและหลักสูตรที่คุณสนใจ แล้ววางแผนเตรียมสอบให้ตรงกับเป้าหมาย"
                : "Instead of choosing a random target, start by checking the requirements of the scholarships and programmes you are interested in, then prepare towards that target."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-slate-300">
                {isThai ? "ขั้นที่ 1" : "Step 1"}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {isThai
                  ? "ค้นหาทุนที่สนใจ"
                  : "Find your scholarships"}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-slate-300">
                {isThai ? "ขั้นที่ 2" : "Step 2"}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {isThai
                  ? "ตรวจสอบคะแนน IELTS"
                  : "Check IELTS requirements"}
              </h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-slate-300">
                {isThai ? "ขั้นที่ 3" : "Step 3"}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {isThai
                  ? "วางแผนและเริ่มเตรียมสอบ"
                  : "Plan and start preparing"}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            {isThai
              ? "พร้อมเริ่มเตรียมตัวหรือยัง?"
              : "Ready to start preparing?"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {isThai
              ? "เริ่มจากการประเมินระดับภาษาอังกฤษของตัวเอง ตั้งเป้าคะแนนที่ต้องการ และฝึกอย่างเป็นระบบก่อนวันสอบ"
              : "Start by understanding your current level, setting your target score, and preparing consistently before exam day."}
          </p>

          <a
            href="https://claylingua.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-xl bg-sky-600 px-7 py-4 font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            {isThai
              ? "เริ่มติว IELTS"
              : "Start IELTS Preparation"}
            <span className="ml-2">→</span>
          </a>

          {/* Sponsor logo */}
          <div className="mt-14 border-t border-slate-200 pt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {isThai ? "สนับสนุนโดย" : "Supported by"}
            </p>

            <a
              href="https://claylingua.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center"
              aria-label="ClayLingua"
            >
              <Image
                src="/claylingua-logo.svg"
                alt="ClayLingua"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

