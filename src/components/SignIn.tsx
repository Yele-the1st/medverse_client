"use client";

import { FC } from "react";

import { useState } from "react";
import useValidate from "../hooks/useValidate";
import { emailValidation, passwordValidation } from "../helpers/validations";
import Link from "next/link";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  EyeIcon,
  InformationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/Button";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  //   // Initialize useValidate hook
  //   const nameInput = useValidate(emailValidation);

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // Mark input as touched and validate
  //     nameInput.formSubmitHandler();

  //     if (!nameInput.isValid) {
  //       alert(nameInput.errorMessage);
  //     }
  //   };

  return (
    <div className="w-screen flex min-h-screen bg-[#f9f9f9] font-Poppins">
      <div className=" relative w-[526px] px-[72px] py-[80px] hidden md:h-screen text-white bg-slate-900 lg:flex flex-col justify-between items-center">
        <div>
          <Link
            href="/"
            className={` text-white font-Poppins font-bold text-3xl`}
          >
            Med<span className="text-primary">Verse</span>
          </Link>
        </div>
        <div className=" text-center">
          <h1 className="text-4xl font-black tracking-tight font-Poppins text-white sm:text-5xl">
            LETS RECONNECT
          </h1>
          <p className="mt-6 text-base leading-8">
            Welcome back! Log in now to reconnect with your patience journey and
            continue growing with our community
          </p>
        </div>
        <div className=" absolute top-44 right-[-100px]">
          <div className=" flex flex-col items-center justify-center  p-6 rounded-md w-[409px] h-[188px]  shadow-md bg-gradient-to-r  from-gray-900 via-gray-900 to-gray-500 text-white">
            <p className="text-white">
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.
            </p>
          </div>
        </div>
      </div>
      <div className=" z-10 md:overflow-y-scroll w-screen lg:w-[calc(100vw-526px)]:h-screen justify-between items-center  flex flex-col pl-0 ">
        <div className=" font-Poppins py-6 px-3  lg:px-10 w-full flex items-center justify-between">
          <Link href={"/"} className="flex cursor-pointer gap-2 items-center">
            <ChevronLeftIcon className=" w-5 h-5" />
            <p className=" text-sm">Return Home</p>
          </Link>
          <div className="flex gap-2 cursor-pointer items-center">
            <InformationCircleIcon className=" w-5 h-5" />
            <p className=" text-sm">Need Help?</p>
          </div>
        </div>
        <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-xl font-extrabold  text-gray-900">
              WELCOME BACK EXCLUSIVE MEMBER
            </h2>
            <h2 className="mt-2 uppercase text-center text-base font-medium leading-9 tracking-tight text-gray-900">
              LOG IN TO CONTINUE
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-[400px] sm:max-w-md">
            <form action="#" method="POST">
              <div className=" p-6 rounded-[35px] shadow-sm bg-white">
                <div className=" py-4 flex-1 flex flex-row items-center ">
                  <span className="flex select-none items-center pr-3 text-slate-500 sm:text-sm">
                    <EnvelopeIcon className="w-5 h-5" />
                  </span>
                  <input
                    name="email"
                    placeholder="Email"
                    type="text"
                    //   value={enteredEmail}
                    //   onChange={emailChangeHandler}
                    className=" outline-none font-light h-full w-full text-base overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                  />
                  {/* {emialInputHasError && (
                  <ExclamationTriangleIcon className="w-6 h-6 stroke-1  stroke-[red]" />
                )}
                {!emialInputHasError && enteredEmail && (
                  <CheckIcon className="w-6 h-6 stroke-2  stroke-[green]" />
                )} */}
                </div>

                <div className=" border-t ">
                  <div className=" flex flex-col relative w-full   ">
                    <div className=" py-4 flex-1 flex flex-row items-center ">
                      <span className="flex select-none items-center pr-3 text-slate-500 sm:text-sm">
                        <LockClosedIcon className="w-5 h-5" />
                      </span>
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        // value={enteredPassword}
                        // onChange={passwordChangeHandler}
                        className=" outline-none font-light h-full w-full text-base overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                      />
                      <EyeIcon className="w-6 h-6 stroke-1 " />
                    </div>
                  </div>
                  {/* {passwordHasError && (
                <p className=" text-red-500 mt-1 mb-3 text-xs">
                  {passwordError}
                </p>
              )} */}
                </div>
              </div>
              <div className=" mt-6">
                <Button type="submit" className=" w-full py-6 rounded-[35px]">
                  Sign in
                </Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-slate-500">
              Not a member yet?{" "}
              <Link
                href="#"
                className="font-semibold underline leading-6 text-primary hover:text-primary/80"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
        <div className=" py-6">
          <p className=" text-xs text-slate-400 text-center">
            Copyright 2021 - 2022 FoxHub Inc. All rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

{
  /* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={nameInput.value}
            onChange={nameInput.valueChangeHandler}
          />
        </label>
        {nameInput.hasError && (
          <div style={{ color: "red" }}>{nameInput.errorMessage}</div>
        )}
        <button type="submit">Submit</button>
      </form> */
}
