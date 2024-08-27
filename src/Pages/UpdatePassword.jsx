import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  selectLoggedInUser,
  createUserAsync,
} from "../../components/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPasswordAsync } from "../components/auth/authSlice";

function UpdatePassword() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLoggedInUser);
  return (
    <>
      {user?.success === true && <Navigate to={"/"}></Navigate>}
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-b shadow-md rounded-lg border-gray-400 max-w-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(
                (data) => (
                  dispatch(updateUserPasswordAsync(data)), console.log(data)
                )
              )}
            >
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500 p-1">
                      {errors.password?.message}
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
                        value === formValues.password ||
                        "Password is not match",
                    })}
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mt-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
