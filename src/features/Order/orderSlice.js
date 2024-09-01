import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createOrder } from './orderApi';

const initialState = {
  order: [],
  status: "idle",
  currentOrder: null,
}

const creatOrderAsync = createAsyncThunk('order/create', async (order) => {
  console.log(order)
  const response = createOrder(order);
  return response.data;
})


export const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(creatOrderAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(creatOrderAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.order.push(action.payload)
      })
  },
})

export const selectOrder = (state) => state.order.order

export default OrderSlice.reducer;

