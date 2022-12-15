"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

const DarkModeButton = () => {

    const [mounted, setMounted] = React.useState<boolean>(false)
    const { systemTheme, theme, setTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return null
    }

    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <div>
            {currentTheme === "dark" ? (
                <SunIcon 
                    className="h-8 w-8 cursor-pointer text-yellow-500"
                    onClick={()=>setTheme("light")}
                />
            ):(
                <MoonIcon 
                    className="h-8 w-8 cursor-pointer text-gray-900"
                    onClick={()=>setTheme("dark")}
                />
            )}
        </div>
    )
}

export default DarkModeButton