# Contact manager

A simple CRUD app for managing contacts, backed by json-server as a mock REST API.

## Stack

- React 18 + Vite
- Tailwind CSS
- json-server (acts as the database/API)

## Project structure

```
contact-manager/
├── db.json                      # json-server's "database" (seed data lives here)
├── src/
│   ├── api/
│   │   └── contacts.js          # fetch wrappers: GET/POST/PUT/DELETE to json-server
│   ├── hooks/
│   │   └── useContacts.js       # owns contacts state, loading/error status, CRUD methods
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ContactList.jsx
│   │   ├── ContactRow.jsx
│   │   ├── ContactFormModal.jsx # create/edit form with validation
│   │   ├── ConfirmDeleteModal.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorBanner.jsx
│   │   └── Icons.jsx
│   ├── App.jsx                  # wires hook + components together
│   ├── main.jsx
│   └── index.css
└── package.json
```

## Setup

```bash
npm install
npm run dev
```

`npm run dev` starts two things together:
- Vite dev server at `http://localhost:5173` (the React app)
- json-server at `http://localhost:4000` (the API, reading/writing `db.json`)

Open `http://localhost:5173`. Every create, edit, and delete is a real HTTP request to json-server, and changes are persisted to `db.json` on disk — open that file while the app is running and watch it update.

If you'd rather run them separately:

```bash
npm run server   # just json-server on port 4000
npx vite          # just the frontend on port 5173
```

## API

json-server auto-generates a full REST API from `db.json`. The `contacts` array becomes:

| Method | URL                    | Action              |
|--------|------------------------|----------------------|
| GET    | `/contacts`            | List all contacts    |
| GET    | `/contacts/:id`        | Get one contact       |
| POST   | `/contacts`            | Create a contact      |
| PUT    | `/contacts/:id`        | Replace a contact     |
| DELETE | `/contacts/:id`        | Delete a contact      |

`src/api/contacts.js` is the only file that knows these URLs exist — swap it out for a real backend later without touching any component.

## Notes

- Validation (required fields, email format) happens client-side in `ContactFormModal.jsx` before any request is sent.
- Network/server errors surface in the UI (a banner on load failure, inline messages in modals on save/delete failure) rather than failing silently.
- This was scaffolded in a sandboxed environment without npm registry access, so dependencies haven't been installed/built here — run `npm install` locally to pull them down.
