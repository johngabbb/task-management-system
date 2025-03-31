import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface Props {}

const Dashboard = (props: Props) => {
  const navigate = useNavigate();

  const movePage = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="h-full w-full grid grid-cols-[300px_1fr] grid-rows-[80px_1fr] bg-neutral-900">
        <div className="border-1 text-white flex items-center justify-center">LOGO + NAME</div>
        <div className="border-1 text-white flex items-center justify-center">NAVBAR</div>
        <div className="border-1 text-white flex items-center justify-center">SIDEBAR</div>
        <div className="border-1 text-white flex items-center justify-center">MAIN CONTENT</div>
        {/* <SideBar />
        <div className="bg-inherit">
          <NavBar />
          <div>
            <Card className="w-10">Card test</Card>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
