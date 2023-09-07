import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
        <Link href={address} className="flex mx-4 lg:mx-6 hover:text-amber-600">
            <Icon className="text-2xl mx-4 move-down-5" />
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}
