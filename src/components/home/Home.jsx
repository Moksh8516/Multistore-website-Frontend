import React from "react";
import { Navbar, ProductList } from "../index";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar>
        <ProductList />
        <Outlet></Outlet>
      </Navbar>
    </>
  );
}

export default Home;
