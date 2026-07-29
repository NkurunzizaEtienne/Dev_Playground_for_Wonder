import { SearchIcon } from "./Icons";

export default function SearchBar({ query, onChange, resultCount, totalCount }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="relative flex-1">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, role, or email"
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
        />
      </div>
      <span className="whitespace-nowrap text-sm text-slate-500">
        {resultCount} of {totalCount}
      </span>
    </div>
  );
}
