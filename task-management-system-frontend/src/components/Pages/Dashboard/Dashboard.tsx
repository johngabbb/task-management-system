import React from "react";
import NavBar from "../NavBar/NavBar";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="bg-inherit h-full">
        <NavBar />
      </div>
    </>
  );
};

export default Dashboard;
