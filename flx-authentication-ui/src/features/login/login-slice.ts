import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface iLoginAuth {
  username: string;
  password: string;
}

export interface iLoginAuthResponse {
  access_token: string;
}

export const loginApiSlice = createApi({
  reducerPath: "loginInfoApi",
  tagTypes: ["LOGIN"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token
      // // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      //     headers.set('authorization', `Bearer ${token}`)
      // }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      validateCustomerLogin: builder.mutation<iLoginAuthResponse, iLoginAuth>({
        query: (payload) => ({
          url: "/auth/login",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["LOGIN"],
      }),
    };
  },
});

export const { useValidateCustomerLoginMutation } = loginApiSlice;

// Usage:
// const [fetchToken, { isLoading }] = useValidateCustomerLoginMutation();
// const handleSubmit = async () => {
//   console.log(username, password);
//   await fetchToken({ username, password });
// };
