import { gql } from "graphql-request";
import { sortNewsByImage } from "./sortNewsByImage";

export const fetchNews = async (
    category?: Category | string,
    keyword?: string,
    isDynamic?: boolean,
) => {

    /*
        generate at stepzen
    */
    const query = gql`
  query MyQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
  ) {
    myQuery(
        access_key: $access_key
        categories: $categories
        countries: "br"
        sort: "published_desc"
        keywords: $keywords
    ) {
      data {
        author
        category
        description
        image
        language
        published_at
        source
        title
        url
        country
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
}
`;

    /*
        fetch function with next.js 13 caching...
    */
    const res = await fetch(`https://niquero.stepzen.net/api/interested-snail/__graphql`, {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query: query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keyword
            }
        })
    })

    console.log("Loading new data from api for category", category, keyword)
    const newResponse = await res.json();

    // sort function by images vs not images present
    const filteredNews = sortNewsByImage(newResponse.data.myQuery)

    // return
    return filteredNews;
}

//stepzen import curl http://api.mediastack.com/v1/news?access_key=b64d6c19045265039705e120adb96737&categories=business,sports

// stepzen import curl http://api.mediastack.com/v1/news?access_key=b64d6c19045265039705e120adb96737&countries=br&limit=100&offset=0&sort=published_desc