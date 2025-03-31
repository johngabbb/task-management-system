import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";

interface Props {}

const Dashboard = (props: Props) => {
  const navigate = useNavigate();

  const movePage = () => {
    navigate("/dashboard");
  };

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
