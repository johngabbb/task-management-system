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
        {/* Sidebar */}
        <div className="bg-neutral-800 overflow-hidden rounded-lg ml-5 my-5 p-5">
          <div className="flex flex-col gap-3">
            <Button>Hunter Task</Button>
            <Button>Dashboard</Button>
            <Button>Tasks</Button>
            <Button>Backlog</Button>
            <Button>Team</Button>
            <Button>Projects</Button>
            <Button>Settings</Button>
          </div>
        </div>

        <div className="grid grid-rows-[100px_1fr]">
          {/* Navbar */}
          <NavBar />

          {/* MainContent */}
          <div className="bg-neutral-800 rounded-lg m-5">MAIN CONTENT</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
