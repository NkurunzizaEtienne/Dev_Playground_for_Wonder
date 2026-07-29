import { SearchIcon, PlusIcon } from "./Icons";

export default function EmptyState({ hasContacts, onAdd }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <SearchIcon />
      </div>
      <p className="text-sm font-medium text-slate-900">
        {hasContacts ? "No matches found" : "No contacts yet"}
      </p>
      <p className="mt-1 text-sm text-slate-500">
        {hasContacts ? "Try a different search term." : "Add your first contact to get started."}
      </p>
      {!hasContacts && (
        <button
          onClick={onAdd}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <PlusIcon />
          Add contact
        </button>
      )}
    </div>
  );
}
