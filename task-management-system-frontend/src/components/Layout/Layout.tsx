import SideBar from "../Pages/SideBar/SideBar";
import NavBar from "../Pages/NavBar/NavBar";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

interface Props {}

const Layout = (props: Props) => {
  const [activePage, setActivePage] = useState<string>("dashboard");

  const navigate = useNavigate();

  const movePage = (page: string) => {
    navigate(`/${page}`);
    setActivePage(page);
  };

  return (
    <div className="h-screen w-full grid grid-cols-[300px_1fr] bg-neutral-900 text-white overflow-hidden">
      <SideBar movePage={movePage} activePage={activePage} />

      <div className="grid grid-rows-[80px_1fr]">
        <div className="flex items-center justify-center border-b border-neutral-700">
          <NavBar activePage={activePage} />
        </div>

        {/* Main Content */}
        <div className="bg-neutral-800 h-full flex flex-col overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
