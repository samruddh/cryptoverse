import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = { 
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_BING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_BING_KEY
}

const baseUrl = process.env.REACT_APP_BING_API;

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