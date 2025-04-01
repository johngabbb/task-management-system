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
      <div className="h-screen w-full grid grid-cols-[300px_1fr] grid-rows-[56px_112px_1fr] bg-black text-white">
      <div className="flex items-center justify-center border-r border-b border-gray-700">
        LOGO + NAME
      </div>
      <div className="flex items-center justify-center border-b border-gray-700">
        NAVBAR
      </div>
      
      <div className="flex items-center justify-center border-r border-b border-gray-700">
        PROJECT NAME + IMAGE
      </div>
      <div className="flex items-center justify-center border-b border-gray-700">
        Sub header
      </div>
      
      <div className="flex items-center justify-center border-r border-gray-700">
        <SideBar/>
      </div>
      <div className="flex items-center justify-center">
        Main Content
      </div>
    </div>
    </>
  );
};

export default Dashboard;

{/* <SideBar />
        <div className="bg-inherit">
          <NavBar />
          <div>
            <Card className="w-10">Card test</Card>
          </div>
        </div> */}