const BASE_URL = "http://localhost:4000";

async function handleResponse(response) {
  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function fetchContacts() {
  const response = await fetch(`${BASE_URL}/contacts?_sort=name`);
  return handleResponse(response);
}

export async function createContact(contact) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return handleResponse(response);
}

export async function updateContact(id, contact) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return handleResponse(response);
}

export async function deleteContact(id) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}
