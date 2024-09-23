import React from "react";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../components/auth/authSlice";
import { Navigate } from "react-router-dom";

function CartPage() {
  const user = useSelector(selectLoggedInUser);
  return (
    <div>
      {!user ? <Navigate to={"/login"} /> : <Navigate to={"/cart"} />}
      <Cart />
    </div>
  );
}

export default CartPage;
