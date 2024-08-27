import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  ProductList,
  Signup,
  Cart,
  Checkoutform,
  ProductOverview,
  OrderStatus,
} from "../components/index";
import {
  Errorpage,
  Profile,
  Setting,
  ForgetPassword,
  Signout,
  ResetPassword,
} from "../Pages/page";
function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductOverview />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Signout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-Password" element={<ForgetPassword />} />
      <Route path="/reset-Password/:token" element={<ResetPassword />} />
      <Route path="/checkout-form" element={<Checkoutform />} />
      <Route path="/order" element={<OrderStatus />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default CustomerRoutes;
