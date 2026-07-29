import ContactRow from "./ContactRow";
import EmptyState from "./EmptyState";

export default function ContactList({ contacts, hasContacts, onAdd, onEdit, onDelete }) {
  if (contacts.length === 0) {
    return (
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <EmptyState hasContacts={hasContacts} onAdd={onAdd} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <ul className="divide-y divide-slate-100">
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
