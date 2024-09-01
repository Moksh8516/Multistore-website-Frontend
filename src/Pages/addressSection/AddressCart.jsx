import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedAddress,
  deleteAddressAsync,
} from "../../features/Address/addressSlice";
import { selectLoggedInUser } from "../../components/auth/authSlice";
import CheckoutForm from "../checkout/CheckoutForm";

function AddressCart() {
  const [selectAddress, setSelectAddress] = useState(null);
  const dispatch = useDispatch();
  const address = useSelector(selectedAddress);
  const handleRemoveAddress = (id) => {
    dispatch(deleteAddressAsync(id));
  };
  const handleAddress = (e) => {
    setSelectAddress(address[e.target.value]);
    console.log(address[e.target.value]);
  };
  // <CheckoutForm address={selectAddress} />;
  return (
    <div className="col-span-2">
      <h3 className="font-bold p-3 m-2 text-gray-900">Address Cart</h3>
      {address &&
        address.map((address, index) => (
          <div className="flex gap-2 items-center" key={address._id}>
            <input
              type="checkbox"
              className="h-4 w-4 rounded-full border-gray-300 bg-gray-200 border-2 text-sky-300 focus:ring-sky-500"
              onChange={handleAddress}
              value={index}
            />
            <div className="text-gray-900 border-gray-400 m-2 p-4 space-y-2 w-full hover:border-sky-400 rounded-lg border-spacing-1 border-2 hover:bg-gray-50 max-w-md">
              <p className="font-semibold">{address.userName}</p>
              <p className="font-semibold">{address.building_no}</p>
              <p className="font-medium text-base">{address.street}</p>
              <div className=" flex gap-2 items-center">
                <p className=" font-medium text-sm">Phone Number :</p>
                <p className="text-base">{address.mobile_no}</p>
              </div>
              <div className="flex gap-2 justify-end mx-3">
                <button>
                  <EditNoteIcon className="text-dark-900 hover:text-sky-400" />
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveAddress(address._id)}
                >
                  <DeleteIcon className="text-dark-900 hover:text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AddressCart;
