export default function Field({ label, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-50"
            : "border-slate-200 focus:border-slate-400 focus:ring-slate-100"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
