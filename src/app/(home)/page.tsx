'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const name = "Next.js";
  const [count, setCount] = useState(10);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p> Hello, {name}</p>
      <p>Count: {count}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
