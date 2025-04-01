import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Bell, Search } from "lucide-react";
import React from "react";

const toPascalCase = (str: string): string => {
  // Handle empty string
  if (!str) return "";

  // Split the string by non-alphanumeric characters
  return str
    .split(/[^a-zA-Z0-9]/)
    .map((word) => {
      // Capitalize the first letter of each word and lowercase the rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

interface Props {
  activePage: string;
}

const NavBar = ({ activePage }: Props) => {
  return (
    <div className="flex justify-between items-center h-full w-full">
      <div className="text-white text-3xl font-bold pl-5">{toPascalCase(activePage)}</div>

      <div className="flex gap-3">
        <Input
          type="search"
          placeholder="Search..."
          className="text-white shadow-none border-neutral-700 border-1 focus-visible:border focus-visible:border-white focus-visible:ring-0 w-sm"
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
            className="bg-transparent hover:bg-transparent h-10 transition-all duration-300 group cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
