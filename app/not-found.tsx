import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
          404 error
        </p>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Scholarship not found
        </h1>

        <p className="mt-3 leading-7 text-slate-600">
          The scholarship may have been removed, or the address may be
          incorrect.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
        >
          Return to Scholarship Finder
        </Link>
      </div>
    </main>
  );
}