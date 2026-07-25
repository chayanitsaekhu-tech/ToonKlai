type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  label: string;
  placeholder: string;
};

export default function SearchBar({
  searchTerm,
  onSearchChange,
  label,
  placeholder,
}: SearchBarProps) {
  return (
    <div>
      <label
        htmlFor="scholarship-search"
        className="block text-sm font-semibold text-slate-900"
      >
        {label}
      </label>

      <input
        id="scholarship-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
    </div>
  );
}