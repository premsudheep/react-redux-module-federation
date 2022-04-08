import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "../store";

export interface iStatementInfo {
  id?: number;
  statementPeriod?: string;
  statementPayload?: string;
}

export const statementApiSlice = createApi({
  reducerPath: "statementInfoApi",
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
      fetchStatementInfo: builder.query<iStatementInfo[], void>({
        query: () => {
          return `/statements`;
        },
      }),
    };
  },
});

export const { useFetchStatementInfoQuery } = statementApiSlice;
