import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_URL = 'https://fake-coffee-api.vercel.app/api?limit=10'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Product'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: builder => ({    //1 - запрос на сервер
		getProducts: builder.query({
			query: () => '/'
		})
	})
})
export const {useGetProductsQuery} = api;