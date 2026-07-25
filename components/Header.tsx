type HeaderProps = {
  dictionary: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function Header({
  dictionary,
}: HeaderProps) {
  return (
    <header className="rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
        {dictionary.eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {dictionary.title}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        {dictionary.description}
      </p>
    </header>
  );
}