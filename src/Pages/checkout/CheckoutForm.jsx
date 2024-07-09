import React from "react";
import { Cart } from "../../components/index";

function CheckoutForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);

    const address = {
      username: data.get("username"),
      mobileNumber: data.get("mobileNumber"),
      Flat_no: data.get("Flat_no"),
      streetAddress: data.get("streetAddress"),
      landmark: data.get("landmark"),
      state: data.get("state"),
      postalCode: data.get("postal-code"),
      city: data.get("city"),
    };
    console.log(address);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form className="bg-gray-100 px-4 py-4" onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Delivery Address
                </h2>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900 mt-3"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset hover:bg-sky-50 bg-gray-100 ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>India</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name (First and Last name)
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-400 sm:max-w-md">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 bg-gray-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile number
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-400 sm:max-w-md">
                        <input
                          type="number"
                          name="mobileNumber"
                          id="Number"
                          autoComplete="Number"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 bg-gray-100 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="10-digit mobile number without prefixes"
                        />
                      </div>
                    </div>
                    <p className="mt-1 text-xs leading-6 text-gray-800">
                      May be used to assist delivery
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-800">
                  Use a permanent address where you can receive Parcel.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100  hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="Flat_no"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Flat, House no, Building, Company, Apartment
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Flat_no"
                        id="Flat_no"
                        autoComplete="Flat_no"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100  hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="streetAddress"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Area, Street, Sector, Village
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="streetAddress"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100 hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="landmark"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Landmark
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        autoComplete="landmark"
                        placeholder="E.g. near Park hospital"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100 hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      PinCode
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="6-digit Pincode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100 hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Town/City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100 hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                    <div className="mt-2">
                      <select
                        id="state"
                        name="state"
                        autoComplete="state"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900  bg-gray-100 hover:bg-sky-50 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>Select</option>
                        <option>Punjab</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default CheckoutForm;
