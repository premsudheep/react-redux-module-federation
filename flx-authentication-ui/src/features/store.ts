import { configureStore } from "@reduxjs/toolkit";
import { loginApiSlice } from "./login/login-slice";
import authSlice from "./auth/auth-thunk-slice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginApiSlice.middleware);
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
