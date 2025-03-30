import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="bg-inherit h-full">
        <NavBar />
        <SideBar />
      </div>
    </>
  );
};

export default Dashboard;
