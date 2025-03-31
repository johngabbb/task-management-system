import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Bell, Search } from "lucide-react";
import React from "react";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-between p-5">
      <div className="flex flex-col justify-start">
        <div className="text-white text-4xl mb-3 font-bold tracking-wide">Dashboard</div>
        <Button className="transition-all duration-300 group bg-transparent p-0 h-auto justify-start pointer-events-none">
          <span className="text-violet-900 text-sm font-medium transition-colors duration-300 group-hover:text-violet-700 pointer-events-auto cursor-pointer">
            You have 3 active tasks
          </span>
        </Button>
      </div>

      <div className="flex gap-3">
        <Input
          type="search"
          placeholder="Search..."
          className="text-white shadow-none border-white border-1 focus-visible:border focus-visible:border-violet-950 focus-visible:ring-0"
        />

        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-inherit rounded-full transition-all duration-500 cursor-pointer"
          >
            <Bell className="text-neutral-400 transition-colors duration-500 group-hover:text-white" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-900 text-xs text-white transition-colors duration-500 group-hover:bg-red-500">
              3
            </span>
          </Button>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <Button
            type="button"
            className="bg-transparent h-10 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3">
              <Avatar className="-ml-1">
                <AvatarImage
                  src="https://motionbgs.com/media/1192/sasuke-lightning-jutsu.jpg"
                  alt="@shadcn"
                  className="object-cover"
                />
                <AvatarFallback>GAB</AvatarFallback>
              </Avatar>
              <span className="text-neutral-300 transition-colors duration-300 group-hover:text-white">
                Gabriel Reyes
              </span>
            </div>
          </Button>

          <Button
            type="button"
            className="bg-violet-950 group w-auto overflow-hidden duration-500 hover:bg-violet-900 transition-all text-neutral-100 shadow-none cursor-pointer"
          >
            <span className="text-neutral-300 transition-colors duration-300 group-hover:text-white">
              + New Task
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
