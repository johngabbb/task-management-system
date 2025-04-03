import { useState } from "react";
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
import TaskOverview from "./TaskOverview/TaskOverview";
import TeamStatus from "./TeamStatus/TeamStatus";
import Forum from "./Forum/Forum";
import TaskSummary from "./TaskSummary/TaskSummary";

interface Props {}

const Dashboard = (props: Props) => {
  const [activePage, setActivePage] = useState<string>("dashboard");

  const navigate = useNavigate();

  const movePage = (page: string) => {
    navigate(`/${page}`);
    setActivePage(page);
  };

  return (
    <>
      <div className="flex flex-col p-6 gap-5">
        <div>
          <TaskSummary />
        </div>

        <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 p-6">
          <TaskOverview />
        </div>

        <div className="flex flex-row gap-3">
          <div className="flex-1 bg-neutral-900 border-1 rounded-lg border-neutral-700 p-6">
            <TeamStatus />
          </div>

          <div className="flex-1 bg-neutral-900 border-1 rounded-lg border-neutral-700 p-6">
            <Forum />
          </div>
        </div>

        <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 p-6">
          <TaskOverview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
