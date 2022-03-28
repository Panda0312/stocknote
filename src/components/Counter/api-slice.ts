import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Equity {
  result: Array<
    { id: string; price: number }
  >
}

export const counterApi = createApi({
  reducerPath: 'counterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/mocks',
    prepareHeaders: headers => {
      headers.set('auth', 'abc')
      return headers
    }
  }),
  endpoints: builder => ({
    getEquityByCount: builder.query<Equity, number | void>({
      query: (count = 0) => `/equity-list.json?count=${count}`
    })
  })
})

export const { useGetEquityByCountQuery } = counterApi