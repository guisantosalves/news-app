'use client'
import { useRouter } from 'next/navigation'
import * as React from 'react'

const SearchBox = () => {

    const [input, setInput] = React.useState<string>("")
    const router = useRouter()

    /* 
        redirecting with useRouter, using params
    */
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input) return

        router.push(`/search?term=${input}`)
    }
    return (
        <form
            onSubmit={(e) => handleSearch(e)}
            className='max-w-6xl mx-auto flex justify-between items-center'
        >
            <input
                type={"text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search"
                className="w-full h-14 rounded-sm 
              placeholder-gray-500
              outline-none flex-1
              bg-transparent dark:text-orange-400"
            />
            <button
                type='submit'
                disabled={!input}
                className="text-orange-400 disabled:text-gray-400"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBox