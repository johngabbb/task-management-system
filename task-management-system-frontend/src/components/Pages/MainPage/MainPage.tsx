import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wolfLogo from "../../../imgs/wolf-logo.png";
import { List, ListCheck, ListX, ListCollapse } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {}

const TasksPage = (props: Props) => {
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
        <div className="bg-neutral-800 h-full flex flex-col overflow-auto"></div>
      </div>
    </div>
  );
};

export default TasksPage;
