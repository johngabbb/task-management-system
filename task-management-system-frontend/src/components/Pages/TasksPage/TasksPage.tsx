import { useState } from "react";
import NavBar from "../../Layout/NavBar";
import SideBar from "../../Layout/SideBar";
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
  return (
    <>
      <div className="h-full p-6 flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <Button>Bord View</Button>
            <Button>List View</Button>
          </div>
          <div>
            <Button>New Task</Button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default TasksPage;
