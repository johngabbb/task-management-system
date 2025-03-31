import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] h-full w-full bg-neutral-900">
        <SideBar />

        <div className="grid grid-rows-[100px_1fr]">
          <NavBar />

          {/* MainContent */}
          <div className="bg-neutral-800 rounded-lg m-5">MAIN CONTENT</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
