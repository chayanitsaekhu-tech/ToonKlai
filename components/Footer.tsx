export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <p>
        © {currentYear} Scholarship Finder. Built with Next.js, TypeScript,
        and Tailwind CSS.
      </p>
    </footer>
  );
}