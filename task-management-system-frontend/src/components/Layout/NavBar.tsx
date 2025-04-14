import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Bell, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { User } from "../types";

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

const getUserInitials = (str: string | null): string => {
  if (!str || str === null) return "";

  const parts = str.trim().split(" ");

  if (parts.length === 1) {
    // If there's only one name, take up to the first two characters
    return parts[0].substring(0, Math.min(2, parts[0].length)).toUpperCase();
  }

  // If there are multiple names, take the first character of the first and last name
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

interface Props {
  activePage: string;
}

const NavBar = ({ activePage }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
                <AvatarFallback className="bg-blue-500 text-white rounded-full h-full w-full">
                  {getUserInitials(user?.name || "")}
                </AvatarFallback>
              </Avatar>
              <span className="text-neutral-300 transition-colors duration-300 group-hover:text-white">
                {user?.name}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
