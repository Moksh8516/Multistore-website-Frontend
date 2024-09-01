import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartItemAsync,
  selectCartLoader,
  selectedCartItem,
  updateCartAsync,
} from "./cartSlice";
import { selectLoggedInUser } from "../auth/authSlice";

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
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(selectedCartItem);
  const user = useSelector(selectLoggedInUser);
  const loader = useSelector(selectCartLoader);
  const increment = (id) => {
    dispatch(updateCartAsync(id, 1)); // Increment by 1
  };

  const decrement = (id) => {
    dispatch(updateCartAsync(id, -1)); // Decrement by 1
  };

  const handleQuantityChange = (e, id) => {
    const newQuantity = e.target.value;
    console.log(newQuantity);
    if (newQuantity > 0) {
      dispatch(updateCartAsync(id, newQuantity));
    }
  };

  const handleRemoveCartItem = (id) => {
    dispatch(deleteCartItemAsync(id));
  };

  const totalAmount = items.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  return (
    <>
      {/* {!items.length && loader && <Navigate to={"/"} replace={true} />} */}
      <div className="mx-auto max-w-7xl bg-gray-50 px-4 sm:px-6 lg:px-8 pt-5">
        <h2 className=" font-bold tracking-light text-gray-900 text-xl sm:text-2xl lg:text-4xl xl:text-6xl text-center">
          Cart
        </h2>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((product) => (
                <li key={product._id} className="flex py-6">
                  <div className="max-h-24 max-w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.thumbnail}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-1 md:ml-4 flex flex-1 flex-col gap-1">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-1 md:ml-4">{product.price}</p>
                      </div>
                      <p className="text-gray-600 mt-1 text-base">
                        {product.brand}
                      </p>
                      <div className=" flex space-x-5 items-center text-gray-900 mt-4">
                        <p className=" font-semibold sm:text-sm line-through text-gray-600">
                          {Math.round(
                            product.price * (1 + product.discount / 100)
                          )}
                        </p>
                        <p className="opacity-60 line-through sm:text-sm">
                          {product.amount}
                        </p>
                        <p className="text-green-600 font-semibold sm:text-sm">
                          -{product.discount}%
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 justify-between text-sm items-center">
                      <div className="text-gray-500 flex items-center space-x-2">
                        <IconButton
                          onClick={() =>
                            decrement(product._id, product.quantity)
                          }
                          disabled={product.quantity <= 1}
                        >
                          <RemoveCircleOutlineIcon sx={{ color: "#9333ea" }} />
                        </IconButton>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(e, product._id)}
                          className="w-12 text-center border rounded-md"
                          min="1"
                        />
                        <IconButton
                          onClick={() =>
                            increment(product._id, product.quantity)
                          }
                        >
                          <AddCircleOutlineIcon sx={{ color: "#9333ea" }} />
                        </IconButton>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleRemoveCartItem(product._id)}
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
            <p>{parseInt(totalAmount)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total items in Cart</p>
            <p>{totalItems}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout-form"
              className="flex items-center justify-center rounded-lg border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-sky-400 hover:bg-sky-500"
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
                  className="font-medium text-sky-600 hover:text-sky-400"
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
    </>
  );
}

export default Cart;
