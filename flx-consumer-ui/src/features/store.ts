import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/save-auth-slice";
import { customerApiSlice } from "./customer/customer-info-rtk-slice";
import { transactionApiSlice } from "./transactions/transactions-slice";
import { statementApiSlice } from "./statements/statements-slice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [customerApiSlice.reducerPath]: customerApiSlice.reducer,
    [transactionApiSlice.reducerPath]: transactionApiSlice.reducer,
    [statementApiSlice.reducerPath]: statementApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      customerApiSlice.middleware,
      transactionApiSlice.middleware,
      statementApiSlice.middleware
    );
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
