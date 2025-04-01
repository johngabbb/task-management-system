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

interface Props {
  movePage: (e: string) => void;
  activePage: string;
}

const SideBar = ({ movePage, activePage }: Props) => {
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

        {/* Projects Page */}
        <Button
          className={`${getButtonClass("projects")} group`}
          type="button"
          onClick={() => movePage("projects")}
        >
          <div className="flex gap-2 items-center">
            <FolderKanban size={18} className={getIconClass("projects")} />
            <span className={getTextClass("projects")}>Projects</span>
          </div>
        </Button>

        <div className="flex flex-col gap-5 mt-auto">
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
          <Button className="cursor-pointer bg-transparent justify-start shadow-none mt-auto group hover:bg-neutral-900">
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
  );
};

export default SideBar;
