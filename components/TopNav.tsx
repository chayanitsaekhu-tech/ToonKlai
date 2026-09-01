"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type TopNavProps = {
  locale: Locale;
};

export default function TopNav({
  locale,
}: TopNavProps) {
  const dictionary = getDictionary(locale);

  const [isOpen, setIsOpen] = useState(false);
  const [isExamOpen, setIsExamOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsExamOpen(false);
  };

  return (
    <div className="flex items-center">

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 md:flex">

        {/* Exam Preparation */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setIsExamOpen(!isExamOpen)
            }
            aria-expanded={isExamOpen}
            className="flex items-center gap-2 py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
          >
            {dictionary.navigation.examPreparation}

            <span
              className={`text-xs transition-transform duration-200 ${
                isExamOpen
                  ? "rotate-180"
                  : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`absolute left-0 top-full z-50 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-200 ${
              isExamOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-2 opacity-0"
            }`}
          >
            <Link
              href={`/${locale}/english`}
              onClick={() =>
                setIsExamOpen(false)
              }
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {
                dictionary.navigation
                  .englishTutoring
              }
            </Link>
          </div>
        </div>

        {/* About */}
        <Link
          href={`/${locale}/about`}
          className="py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
        >
          {locale === "th"
            ? "เกี่ยวกับเรา"
            : "About Us"}
        </Link>

        {/* Contact */}
        <Link
          href={`/${locale}/contact`}
          className="py-3 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
        >
          {dictionary.navigation.contact}
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden">

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
        >
          <span className="text-xl leading-none">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute left-0 right-0 top-20 z-50 border-b border-slate-200 bg-white shadow-md transition-all duration-200 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-5 py-3">

            {/* Exam Preparation */}
            <button
              type="button"
              onClick={() =>
                setIsExamOpen(!isExamOpen)
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <span>
                {
                  dictionary.navigation
                    .examPreparation
                }
              </span>

              <span
                className={`text-xs transition-transform duration-200 ${
                  isExamOpen
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Exam submenu */}
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isExamOpen
                  ? "max-h-24 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href={`/${locale}/english`}
                onClick={closeMenu}
                className="block rounded-lg px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-sky-600"
              >
                {
                  dictionary.navigation
                    .englishTutoring
                }
              </Link>
            </div>

            {/* About */}
            <Link
              href={`/${locale}/about`}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {locale === "th"
                ? "เกี่ยวกับเรา"
                : "About Us"}
            </Link>

            {/* Contact */}
            <Link
              href={`/${locale}/contact`}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
            >
              {dictionary.navigation.contact}
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}