type FooterProps = {
  text: string;
};

export default function Footer({
  text,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <p>
        © {currentYear} {text}
      </p>
    </footer>
  );
}