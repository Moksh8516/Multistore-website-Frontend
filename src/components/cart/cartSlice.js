import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, clearCartItem, deleteCartItem, fecthItemsByUserId, updateCart } from "./cartApi";

const initialState = {
  status: "idle",
  items: [],
  cartLoader: false,
};

export const addToCartAsync = createAsyncThunk(
  "/cart/addToCart", async (items) => {
    const response = await addToCart(items);
    console.log(response.data)
    return response.data;
  }
)

export const fetchItemByUserIdAsync = createAsyncThunk(
  "/cart/fetchItemByUserId",
  async () => {
    const response = await fecthItemsByUserId();
    return response.data
  }
)

export const updateCartAsync = createAsyncThunk(
  "/cart/updateCart",
  async (id) => {
    const response = await updateCart(id);
    return response.data
  }
)

export const deleteCartItemAsync = createAsyncThunk(
  "/cart/deleteCartItem",
  async (id) => {
    const response = await deleteCartItem(id)
    return response.data
  }
)
export const clearCartItemAsync = createAsyncThunk(
  "/cart/clear",
  async () => {
    const response = await clearCartItem()
    return response
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
        state.cartLoader = true
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
      .addCase(clearCartItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(clearCartItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = []
      })
  }
})

export const selectedCartItem = (state) => state.cart.items
export const selectCartLoader = (state) => state.cart.cartLoader
export default cartSlice.reducer;