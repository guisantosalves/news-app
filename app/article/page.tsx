import * as React from 'react'
import { notFound } from 'next/navigation'

type Props = {
    searchParams?: Article;
}

/* when we set searchParams we can get the params in url */
const ArticlePage = ({ searchParams }: Props) => {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound();
    }

    const article: Article = searchParams;

    return (
        <article>
            <section className='flex flex-col lg:flex-row pb-24 px-10'>
                {article.image && (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="h-48 max-w-md mx-auto md:max-w-lg lg:max-w-xl
                        object-cover rounded-lg shadow-md"
                    />
                )}
                <div className='p-10 lg:pt-0'>
                    <h1 className='headerTitle px-0 no-underline pb-2'>
                        {article.title}
                    </h1>
                    
                    <div className='flex divide-x-2 space-x-4'>
                        <h2 className='font-semibold'>Escrito por: {article.author === "null" ? "desconhecido" : article.author}</h2>
                        <h2 className='font-semibold pl-4'>fonte: {article.source}</h2>
                        <p className='pl-5'>{new Date(article.published_at).toLocaleDateString()}</p>
                    </div>

                    <p className='pt-4'>{article.description}</p>
                </div>
            </section>
        </article>
    )
}

export default ArticlePage