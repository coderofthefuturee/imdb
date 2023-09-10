"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
    <div className={`flex font-semibold w-full text-gray-700 justify-center dark:bg-amber-500 bg-amber-100 lg:text-lg p-3 hover:underline hover:text-black bold-underline ${
        genre &&
        genre === param &&
        "underline underline-offset-8 decoration-4  decoration-black rounded-lg"
    }`}>
        <Link href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}
