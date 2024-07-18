import React from "react";

function AddressCart() {
  return (
    <div>
      <h3 className="font-bold p-3 m-2 text-gray-900">Address Cart</h3>
      <div className="text-gray-900 border-gray-400 m-2 p-4 space-y-4 w-full hover:border-sky-400 rounded-lg border-spacing-1 border-2 hover:bg-gray-50 max-w-md">
        <p className="font-semibold">Name</p>
        <p className="">streetAddress</p>
        <div className="mt-2 space-y-1">
          <p className=" font-semibold">Phone Number</p>
          <p className=" ">123456789</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCart;
