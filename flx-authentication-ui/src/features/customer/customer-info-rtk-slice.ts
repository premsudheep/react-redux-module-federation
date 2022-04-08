import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface iCustomerInfo {
  id: number
  firstName: string
  alterEgo: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  latitude: string
  longitude: string
}

export const customerApiSlice = createApi({
  reducerPath: 'customerInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token
      // // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      //     headers.set('authorization', `Bearer ${token}`)
      // }
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => {
    return {
      fetchCustomerInfo: builder.query<iCustomerInfo, number | void>({
        query: (customerId: number) => {
          return `/customerDetails/${customerId}`
        },
      }),
    }
  },
})

export const { useFetchCustomerInfoQuery } = customerApiSlice
