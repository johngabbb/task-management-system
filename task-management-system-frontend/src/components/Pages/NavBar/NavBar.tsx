import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <>
      <div className="w-full bg-neutral-800 py-5">
        <div className="flex items-center px-20">
          <div className="flex items-center h-16 w-16 mr-4">
            <img
              className="h-full w-full object-contain"
              src="https://png.pngtree.com/png-clipart/20240709/original/pngtree-white-dog-logo-with-blue-circle-vector-png-image_15523760.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-col text-white">
            <div className="font-bold text-2xl">Welcome back, Gab!</div>
            <div className="font-medium text-sm">You have 3 active tasks</div>
          </div>

          <Input type="search" placeholder="Search..." className="text-white mx-2 w-md" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
