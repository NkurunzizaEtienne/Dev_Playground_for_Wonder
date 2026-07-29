import { useState } from "react";
import Field from "./Field";

const emptyForm = { name: "", role: "", email: "", phone: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter a name.";
  if (!values.role.trim()) errors.role = "Enter a role.";
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Enter a phone number.";
  return errors;
}

export default function ContactFormModal({ initialValues, onSubmit, onCancel }) {
  const isEditing = Boolean(initialValues);
  const [form, setForm] = useState(initialValues || emptyForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  function handleFieldChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitError(null);
    setIsSaving(true);
    try {
      await onSubmit({
        name: form.name.trim(),
        role: form.role.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Try again.");
      setIsSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-slate-900">
          {isEditing ? "Edit contact" : "Add contact"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <Field
            label="Full name"
            value={form.name}
            onChange={(v) => handleFieldChange("name", v)}
            error={errors.name}
            placeholder="Jordan Lee"
          />
          <Field
            label="Role"
            value={form.role}
            onChange={(v) => handleFieldChange("role", v)}
            error={errors.role}
            placeholder="Marketing Lead"
          />
          <Field
            label="Email"
            value={form.email}
            onChange={(v) => handleFieldChange("email", v)}
            error={errors.email}
            placeholder="jordan.lee@acme.com"
            type="email"
          />
          <Field
            label="Phone"
            value={form.phone}
            onChange={(v) => handleFieldChange("phone", v)}
            error={errors.phone}
            placeholder="+1 (555) 000-0000"
          />

          {submitError && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{submitError}</p>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSaving}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.98] disabled:opacity-60"
            >
              {isSaving ? "Saving…" : "Save contact"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
