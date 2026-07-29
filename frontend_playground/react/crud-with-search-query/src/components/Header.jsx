import { PlusIcon } from "./Icons";

export default function Header({ onAdd }) {
  return (
    <header className="mb-8 flex items-end justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Workspace directory
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Contacts</h1>
      </div>
      <button
        onClick={onAdd}
        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.98]"
      >
        <PlusIcon />
        Add contact
      </button>
    </header>
  );
}
