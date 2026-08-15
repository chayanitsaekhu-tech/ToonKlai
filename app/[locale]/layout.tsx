import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-5">
          <Link
            href={`/${locale}`}
            aria-label="ToonKlai"
            className="flex items-center"
          >
            <Image
              src="/toonklai-logo.png"
              alt="ToonKlai"
              width={150}
              height={45}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {children}
    </body>
  </html>
);
}
