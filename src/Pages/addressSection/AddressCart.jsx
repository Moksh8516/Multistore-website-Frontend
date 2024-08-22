import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
const address = [
  { id: 1, name: "John Doe", street: "123 Main St", phone: 1234565 },
];

function AddressCart() {
  return (
    <div className="col-span-2">
      <h3 className="font-bold p-3 m-2 text-gray-900">Address Cart</h3>
      {address.map((address) => (
        <div className="flex gap-2 items-center" key={address.id}>
          <input type="radio" className="h-4 w-4" />
          <div className="text-gray-900 border-gray-400 m-2 p-4 space-y-4 w-full hover:border-sky-400 rounded-lg border-spacing-1 border-2 hover:bg-gray-50 max-w-md">
            <p className="font-semibold">{address.name}</p>
            <p className="font-medium text-base">{address.street}</p>
            <div className="mt-1 flex gap-2 items-center">
              <p className=" font-medium text-sm">Phone Number :</p>
              <p className="text-base">{address.phone}</p>
            </div>
            <div className="flex gap-2 justify-end mr-3">
              <EditNoteIcon className="text-dark-900 hover:text-sky-400" />
              <DeleteIcon className="text-dark-900 hover:text-red-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddressCart;
