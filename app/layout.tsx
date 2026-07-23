import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholarship Finder",
  description: "Find scholarships that can support your education.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}