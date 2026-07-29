import { EditIcon, TrashIcon } from "./Icons";

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ContactRow({ contact, onEdit, onDelete }) {
  return (
    <li className="group flex items-center gap-4 px-5 py-4 transition hover:bg-slate-50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">
        {initials(contact.name)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-900">{contact.name}</p>
        <p className="truncate text-sm text-slate-500">{contact.role}</p>
      </div>

      <div className="hidden min-w-0 flex-1 sm:block">
        <p className="truncate text-sm text-slate-600">{contact.email}</p>
        <p className="truncate text-sm text-slate-400">{contact.phone}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={() => onEdit(contact)}
          aria-label={`Edit ${contact.name}`}
          className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(contact)}
          aria-label={`Delete ${contact.name}`}
          className="rounded-md p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}
