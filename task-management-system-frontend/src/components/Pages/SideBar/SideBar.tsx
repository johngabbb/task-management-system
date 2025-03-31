import { Button } from "@/components/ui/button";
import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  ListTodo,
  Users,
  FolderKanban,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {}

const SideBar = (props: Props) => {
  const navigate = useNavigate();

  const movePage = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="bg-neutral-800 overflow-hidden rounded-lg ml-5 my-5 p-5">
      <div className="flex flex-col gap-5 h-full">
        <Button className="bg-transparent cursor-pointer h-20 shadow-none">
          <div className="flex flex-row gap-2 items-center">
            <img
              className="h-16 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsddXJkLf9HhpAch8nNBL0M1101J3xX3TGJA&s"
            />
            <div className="flex flex-col max-w-[200px]">
              <div className="text-lg whitespace-normal overflow-hidden break-words hyphens-auto">
                Hunter Beyond
              </div>
              <div className="text-xs font-mono justify-start">Software Project</div>
            </div>
          </div>
        </Button>

        <span className="border-b border-violet-950 mb-3 mt-3"></span>

        {/* Dashboard Page */}
        <Button
          className="cursor-pointer bg-transparent justify-start shadow-none"
          type="button"
          onClick={() => movePage("dashboard")}
        >
          <div className="flex gap-2 items-center">
            <LayoutDashboard size={18} className="text-neutral-300" />
            <div className="text-neutral-300">Dashboard</div>
          </div>
        </Button>

        {/* Tasks Page */}
        <Button
          className="cursor-pointer bg-transparent justify-start shadow-none"
          type="button"
          onClick={() => movePage("tasks")}
        >
          <div className="flex gap-2 items-center">
            <CheckSquare size={18} className="text-neutral-300" />
            <div className="text-neutral-300">Tasks</div>
          </div>
        </Button>

        {/* Backlog Page */}
        <Button
          className="cursor-pointer bg-transparent justify-start shadow-none"
          type="button"
          onClick={() => movePage("backlog")}
        >
          <div className="flex gap-2 items-center">
            <ListTodo size={18} className="text-neutral-300" />
            <div className="text-neutral-300">Backlog</div>
          </div>
        </Button>

        {/* Team Page */}
        <Button
          className="cursor-pointer bg-transparent justify-start shadow-none"
          type="button"
          onClick={() => movePage("team")}
        >
          <div className="flex gap-2 items-center">
            <Users size={18} className="text-neutral-300" />
            <div className="text-neutral-300">Team</div>
          </div>
        </Button>

        {/* Projects Page */}
        <Button
          className="cursor-pointer bg-transparent justify-start shadow-none"
          type="button"
          onClick={() => movePage("projects")}
        >
          <div className="flex gap-2 items-center">
            <FolderKanban size={18} className="text-neutral-300" />
            <div className="text-neutral-300">Projects</div>
          </div>
        </Button>

        <div className="mt-auto flex flex-col gap-5">
          <span className="border-b border-violet-950"></span>
          <Button className="cursor-pointer bg-transparent justify-start shadow-none">
            <div className="flex gap-2 items-center">
              <Settings size={18} className="text-neutral-300" />
              <div className="text-neutral-300">Settings</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
