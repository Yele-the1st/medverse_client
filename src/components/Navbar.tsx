"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";

import SignOutButton from "./SignOutButton";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [session, setSession] = useState<boolean>(false);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Pricing", url: "/pricing" },
    { label: "Contact us", url: "/contact-us" },
    { label: "FAQs", url: "/contact-us" },
  ];

  return (
    <div className=" fixed backdrop-blur-sm bg-white/75  z-50 top-0 left-0 right-0 h-20  shadow-sm flex items-center justify-between ">
      <div className=" container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={` text-gray-900 font-Poppins font-bold text-3xl`}
        >
          Med<span className="text-primary">Verse</span>
        </Link>

        <div className=" hidden lg:flex">
          <NavLinks navLinks={navLinks} />
        </div>

        <div className="  md:hidden">
          <Bars3Icon className=" h-7 w-7 stroke-[2]" />
        </div>

        <div className=" hidden md:flex gap-4">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-base whitespace-nowrap rounded-full"
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
  );
};

export default Navbar;
