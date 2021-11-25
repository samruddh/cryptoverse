import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3f723b011emshb2df50a1081f6c5p11bbaejsn8873853d4ea3'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url, headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=> createRequest('/coins')
        })
    })
});

export const{
    useGetCryptosQuery,
} = cryptoApi;