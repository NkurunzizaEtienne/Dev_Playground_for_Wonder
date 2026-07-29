import { useState } from "react";
import { useContacts } from "./hooks/useContacts";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import ContactFormModal from "./components/ContactFormModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import ErrorBanner from "./components/ErrorBanner";

export default function App() {
  const { contacts, status, error, reload, addContact, editContact, removeContact } =
    useContacts();

  const [query, setQuery] = useState("");
  const [editingContact, setEditingContact] = useState(null); // null = closed, {} = create, {...} = edit
  const [deletingContact, setDeletingContact] = useState(null);

  const filtered = contacts.filter((c) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  });

  async function handleFormSubmit(values) {
    if (editingContact && editingContact.id) {
      await editContact(editingContact.id, values);
    } else {
      await addContact(values);
    }
    setEditingContact(null);
  }

  async function handleConfirmDelete() {
    await removeContact(deletingContact.id);
    setDeletingContact(null);
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Header onAdd={() => setEditingContact({})} />

        {status === "error" && <ErrorBanner message={error} onRetry={reload} />}

        <SearchBar
          query={query}
          onChange={setQuery}
          resultCount={filtered.length}
          totalCount={contacts.length}
        />

        {status === "loading" ? (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center text-sm text-slate-400">
            Loading contacts…
          </div>
        ) : (
          <ContactList
            contacts={filtered}
            hasContacts={contacts.length > 0}
            onAdd={() => setEditingContact({})}
            onEdit={(contact) => setEditingContact(contact)}
            onDelete={(contact) => setDeletingContact(contact)}
          />
        )}
      </div>

      {editingContact !== null && (
        <ContactFormModal
          initialValues={editingContact.id ? editingContact : null}
          onSubmit={handleFormSubmit}
          onCancel={() => setEditingContact(null)}
        />
      )}

      {deletingContact !== null && (
        <ConfirmDeleteModal
          contact={deletingContact}
          onCancel={() => setDeletingContact(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}
