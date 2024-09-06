import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createAddress, getAddress, removeAddress } from './addressApi';

const initialState = {
  status: "idile",
  data: [],
  Message: null,
  error: "",
  address: null
}

export const createAddressAsync = createAsyncThunk("address/create", async (addressData) => {
  const response = await createAddress(addressData);
  console.log(response)
  return response;
})

export const readAddressAsync = createAsyncThunk("address/get", async () => {
  const response = await getAddress();
  console.log(response.data)
  return response.data;
})

export const updateAddressAsync = createAsyncThunk("address/update", async (addressData) => {
  const response = await removeAddress(addressData)
  return response.data;
})

export const deleteAddressAsync = createAsyncThunk("address/delete", async (addressId) => {
  const response = await removeAddress(addressId)
  return response.data;
})

export const AddressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    userSelectedAddress: (state, action) => {
      state.address = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAddressAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createAddressAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.data.push(action.payload.data)
        state.Message = action.payload.message
      })
      .addCase(readAddressAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(readAddressAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.data = action.payload
      })
      .addCase(readAddressAsync.rejected, (state, action) => {
        state.status = "rejected",
          state.error = action.error
      })
      .addCase(deleteAddressAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteAddressAsync.fulfilled, (state, action) => {
        state.status = "idle",
          state.data = action.payload

      })
      .addCase(deleteAddressAsync.rejected, (state, action) => {
        state.status = "rejected",
          state.error = action.error
      })
  },
})
export const { userSelectedAddress } = AddressSlice.actions;
export const selectedAddress = (state) => state.address.data;
export const AddressMessage = (state) => state.address.Message;
export default AddressSlice.reducer;