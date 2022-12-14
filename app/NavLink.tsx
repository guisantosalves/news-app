import Link from "next/link";
import * as React from "react"

type Props = {
    category: Category,
    isActive: boolean,
}

const NavLink = ({ category, isActive }: Props) => {
    return (
        <Link
            href={`/news/${category}`}
            className={`navLink ${isActive && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}
        >
            {category}
        </Link>
    )
}

export default NavLink;