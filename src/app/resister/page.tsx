"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";



const ResisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  type Inputs = {
    userName : string;
    email: string;
    password: any;
  };

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
 
  }
  return (
    <div className="container max-w-full mx-auto h-[100dvh]">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-[50%] ">
                <div className="mb-5 pb-1 border-b-2 text-center font-base text-gray-700">
                  <span>
                    By <a className="text-blue-500">SudsCart</a>
                  </span>
                </div>
                <div className="text-center font-semibold text-black">
                  Create your Account!
                </div>

                <form className="mt-t" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        User Name
                      </span>
                      <input
                        placeholder="Name" type="Name"  
                        {...register("userName", { required: true })}
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        Email
                      </span>
                      <input
                        placeholder="Email" type="email"
                        {...register("email", { required: true })}
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">
                        Password
                      </span>
                      <div className="relative">
                        <input
                        {...register("password", { required: true })}
                          placeholder="password"
                          type={showPassword ? "text" : "password"}
                          className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          <svg
                            className="h-6 text-gray-700 cursor-pointer"
                            fill="none"
                            onClick={() => setShowPassword(!showPassword)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <label className="block text-gray-500 font-bold my-4">
                        <input
                          type="checkbox"
                          className="leading-loose text-pink-600"
                        />
                        <span className="py-2 text-sm text-gray-600 leading-snug">
                          {" "}
                          Remember Me{" "}
                        </span>
                      </label>
                      <label className="block text-gray-500 font-bold my-4">
                      <Link href={'/login'}
                         
                          className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                        >
                         <span>Login Now ?</span>
                         </Link>
                      
                      </label>
                    </div>
                    <button className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResisterPage;
