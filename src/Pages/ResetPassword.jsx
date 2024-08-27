import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetUserPasswordAsync,
  selectUserMessage,
} from "../components/auth/authSlice";
import { useNavigate, useParams, Link } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const userMsg = useSelector(selectUserMessage);
  const navigate = useNavigate();
  console.log(token);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigateRoute = () => {
    if (userMsg) {
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(ResetUserPasswordAsync({ data, token: token }));
            })}
          >
            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="newPasword"
                  {...register("newPassword", {
                    required: "Password is required",
                  })}
                  type="Password"
                  placeholder="New Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                />
                {errors.newPassword && (
                  <span className="text-center text-sm text-red-500">
                    {errors.newPassword?.message}
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
                  id="confirm Password"
                  {...register("ConfirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value, formValues) =>
                      value === formValues.newPassword ||
                      "Password is not match",
                  })}
                  type="Password"
                  placeholder="Confirm Password"
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
          {userMsg && (
            <p className="mt-10 text-center text-lg font-semibold text-sky-400 ">
              {userMsg}
            </p>
          )}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Back to Login Page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default ResetPassword;
