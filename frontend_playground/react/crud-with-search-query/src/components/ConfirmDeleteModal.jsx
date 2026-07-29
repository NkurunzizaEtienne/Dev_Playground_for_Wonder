import { useState } from "react";

export default function ConfirmDeleteModal({ contact, onCancel, onConfirm }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  async function handleConfirm() {
    setError(null);
    setIsDeleting(true);
    try {
      await onConfirm();
    } catch (err) {
      setError(err.message || "Couldn't delete this contact. Try again.");
      setIsDeleting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-slate-900">Delete contact</h2>
        <p className="mt-2 text-sm text-slate-500">
          {contact.name} will be permanently removed from your directory. This can't be undone.
        </p>

        {error && (
          <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={onCancel}
            disabled={isDeleting}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={isDeleting}
            className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 active:scale-[0.98] disabled:opacity-60"
          >
            {isDeleting ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
