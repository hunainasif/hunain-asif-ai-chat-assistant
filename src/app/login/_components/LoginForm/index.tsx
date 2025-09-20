import { EyeClosed, EyeIcon } from "lucide-react";
import React from "react";

export default function LoginForm() {
  return (
    <div className=" flex flex-col  gap-4 justify-center w-4/5 h-4/5 rounded-4xl bg-light-primary text-light-secondary ">
      <div className="flex flex-col gap-1 w-full items-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <span className="text-xl font-light">
          Sign in to your account to continue
        </span>
      </div>
      <form action="" className="flex flex-col gap-4 w-full  px-5">
        <div className="flex flex-col  gap-2">
          <label htmlFor="" className="text-xl">
            Email
          </label>
          <input
            placeholder="Enter Your Email"
            className="p-3 border-2 border-solid rounded-full border-light-secondary focus:outline-none"
            type="email"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input
            placeholder="Enter Your Password"
            type="password"
            className="p-3 border-2 border-solid rounded-full border-light-secondary focus:outline-none"
            name=""
            id=""
          />
          {/* <EyeIcon />
          <EyeClosed /> */}
        </div>
        <button
          type="submit"
          className="bg-light-secondary text-light-primary p-4 cursor-pointer rounded-full text-xl font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
