/*
    filtering that ones which has images
*/
export const sortNewsByImage = (news: NewsResponse) => {
    const newsWithImages = news.data.filter((item)=>{
        return item.image !== null
    })
    const newsWithoutImages = news.data.filter((item) => {
        return item.image === null
    })

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImages, ...newsWithoutImages]
    }

    return sortedNewsResponse
}

