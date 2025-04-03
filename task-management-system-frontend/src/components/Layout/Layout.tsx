import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

interface Props {}

const Layout = (props: Props) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>(
    location.pathname.substring(1) || "dashboard"
  );

  const navigate = useNavigate();

  // Update activePage whenever location changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "dashboard";
    console.log(path);
    setActivePage(path);
  }, [location]);

  const movePage = (page: string) => {
    navigate(`/${page}`);
    setActivePage(page);
  };

  return (
    <div className="h-screen w-full items-center overflow-auto">
      <div className="h-full grid grid-cols-[300px_1fr] bg-neutral-900 text-white overflow-hidden">
        <SideBar movePage={movePage} activePage={activePage} />

        <div className="grid grid-rows-[80px_1fr]">
          <div className="flex items-center justify-center border-b border-neutral-700">
            <NavBar activePage={activePage} />
          </div>

          {/* Main Content */}
          <div className="bg-neutral-800 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
