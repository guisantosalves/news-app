'use client'
import * as React from 'react'
import { categories } from '../constants'
import { usePathname } from "next/navigation"

//components
import NavLink from './NavLink'

const NavLinks = () => {

    const pathName = usePathname()

    const isActive = (path: string) => {
        // get the last info in the url path
        return pathName!.split('/').pop() === path
    }
    return (
        <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
            {categories.map((item: Category, index: number) => (
                <NavLink
                    key={index}
                    category={item}
                    isActive={isActive(item)}
                />
            ))}
        </nav>
    )
}

export default NavLinks