import React, { useEffect } from "react";
import { Navbar, Footer } from "../components/index";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserAsync,
  getUserProfileAsync,
  selectLoggedInUser,
} from "../components/auth/authSlice";
import { fetchItemByUserIdAsync } from "../components/cart/cartSlice";
import { readAddressAsync } from "../features/Address/addressSlice";

function Layout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(getUserProfileAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync());
      dispatch(readAddressAsync());
    }
  }, [dispatch, user]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
