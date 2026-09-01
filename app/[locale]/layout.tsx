import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import TopNav from "@/components/TopNav";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import {
  isLocale,
  locales,
} from "@/i18n/config";

import "../globals.css";

import { getDictionary } from "@/i18n/dictionaries";
import Image from "next/image";
import Link from "next/link";

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
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,

    icons: {
      icon: [
        {
          url: "/toonnok-icon.svg",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-slate-50 text-slate-900 antialiased">

        <GoogleAnalytics />

        {/* Top Header */}
        <header className="relative z-50 border-b border-slate-200 bg-white">
          <div className="mx-auto flex h-20 w-full max-w-6xl items-center px-5">

            {/* Logo */}
            <Link
              href={`/${locale}`}
              aria-label="Toonnok"
              className="flex shrink-0 items-center"
            >
              <Image
                src="/toonnok-logo.png"
                alt="Toonnok"
                width={240}
                height={70}
                priority
                className="h-12 w-auto object-contain sm:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="ml-auto hidden items-center md:flex">

              <TopNav locale={locale} />

              {/* Desktop Language Switcher */}
              <div className="ml-8 shrink-0 border-l border-slate-200 pl-6">
                <LanguageSwitcher locale={locale} />
              </div>

            </div>

            {/* Mobile Navigation */}
            <div className="ml-auto md:hidden">
              <TopNav locale={locale} />
            </div>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}