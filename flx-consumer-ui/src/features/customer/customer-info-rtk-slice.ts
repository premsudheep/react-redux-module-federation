import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "../store";

export interface iCustomerInfo {
  id: number;
  firstName: string;
  alterEgo: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: string;
  longitude: string;
}

export const customerApiSlice = createApi({
  reducerPath: "customerInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppState).authSlice.data.accessToken;
      console.log("token from customer call header:", token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchCustomerInfo: builder.query<iCustomerInfo, number | void>({
        query: (customerId: number) => {
          return `/customers/${customerId}`;
        },
      }),
    };
  },
});

export const { useFetchCustomerInfoQuery } = customerApiSlice;
