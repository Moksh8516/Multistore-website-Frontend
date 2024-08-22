import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/Product/ProductSlice";
import authReducer from "../components/auth/authSlice"
import cartReducer from "../components/cart/cartSlice"
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    auth: authReducer,
    cart: cartReducer,
  },
})