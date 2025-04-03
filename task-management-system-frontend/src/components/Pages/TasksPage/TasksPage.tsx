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
          <div className="flex gap-5">
            <Button className="border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-800 cursor-pointer text-neutral-400 hover:text-white transition-colors">
              Board View
            </Button>
            <Button className="border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-800 cursor-pointer text-neutral-400 hover:text-white transition-colors">
              List View
            </Button>
          </div>
          <div>
          <Button className="border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-800 cursor-pointer text-neutral-400 hover:text-white transition-colors">
            + New Task
          </Button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default TasksPage;
