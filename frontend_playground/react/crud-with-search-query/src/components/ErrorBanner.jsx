import { AlertIcon } from "./Icons";

export default function ErrorBanner({ message, onRetry }) {
  return (
    <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
      <AlertIcon className="mt-0.5 shrink-0 text-red-500" />
      <div className="flex-1">
        <p className="text-sm font-medium text-red-700">Couldn't reach the server</p>
        <p className="mt-0.5 text-sm text-red-600">{message}</p>
        <p className="mt-1 text-xs text-red-500">
          Make sure json-server is running on port 4000 (npm run server).
        </p>
      </div>
      <button
        onClick={onRetry}
        className="shrink-0 rounded-md border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100"
      >
        Retry
      </button>
    </div>
  );
}
