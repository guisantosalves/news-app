import * as React from 'react'
import { categories } from '../../../constants'
import { fetchNews } from '../../../lib/fetchNews'
import NewsList from '../../NewsList'

// it needs to be the same name of the directory
type Props = {
    params: {category: Category}     
}

// {params: {category}} == params.category
// dynamic routes
const NewsCategory = async ({params: {category}}: Props) => {
    const news: NewsResponse = await fetchNews(category)

    return(
        <div>
            <h1 className='headerTitle'>{category}</h1>
            <NewsList news={news}/>
        </div>
    )
}

export default NewsCategory

// pre build all the categories
export async function generateStaticParams() {
    // category: item
    // directory name and the values
    return categories.map((item) => ({
        category: item
    }))
}