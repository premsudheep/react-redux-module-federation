// DUCKS pattern
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface iLoginAuthCredentials {
  username: string;
  password: string;
}

interface iCustomerAuthTokenResponse {
  access_token: string;
}

interface iCustomerAuthToken {
  data?: iCustomerAuthTokenResponse;
  isLoading?: boolean;
  error?: string;
  status?: string;
}

const initialState: iCustomerAuthToken = {};

export const getAuthToken: ReturnType<any> = createAsyncThunk(
  "customer/getAuthToken",
  async (payload: iLoginAuthCredentials, { dispatch, getState }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    return await fetch(`http://localhost:8080/auth/login`, requestOptions).then(
      (res) => res.json()
    );
  }
);

const authSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    fetchAuthToken(state: any, action: PayloadAction<iLoginAuthCredentials>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.data;
    },
  },
  extraReducers: {
    [getAuthToken.pending]: (state: any, action: any) => {
      state.status = "loading";
      state.isLoading = true;
      console.log("loading:", { action }, state);
    },
    [getAuthToken.fulfilled]: (state: any, action: any) => {
      state.status = "success";
      state.data = action.payload;
      state.isLoading = false;
      console.log("success:", { action }, state);
    },
    [getAuthToken.rejected]: (state: any, action: any) => {
      state.status = "failed";
      state.isLoading = false;
      console.log("failed:", { action }, state);
    },
  },
});

export const { fetchAuthToken } = authSlice.actions;
export default authSlice.reducer;
