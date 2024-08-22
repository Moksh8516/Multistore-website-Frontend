import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, deleteCartItem, fecthItemsByUserId, updateCart } from "./cartApi";

const initialState = {
  status: "idle",
  items: []
};

export const addToCartAsync = createAsyncThunk(
  "/cart/addToCart", async (items) => {
    const response = await addToCart(items);
    return response.data;
  }
)

export const fetchItemByUserIdAsync = createAsyncThunk(
  "/cart/fetchItemByUserId",
  async (userId) => {
    const response = await fecthItemsByUserId(userId);
    console.log(userId)
    return response.data
  }
)
export const updateCartAsync = createAsyncThunk(
  "/cart/updateCart",
  async (update) => {
    const response = await updateCart(update);
    console.log(update)
    return response.data
  }
)
export const deleteCartItemAsync = createAsyncThunk(
  "/cart/deleteCartItem",
  async (itemId) => {
    const response = await deleteCartItem(itemId)
    return response.data
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload)
      })
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items[index] = action.payload
      })
      .addCase(deleteCartItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(index, 1)
      })
  }
})

export const selectedCartItem = (state) => state.cart.items
export default cartSlice.reducer;