"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

// import SignOutButton from "./SignOutButton";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SignInModal from "./auth/SignInModal";

const Navbar = () => {
  const [session, setSession] = useState<boolean>(false);

  const navLinks = [
    { label: "Market place", url: "/" },
    { label: "Pricing", url: "/pricing" },
    { label: "About", url: "/contact-us" },
    { label: "Services", url: "/contact-us" },
    { label: "Partnership", url: "/contact-us" },
  ];

  return (
    <>
      <div className=" fixed backdrop-blur-sm bg-white/75  z-50 top-0 left-0 right-0 h-20  shadow-sm flex items-center justify-between ">
        <div className=" container max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link
            href="/"
            className={` text-gray-900 font-Poppins font-bold text-3xl`}
          >
            Med<span className="text-primary">Verse</span>
          </Link>

          <div className=" text-[14px] hidden lg:flex whitespace-nowrap items-center text-base font-Poppins text-gray-900">
            <Link
              href={navLinks[0].url}
              className=" hover:text-primary mr-5 transition-colors duration-500"
            >
              {navLinks[0].label}
            </Link>
            <Link
              href={navLinks[1].url}
              className=" hover:text-primary mr-5 transition-colors duration-500"
            >
              {navLinks[1].label}
            </Link>
            <Link
              href={navLinks[2].url}
              className=" hover:text-primary mr-5 transition-colors duration-500"
            >
              {navLinks[2].label}
            </Link>
            <Link
              href={navLinks[3].url}
              className=" hover:text-primary flex items-center mr-5 transition-colors duration-500"
            >
              {navLinks[3].label}
              <span>
                <ChevronDownIcon className=" ml-1 w-4 h-4" />
              </span>
            </Link>
            <Link
              href={navLinks[4].url}
              className=" hover:text-primary flex items-center ba mr-5 transition-colors duration-500"
            >
              {navLinks[4].label}
              <span>
                <ChevronDownIcon className=" ml-1 w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className=" lg:hidden">
            <Bars3Icon className=" h-7 w-7 stroke-[2]" />
          </div>

          <div className=" hidden lg:flex gap-4">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Dashboard
                </Link>
                {/* <SignOutButton /> */}
              </>
            ) : (
              <>
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "text-base whitespace-nowrap bg-transparent rounded-full"
                  )}
                  href={"/sign-in"}
                >
                  Sign in
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "text-base whitespace-nowrap rounded-full"
                  )}
                  href={"/sign-up"}
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <SignInModal /> */}
    </>
  );
};

export default Navbar;
