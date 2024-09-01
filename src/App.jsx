// import "./App.css";

// const router = createBrowserRouter([
//   // Classical Method
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/view",
//         element: <ProductOverview />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/product",
//         element: <ProductList />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/checkout-form",
//         element: <Checkoutform />,
//       },
//       {
//         path: "/order",
//         element: <OrderStatus />,
//       },
//     ],
//   },
// ]);

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Payment from "./Pages/Payment";
const initialOptions = {
  "client-id": "YOUR-CLIENT-ID-HERE",
  currency: "USD",
  intent: "capture",
};
function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Payment />
    </PayPalScriptProvider>
  );
}

export default App;
