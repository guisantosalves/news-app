"use client"
import * as React from "react"
import { useRouter } from "next/navigation"

type Props = {
    article: Article
}

const ReadMoreButton = ({article}: Props) => {
    const router = useRouter();

    /*
        I am mounting the url and redirecting the user
    */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const queryString = Object.entries(article)
        .map(([key, value])=>{
            return `${key}=${value}`
        }).join("&")

        const url = `/article?${queryString}`
        
        router.push(url)
    }

    return(
        <button
            onClick={(e)=>handleClick(e)}
            className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
        >
            Leia Mais
        </button>
    )
}

export default ReadMoreButton