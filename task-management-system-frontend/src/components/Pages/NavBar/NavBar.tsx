import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Bell, Search } from "lucide-react";
import React from "react";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <>
      <div className="w-full bg-neutral-800 py-5 overflow-hidden">
        <div className="flex items-center justify-between px-20">
          {/* Left section with logo and welcome message and search bar*/}
          <div className="flex items-center gap-x-10">
            <div className="flex items-center justify-center h-16 w-16 min-w-16 mr-4">
              <img
                className="h-full w-full object-contain"
                src="https://png.pngtree.com/png-clipart/20240709/original/pngtree-white-dog-logo-with-blue-circle-vector-png-image_15523760.png"
                alt="logo"
              />
            </div>

            <div className="flex flex-col text-white">
              <div className="font-bold text-2xl whitespace-nowrap">Welcome back, Gab!</div>
              <div className="flex flex-row gap-1">
                <div className="font-medium text-sm whitespace-nowrap">You have</div>
                <div className="font-medium text-sm text-cyan-500 whitespace-nowrap">3</div>
                <div className="font-medium text-sm whitespace-nowrap">active tasks</div>
              </div>
            </div>

            <Input
              type="search"
              placeholder="Search..."
              className="text-white shadow-none border-white border-1 focus-visible:border focus-visible:border-cyan-500 focus-visible:ring-0"
            />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-x-5">
            <Button className="bg-inherit group overflow-hidden duration-500 hover:bg-inherit transition-all text-neutral-100 shadow-none">
              <span className="inline-block transition-transform duration-500 group-hover:scale-120">
                + New Task
              </span>
            </Button>

            {/* Notification Button */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-inherit rounded-full transition-all duration-500"
              >
                <Bell
                  size={20}
                  className="transition-transform duration-500 group-hover:scale-150 text-white"
                />
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-900 text-xs text-white transition-transform duration-500 group-hover:scale-110">
                  3
                </span>
              </Button>
            </div>

            <Avatar className="h-10 w-10 ml-5">
              <AvatarImage
                src="https://i.pinimg.com/736x/0e/8a/f2/0e8af249915f7f2a79d48e344bafcee6.jpg"
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
