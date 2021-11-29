import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'dbdb8fe3c7mshfe8cbccb7468fd1p172679jsn0a4b5e693e56'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => (
    {
        url,
        headers: cryptoApiHeaders
    }
);

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const{ useGetCryptosQuery } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'dbdb8fe3c7mshfe8cbccb7468fd1p172679jsn0a4b5e693e56'
//     }
//   };