// DUCKS pattern
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'

interface iCustomer {
  id?: number
  firstName?: string
  alterEgo?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  latitude?: string
  longitude?: string
}

interface iCustomerResponse {
  data?: iCustomer
  isLoading?: boolean
  error?: string
  status?: string
}

const initialState: iCustomerResponse = {}

export const getCustomer: ReturnType<any> = createAsyncThunk(
  'customer/getCustomer',
  async (id: number, { dispatch, getState }) => {
    console.log({ id })

    return fetch(`http://localhost:4000/customerDetails/${id}`).then((res) =>
      res.json()
    )
  }
)

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    fetchCustomer(state: any, action: PayloadAction<iCustomer>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value
    },
  },
  extraReducers: {
    [getCustomer.pending]: (state: any, action: any) => {
      state.status = 'loading'
      state.isLoading = true
    },
    [getCustomer.fulfilled]: (state: any, action: any) => {
      state.status = 'success'
      state.value = action.payload
      state.isLoading = false
      console.log({ action })
    },
    [getCustomer.rejected]: (state: any, action: any) => {
      state.status = 'failed'
      state.isLoading = false
    },
  },
})

export const { fetchCustomer } = customerSlice.actions
export default customerSlice.reducer
