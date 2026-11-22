"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

type FormData = {
  email: string,
  password: string
}

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  async function submitHandler(data: FormData) {
    await new Promise((res, rej) => {
      setTimeout(() => {
        console.log(data)
        res("promise resolved")
      }, 3000);
    })
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-75 w-[95%] mx-auto flex flex-col gap-2"
    >
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-500 dark:text-slate-400" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          className={`border ${errors.email ? "border-red-300 focus:border-red-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-700"} rounded px-3 py-1 outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:text-slate-600 disabled:dark:text-slate-300 transition-all`}
          type="email"
          id="email"
          disabled={isSubmitting}
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <label className="text-slate-500 dark:text-slate-400 grow" htmlFor="password">
            Password
          </label>
          <button disabled={isSubmitting} type="button" className="text-indigo-500 text-sm cursor-pointer outline-none focus:text-indigo-700 hover:text-indigo-700 focus:underline disabled:cursor-not-allowed disabled:hover:text-indigo-500 focus:font-medium">Forgot password?</button>
        </div>
        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be atleast 8 characters",
              },
              maxLength: {
                value: 50,
                message: "Password cannot exceed 50 characters",
              },
            })}
            className={`w-full border ${errors.password ? "border-red-300 focus:border-red-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-700"} rounded px-3 py-1 outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:text-slate-600 disabled:dark:text-slate-300 transition-all`}
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            disabled={isSubmitting}
          />
          <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer outline-none group">
            {isPasswordVisible ? <EyeClosed size={20} className="text-slate-500 group-focus:text-slate-800 group-focus:dark:text-slate-300" /> : <Eye size={20} className="text-slate-500 group-focus:text-slate-800 group-focus:dark:text-slate-300" />}
          </button>
        </div>
        <p className="text-sm text-red-500">{errors.password?.message}</p>
      </div>
      <button
      type="submit"
        disabled={isSubmitting}
        className="bg-indigo-600 text-slate-50 px-2 py-1.5 rounded my-1 cursor-pointer transition-all hover:bg-indigo-700 outline-none focus:bg-indigo-900 focus:dark:bg-indigo-800 flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting && <ClipLoader size={16} color="#ffffff" />}
        Login
      </button>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Don&apos;t have an account !{" "}
        <Link
          className="text-indigo-600 dark:text-indigo-500 hover:font-medium hover:underline outline-none focus:font-medium focus:underline"
          href="/register"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
