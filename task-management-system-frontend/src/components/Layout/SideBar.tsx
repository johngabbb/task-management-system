import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  ListTodo,
  Users,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import wolfLogo from "../../assets/wolf-logo.png";
import { useAuth } from "@/hooks/AuthContext";

interface Props {
  movePage: (e: string) => void;
  activePage: string;
}

const SideBar = ({ movePage, activePage }: Props) => {
  const auth = useAuth();

  const onSubmit = () => {
    try {
      auth.logout();
    } catch (error) {
      console.error("error logging out", error);
    }
  };

  const getButtonClass = (page: string) => {
    return activePage === page
      ? "cursor-pointer justify-start shadow-none bg-neutral-900"
      : "cursor-pointer bg-transparent justify-start shadow-none hover:bg-neutral-900";
  };

  const getTextClass = (page: string) => {
    return activePage === page
      ? "text-white"
      : "text-neutral-500 group-hover:text-white transition-colors";
  };

  const getIconClass = (page: string) => {
    return activePage === page
      ? "text-white"
      : "text-neutral-500 group-hover:text-white transition-colors";
  };

  return (
    <div className="grid grid-rows-[80px_120px_1fr]">
      <div className="flex gap-1 items-center justify-center border-r border-b border-neutral-700">
        <img className="h-9 w-auto items-center" src={wolfLogo} />
        <div className="text-xl">Hunter Tracker 1.0</div>
      </div>

      <div className="flex items-center justify-center border-r border-b border-neutral-700">
        <Button className="bg-transparent cursor-pointer h-25 shadow-none hover:bg-black transition-colors">
          <div className="flex flex-row items-center justify-between gap-3">
            <img
              className="h-20 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsddXJkLf9HhpAch8nNBL0M1101J3xX3TGJA&s"
            />
            <div className="flex flex-col max-w-[200px]">
              <div className="text-lg whitespace-normal overflow-hidden break-words hyphens-auto">
                Task Management
              </div>
              <div className="text-xs font-mono justify-start">Software Project</div>
            </div>
          </div>
        </Button>
      </div>

      <div className="flex items-center justify-center w-full border-r border-neutral-700">
        <div className="bg-neutral-900 overflow-hidden h-full w-full">
          <div className="flex flex-col gap-5 h-full p-10">
            {/* Dashboard Page */}
            <Button
              className={`${getButtonClass("dashboard")} group`}
              type="button"
              onClick={() => movePage("dashboard")}
            >
              <div className="flex gap-2 items-center">
                <LayoutDashboard size={18} className={getIconClass("dashboard")} />
                <span className={getTextClass("dashboard")}>Dashboard</span>
              </div>
            </Button>

            {/* Tasks Page */}
            <Button
              className={`${getButtonClass("tasks")} group`}
              type="button"
              onClick={() => movePage("tasks")}
            >
              <div className="flex gap-2 items-center">
                <CheckSquare size={18} className={getIconClass("tasks")} />
                <span className={getTextClass("tasks")}>Tasks</span>
              </div>
            </Button>

            {/* Backlog Page */}
            <Button
              className={`${getButtonClass("backlog")} group`}
              type="button"
              onClick={() => movePage("backlog")}
            >
              <div className="flex gap-2 items-center">
                <ListTodo size={18} className={getIconClass("backlog")} />
                <span className={getTextClass("backlog")}>Backlog</span>
              </div>
            </Button>

            {/* Team Page */}
            <Button
              className={`${getButtonClass("team")} group`}
              type="button"
              onClick={() => movePage("team")}
            >
              <div className="flex gap-2 items-center">
                <Users size={18} className={getIconClass("team")} />
                <span className={getTextClass("team")}>Team</span>
              </div>
            </Button>

            <div className="flex flex-col gap-5 mt-10">
              <Button
                className={`${getButtonClass("settings")} group`}
                type="button"
                onClick={() => movePage("settings")}
              >
                <div className="flex gap-2 items-center">
                  <Settings size={18} className={getIconClass("settings")} />
                  <span className={getTextClass("settings")}>Settings</span>
                </div>
              </Button>
              <Button
                type="button"
                className="cursor-pointer bg-transparent justify-start shadow-none mt-auto group hover:bg-neutral-900"
                onClick={() => onSubmit()}
              >
                <div className="flex gap-2 items-center">
                  <LogOut
                    size={18}
                    className="text-neutral-500 group-hover:text-white transition-colors"
                  />
                  <span className="text-neutral-500 group-hover:text-white transition-colors">
                    Logout
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
