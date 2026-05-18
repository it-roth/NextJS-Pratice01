"use client";

import { useState } from "react";

export default function AddToCardComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl">Count: {count}</h1>

      <button
        type="button"
        className="border px-6 py-2 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Count
      </button>
    </div>
  );
}