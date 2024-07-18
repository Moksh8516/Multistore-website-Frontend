import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  ProductList,
  Signup,
  Cart,
  Checkoutform,
  ProductOverview,
} from "../components/index";

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductOverview />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout-form" element={<Checkoutform />} />
      {/* <Route path="/view" element={<ProductOverview />} /> */}
      {/* <Route
        path="/:levelOne/:levelTwo/:levelThree"
        element={<ProductList />}
      /> */}
    </Routes>
  );
}

export default CustomerRoutes;
