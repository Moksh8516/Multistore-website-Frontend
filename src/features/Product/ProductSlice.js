import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './ProductAPI'

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loding";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products += action.payload;
      });
  },
});

export const { increment } = ProductSlice.actions;
export const selectAllProducts = (state) => state.product.value;
export default ProductSlice.reducer;