import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    amount: "$180.00",
    discount: "50% Off",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    amount: "$132.00",
    discount: "70% Off",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

function Cart() {
  const [open, setOpen] = useState(true);
  return (
    <div className="mx-auto max-w-7xl bg-gray-50 px-4 sm:px-6 lg:px-8 pt-5">
      <h2 className=" font-bold tracking-light text-gray-900 text-xl sm:text-2xl lg:text-4xl xl:text-6xl text-center">
        Cart
      </h2>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col gap-1">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="ml-4">{product.price}</p>
                    </div>
                    <p className="text-gray-600 mt-1 text-base">
                      {product.color}
                    </p>
                    <div className=" flex space-x-5 items-center text-gray-900 mt-4">
                      <p className=" font-semibold">{product.price}</p>
                      <p className="opacity-60 line-through">
                        {product.amount}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {product.discount}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 justify-between text-sm items-center">
                    <div className="text-gray-500 flex items-center space-x-2">
                      <IconButton>
                        <RemoveCircleOutlineIcon sx={{ color: "#9333ea" }} />
                      </IconButton>
                      <span className="border text-gray-700 py-1 px-3">1</span>

                      <IconButton>
                        <AddCircleOutlineIcon sx={{ color: "#9333ea" }} />
                      </IconButton>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link
            to="/checkout-form"
            className="flex items-center justify-center rounded-lg border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-violet-600 hover:bg-violet-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link to="/">
              <button
                type="button"
                className="font-medium text-violet-600 hover:text-violet-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
