import { useCallback, useEffect, useState } from "react";
import {
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../api/contacts";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const data = await fetchContacts();
      setContacts(data);
      setStatus("success");
    } catch (err) {
      setError(err.message || "Couldn't load contacts.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function addContact(values) {
    const created = await createContact(values);
    setContacts((prev) =>
      [...prev, created].sort((a, b) => a.name.localeCompare(b.name))
    );
    return created;
  }

  async function editContact(id, values) {
    const updated = await updateContact(id, values);
    setContacts((prev) =>
      prev
        .map((c) => (c.id === id ? updated : c))
        .sort((a, b) => a.name.localeCompare(b.name))
    );
    return updated;
  }

  async function removeContact(id) {
    await deleteContact(id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    contacts,
    status,
    error,
    reload: load,
    addContact,
    editContact,
    removeContact,
  };
}
