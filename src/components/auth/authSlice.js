import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, checkUser } from "./auth";
const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
  Success: false,
}

export const createUserAsync = createAsyncThunk(
  "user/createUser", async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
)

export const checkUserAsync = createAsyncThunk(
  "user/checkUser", async (userData) => {
    const response = await checkUser(userData);
    return response.data;
  }
)

export const signoutUserAsync = createAsyncThunk("user/logout", async () => {
  const response = await logout()
  return response.data;
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // update the state
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // update the state
      })
  },
})
export const selectLoggedInUser = (state) => state.auth.loggedInUser
export default userSlice.reducer;