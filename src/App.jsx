// import "./App.css";
import {
  Home,
  Login,
  ProductOverview,
  Signup,
  Cart,
  Checkoutform,
} from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // Classical Method
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/product",
    element: <ProductOverview />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout-form",
    element: <Checkoutform />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
