import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "../store";

export interface iTransactionInfo {
  id?: number;
  date?: string;
  description?: string;
}

export const transactionApiSlice = createApi({
  reducerPath: "transactionInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppState).authSlice.data.accessToken;
      console.log("token from customer call header:", token);
      // If we have a token set in state, let's assume that we should be passing it.
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      fetchTransactionInfo: builder.query<iTransactionInfo[], void>({
        query: () => {
          return `/transactions`;
        },
      }),
    };
  },
});

export const { useFetchTransactionInfoQuery } = transactionApiSlice;
