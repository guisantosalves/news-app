'use client'
import * as React from 'react'

const SearchBox = () => {

    const [input, setInput] = React.useState<string>("")
    return(
        <form className='max-w-6xl mx-auto flex justify-between items-center'>
            <input 
              type={"text"}
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Search"
              className="w-full h-14 rounded-sm 
              placeholder-gray-500
              outline-none flex-1
              bg-transparent dark:text-orange-400"
            />
            <button type='submit'>
                Search
            </button>
        </form>
    )
}

export default SearchBox