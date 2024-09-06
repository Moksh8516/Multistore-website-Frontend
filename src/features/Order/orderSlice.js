import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createOrder, fetchOrder } from './orderApi';

const initialState = {
  order: [],
  status: "idle",
  currentOrder: null,
}

export const createOrderAsync = createAsyncThunk('order/create', async (order) => {
  const response = await createOrder(order);
  return response.data;
})

export const fetchOrderAsync = createAsyncThunk('order/get', async (id) => {
  const response = await fetchOrder(id);
  console.log(response)
  return response;
})

export const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.currentOrder = action.payload
      })
      .addCase(fetchOrderAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchOrderAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.order.push(action.payload)
      })
  },
})

export const { resetOrder } = OrderSlice.actions;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectOrder = (state) => state.order.order

export default OrderSlice.reducer;

