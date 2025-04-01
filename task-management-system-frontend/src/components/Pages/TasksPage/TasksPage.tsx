import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { Card } from "@/components/ui/card";

interface Props {}

const TasksPage = (props: Props) => {
  return (
    <div className="grid grid-cols-[300px_1fr] h-full w-full bg-neutral-900">
      <SideBar />

      <div className="grid grid-rows-[100px_1fr]">
        <NavBar />

        {/* MainContent */}
        <div className="bg-black rounded-lg m-5">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
