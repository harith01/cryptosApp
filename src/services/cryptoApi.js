import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins`)
        }),
        getCoin: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
        getCoinHistory: builder.query({
            query: ({ uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery, useGetCoinQuery, useGetCoinHistoryQuery,
} = cryptoApi;