import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllProducts, fetchProductsByFilter, fetchCategory, fetchBrand, fetchProductById } from "./ProductAPI"

const initialState = {
  products: [],
  brands: [],
  category: [],
  status: "idle",
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchCategoryAsync = createAsyncThunk(
  'product/fetchCategory',
  async () => {
    const response = await fetchCategory();
    return response.data;
  }
);

export const fetchBrandAsync = createAsyncThunk(
  'product/fetchBrand',
  async () => {
    const response = await fetchBrand();
    return response.data;
  }
);

export const fetchProductsByFilterAsync = createAsyncThunk(
  'product/fetchProductsByFilter',
  // The value we return becomes the fullfiled action payload
  async ({ filter, sort, page }) => {
    const response = await fetchProductsByFilter(filter, sort, page);
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById', async (id) => {

    const response = await fetchProductById(id);
    console.log(response)
    return response.data;
  }
)

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
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loding";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = "loding";
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      // .addCase(fetchCategoryAsync.pending, (state) => {
      //   state.status = "loding";
      // })
      // .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.category = action.payload;
      // })
      // .addCase(fetchBrandAsync.pending, (state) => {
      //   state.status = "loding";
      // })
      // .addCase(fetchBrandAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.brands = action.payload;
      // })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loding";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
  },
});

export const { increment } = ProductSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export const selectCategories = (state) => state.product.category;
export const selectBrands = (state) => state.product.brands;
export const selectProductById = (state) => state.product.selectedProduct;
export default ProductSlice.reducer;