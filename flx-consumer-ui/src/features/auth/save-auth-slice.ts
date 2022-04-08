// DUCKS pattern
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface iAuthData {
  data?: any;
  isLoading?: boolean;
  error?: string;
  status?: string;
}

interface iAuthPayload {
  access_token: string;
}

const initialState: iAuthData = {};

export const saveAuth: ReturnType<any> = createAsyncThunk(
  "auth/save",
  async (payload: iAuthPayload, { dispatch, getState }) => {
    console.log("access_token:", payload);
    return payload;
  }
);

const authSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    fetchAuth(state: any, action: PayloadAction<any>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.data;
    },
  },
  extraReducers: {
    [saveAuth.pending]: (state: any, action: any) => {
      state.status = "loading";
      state.isLoading = true;
    },
    [saveAuth.fulfilled]: (state: any, action: any) => {
      state.status = "success";
      state.data = action.payload;
      state.isLoading = false;
    },
    [saveAuth.rejected]: (state: any, action: any) => {
      state.status = "failed";
      state.isLoading = false;
    },
  },
});

export const { fetchAuth } = authSlice.actions;
export default authSlice.reducer;
