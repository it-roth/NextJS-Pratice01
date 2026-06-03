export default function Pagination() {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Previous
      </button>
      <button
        type="button"
        className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        1
      </button>
      <button
        type="button"
        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}