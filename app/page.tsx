import * as React from 'react'
import { categories } from '../constants'
import { fetchNews } from '../lib/fetchNews'

// component
import NewsList from './NewsList'

const HomePage = async () => {

    /*
        fetching news
    */
    const news: NewsResponse = await fetchNews(categories.join(","))

    return (
        <div>
            {/* list of all news */}
            <NewsList news={news}/>
        </div>
    )
}

export default HomePage