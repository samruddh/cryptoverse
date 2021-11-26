import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = { 
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '3f723b011emshb2df50a1081f6c5p11bbaejsn8873853d4ea3'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest =(url)=>({url, headers:cryptoApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory, count})=> createRequest(`/news/search?q=coin&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const{
    useGetCryptoNewsQuery
} = cryptoNewsApi;