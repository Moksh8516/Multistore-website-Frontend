import React from "react";
import AddressCart from "../addressSection/AddressCart";
import HomeCarousel from "../../components/home/HomeCarousel";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItemAsync,
  selectedCartItem,
  updateCartAsync,
} from "../../components/cart/cartSlice";

function CheckoutForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectedCartItem);
  const totalAmount = items.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const handleQuantity = (e, product) => {
    dispatch(updateCartAsync({ ...product, quantity: e.target.value }));
  };

  const handleRemoveCartItem = (e, id) => {
    dispatch(deleteCartItemAsync(id));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className=" font-bold tracking-light text-gray-900 text-xl sm:text-2xl lg:text-4xl xl:text-6xl text-center">
            Cart
          </h2>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {items.map((product) => (
                  <li key={product.id} className="flex py-6">
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
                              product.price *
                                (1 + product.discountPercentage / 100)
                            )}
                          </p>
                          <p className="opacity-60 line-through sm:text-sm">
                            {product.amount}
                          </p>
                          <p className="text-green-600 font-semibold sm:text-sm">
                            -{product.discountPercentage}%
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-1 justify-between text-sm items-center">
                        <div className="text-gray-500 flex items-center space-x-2">
                          <IconButton>
                            <RemoveCircleOutlineIcon
                              sx={{ color: "#9333ea" }}
                            />
                          </IconButton>
                          <select
                            className="border text-gray-700 py-1 px-3 select-none"
                            onChange={(e) => {
                              handleQuantity(e, product);
                            }}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <IconButton>
                            <AddCircleOutlineIcon sx={{ color: "#9333ea" }} />
                          </IconButton>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={(e) => handleRemoveCartItem(e, product.id)}
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
              <p>{totalAmount}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total items in Cart</p>
              <p>{totalItems}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

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
        <AddressCart />
      </div>
      <div className="mt-6">
        <Link
          to="/checkout-form"
          className="flex items-center justify-center rounded-lg border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-violet-600 hover:bg-violet-700"
        >
          Place order
        </Link>
      </div>
      <div className="py-10 flex flex-col justify-center px-3 lg:px-6 space-y-4">
        <HomeCarousel sectionName={"Recomended Products"} />
      </div>
    </>
  );
}

export default CheckoutForm;
