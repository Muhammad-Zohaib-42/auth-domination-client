"use client";

import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

type FormData = {
  name: string,
  username: string,
  email: string,
  password: string
}

const RegisterForm = () => {
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
        <label className="text-slate-500 dark:text-slate-400" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className={`border ${errors.name ? "border-red-300 focus:border-red-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-700"} rounded px-3 py-1 outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:text-slate-600 disabled:dark:text-slate-300 transition-all`}
          type="text"
          id="name"
          disabled={isSubmitting}
        />
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-slate-500 dark:text-slate-400" htmlFor="username">
          Username
        </label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be atleast 3 characters",
            },
            maxLength: {
              value: 30,
              message: "Username cannot exceed 30 characters",
            },
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/,
              message:
                "Username must start with a letter and contain only letters, numbers, and underscores",
            },
          })}
          className={`border ${errors.username ? "border-red-300 focus:border-red-500" : "border-slate-300 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-700"} rounded px-3 py-1 outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:text-slate-600 disabled:dark:text-slate-300 transition-all`}
          type="text"
          id="username"
          disabled={isSubmitting}
        />
        <p className="text-sm text-red-500">{errors.username?.message}</p>
      </div>
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
        <label className="text-slate-500 dark:text-slate-400" htmlFor="password">
          Password
        </label>
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
        Register
      </button>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Already have an account !{" "}
        <Link
          className="text-indigo-600 dark:text-indigo-500 hover:font-medium hover:underline outline-none focus:font-medium focus:underline"
          href="/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
