import React from "react";
import AddressCart from "../addressSection/AddressCart";
import HomeCarousel from "../../components/home/HomeCarousel";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteCartItemAsync,
  selectCartLoader,
  selectedCartItem,
} from "../../components/cart/cartSlice";
import { selectLoggedInUser } from "../../components/auth/authSlice";
import { createOrderAsync, selectOrder } from "../../features/Order/orderSlice";

function CheckoutForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectedCartItem);
  const user = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const loader = useSelector(selectCartLoader);
  const address = useSelector((state) => state.address);
  const totalAmount = parseInt(
    items.reduce((amount, item) => amount + item.price * item.quantity, 0)
  );
  const totalDiscount = items.reduce(
    (discount, item) => discount + item.discount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const AvgDiscount = parseInt(totalDiscount / totalItems);

  const handleRemoveCartItem = (id) => {
    console.log(id);
    dispatch(deleteCartItemAsync(id));
  };

  const handleOrder = async () => {
    if (!address.address) {
      toast.error("select Address Please");
    } else {
      const order = {
        orderItems: items,
        totalAmount,
        totalDiscount: AvgDiscount,
        totalItems,
        userId: user,
        address: address.address,
      };
      await dispatch(createOrderAsync(order)).then(() => {
        navigate("/Payment");
      });
    }
  };

  return (
    <>
      {!address && toast.error("select Address Please")}
      {!items.length > 0 && loader && (
        <Navigate to={"/Product"} replace={true} />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-lg lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
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

                        <div className="flex flex-1 justify-end text-sm items-center">
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-sky-400 hover:text-sky-500"
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
                <p>{totalAmount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Discount</p>
                <p>{AvgDiscount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Price</p>
                <p>{parseInt(totalAmount)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total items in Cart</p>
                <p>{totalItems}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>

              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Link
                  to={"/address"}
                  className="font-medium text-sky-400 hover:text-sky-500 px-2"
                >
                  Add New Address
                </Link>
                <p className="flex px-2">
                  or{" "}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-sky-400 hover:text-sky-500 px-2"
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
          <div
            onClick={handleOrder}
            className="flex items-center justify-center rounded-lg border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-sky-400 hover:bg-sky-500"
          >
            Place Order
          </div>
        </div>
        <div className="py-10 flex flex-col justify-center px-3 lg:px-6 space-y-4">
          <HomeCarousel sectionName={"Recomended Products"} />
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
