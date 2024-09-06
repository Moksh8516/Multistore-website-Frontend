import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  selectLoggedInUser,
  createUserAsync,
  updateUserPasswordAsync,
  selectUserMessage,
} from "../components/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLoggedInUser);
  const userMsg = useSelector(selectUserMessage);

  const navigateRoute = () => {
    if (userMsg) {
      toast.success(userMsg);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-b shadow-md rounded-lg border-gray-400 max-w-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Change Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) =>
                dispatch(updateUserPasswordAsync(data))
              )}
            >
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="oldPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Old Password
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="oldPassword"
                    {...register("oldPassword", {
                      required: "old Password is required",
                    })}
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                  />
                  {errors.oldPassword && (
                    <span className="text-sm text-red-500 p-1">
                      {errors.oldPassword?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="newPassword"
                    {...register("newPassword", {
                      required: "new Password is required",
                    })}
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                  />
                  {errors.newPassword && (
                    <span className="text-sm text-red-500 p-1">
                      {errors.newePassword?.message}
                    </span>
                  )}
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="confirm_Password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm_Password"
                    {...register("ConfirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value, formValues) =>
                        value === formValues.newPassword ||
                        "Password is not match",
                    })}
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                  />
                  {errors.ConfirmPassword && (
                    <span className="text-sm text-red-500 p-1">
                      {errors.ConfirmPassword?.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={navigateRoute}
                  className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
