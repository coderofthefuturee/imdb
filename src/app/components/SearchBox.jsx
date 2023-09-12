"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-4xl h-16 border rounded-xl items-center bg-white border-gray-300 mx-auto">
    <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="flex-grow h-full rounded-sm px-4 outline-none"
        placeholder="Search for products, brands, and more..."
    />
    <button className="p-4 rounded-r-xl bg-gray-200 hover:bg-yellow-400 transition duration-200">
        <svg width="24" height="24" fill="currentColor" className="text-gray-600 hover:text-white transition duration-200" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 016.471 12.879l5.122 5.121a1 1 0 01-1.415 1.415l-5.121-5.122A8 8 0 1110 2zm1 2a6 6 0 100 12A6 6 0 0011 4z"></path></svg>
    </button>
    </form>
  );
}
