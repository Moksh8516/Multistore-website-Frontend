import React, { useEffect } from "react";
import { Navbar, Footer } from "../components/index";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../components/auth/authSlice";
import { fetchItemByUserIdAsync } from "../components/cart/cartSlice";

function Layout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchItemByUserIdAsync(user.user._id));
  //   }
  // }, [dispatch, user]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
