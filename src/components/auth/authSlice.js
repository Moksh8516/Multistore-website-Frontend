import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, checkUser, logout, forgetPassword, ResetPassword, updateProfile, updatePassword, updateProfileImage, getProfile, reLoginUser } from "./auth";
import { toast } from "react-toastify";
const initialState = {
  loggedInUser: null,
  status: "idle",
  message: null,
  error: null,
  accessToken: null,
  Success: false,
}

export const createUserAsync = createAsyncThunk(
  "user/createUser", async (userData) => {
    const response = await createUser(userData);
    return response;
  }
)

export const checkUserAsync = createAsyncThunk(
  "user/checkUser", async (userData) => {
    const response = await checkUser(userData);
    if (response.success === true) {
      toast.success(response.message)
    }
    return response.data;
  }
)

export const signoutUserAsync = createAsyncThunk("user/logout", async () => {
  const response = await logout()
  if (response.success === true) {
    toast.success(response.message)
  }
  return response.data;
})

export const ForgetUserPasswordAsync = createAsyncThunk("user/forgot-password", async (email) => {
  const response = await forgetPassword(email);
  return response;
})

export const ResetUserPasswordAsync = createAsyncThunk("user/resetPassword", async (newPassword) => {
  const response = await ResetPassword(newPassword);
  if (response.success === true) {
    toast.success(response.message)
  }
  return response.data;
})

export const updateUserProfileAsync = createAsyncThunk("user/updateProfile", async (data) => {
  const response = await updateProfile(data);
  return response.data;
})

export const updateUserPasswordAsync = createAsyncThunk("user/updatePassword", async (data) => {
  const response = await updatePassword(data);
  return response.data;
})

export const updateUserProfileImageAsync = createAsyncThunk("user/updateProfileImage", async (data) => {
  const response = await updateProfileImage(data);
  return response.data;
})

export const getUserProfileAsync = createAsyncThunk("user/profile", async () => {
  const response = await getProfile();
  return response.data;
})

export const reLoginUserAsync = createAsyncThunk('user/refreshToken', async () => {
  const response = await reLoginUser()
  return response.data
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
        state.message = action.payload.message // update the state
      })
      .addCase(checkUserAsync.rejected, (state) => {
        state.status = "Rejected"
        state.error = action.payload.error
      })
      .addCase(signoutUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(signoutUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null; // update the state
        state.accessToken = null; // update the state
      })
      .addCase(ForgetUserPasswordAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(ForgetUserPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message // update the state
      })
      .addCase(ResetUserPasswordAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(ResetUserPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message // update the state
      })
      .addCase(updateUserProfileAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // update the state
        state.message = action.payload.message // update the state
      })
      .addCase(reLoginUserAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(reLoginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // update the state
        state.message = action.payload.message // update the state
      })
      .addCase(getUserProfileAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUserProfileAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload; // update the state
        state.message = action.payload.message // update the state
      })
      .addCase(updateUserPasswordAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUserPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message // update the state
      })
      .addCase(updateUserProfileImageAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUserProfileImageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message // update the state
      })
  },
})

export const selectLoggedInUser = (state) => state.auth.loggedInUser
export const selectUserMessage = (state) => state.auth.message
export const GivenErrors = (state) => state.auth.error
export default userSlice.reducer;