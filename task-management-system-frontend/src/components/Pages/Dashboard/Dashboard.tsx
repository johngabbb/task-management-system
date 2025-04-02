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

const teamOverview = [
  {
    memberName: "Gabriel Reyes",
    role: "Senior Software Engineer Lead",
    status: "Active",
    numTask: "3",
  },
  {
    memberName: "Andrea Reyes",
    role: "Senior Software Architect",
    status: "Active",
    numTask: "182",
  },
  {
    memberName: "Hunter Husky",
    role: "Junior Software Engineer",
    status: "Active",
    numTask: "5",
  },
  {
    memberName: "Max Beagle",
    role: "Quality Assurance",
    status: "Active",
    numTask: "82",
  },
];

const tasks = [
  {
    ticketNum: "HT-1824",
    taskName: "[SkyFetch] Backend development. Create API for login integration.",
    status: "To do",
    priority: "Medium",
    team: "Max",
    createdAt: "2hours ago",
  },
  {
    ticketNum: "HT-1825",
    taskName: "[Dashboard page] Create dashboard for tasks overview.",
    status: "In Progress",
    priority: "Medium",
    team: "Hunter",
    createdAt: "2hours ago",
  },
  {
    ticketNum: "HT-1826",
    taskName: "[HunterTracker1.0 - Task Page] Create Tasks page for tasks list.",
    status: "In Progress",
    priority: "Medium",
    team: "Max",
    createdAt: "2hours ago",
  },
  {
    ticketNum: "HT-1827",
    taskName: "[Beta] Create dashboard for the clients to view cases.",
    status: "Completed",
    priority: "Medium",
    team: "Pamkin",
    createdAt: "2hours ago",
  },
  {
    ticketNum: "HT-1828",
    taskName: "[MaximusHunter] Feed and walk the dogs.",
    status: "Backlog",
    priority: "Medium",
    team: "Gab",
    createdAt: "2hours ago",
  },
];

const Dashboard = (props: Props) => {
  const [activePage, setActivePage] = useState<string>("dashboard");

  const navigate = useNavigate();

  const movePage = (page: string) => {
    navigate(`/${page}`);
    setActivePage(page);
  };

  return (
    <>
      {/* Main Content */}
      <div className="bg-neutral-800 h-full flex flex-col overflow-auto">
        {/* Task Summary */}
        <div className="flex flex-wrap items-stretch gap-3 p-6 shrink-0">
          <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-5">
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="font-semibold text-sm text-neutral-300 mb-4">Total Tasks</div>
                <div className="text-4xl font-bold">5,754</div>
                <div className="text-xs">100 last month</div>
              </div>
              <List className="h-10 w-7" />
            </div>
          </Card>

          <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-5">
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="font-semibold text-sm text-neutral-300 mb-4">Completed</div>
                <div className="text-4xl font-bold">4,354</div>
                <div className="text-xs">100 last month</div>
              </div>
              <ListCheck className="h-10 w-7" />
            </div>
          </Card>

          <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-5">
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="font-semibold text-sm text-neutral-300 mb-4">In Progress</div>
                <div className="text-4xl font-bold">1,354</div>
                <div className="text-xs">100 last month</div>
              </div>
              <ListCollapse className="h-10 w-7" />
            </div>
          </Card>

          <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-5">
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="font-semibold text-sm text-neutral-300 mb-4">Pending</div>
                <div className="text-4xl font-bold">412</div>
                <div className="text-xs">100 last month</div>
              </div>
              <ListX className="h-10 w-7" />
            </div>
          </Card>
        </div>

        <div className="grid grid-rows-[350px_1fr] grid-cols-2 gap-0 pb-6">
          {/* Task Overview */}
          <div className="flex-1 min-h-0 overflow-auto col-span-2 px-6 pb-6">
            <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 overflow-hidden p-6 h-full">
              <div className="flex justify-between">
                <div className="text-2xl font-bold mb-6">Task Overview</div>
                <div className="pt-2 pr-5">
                  <Pagination className="justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          href="#"
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          href="#"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>

              <Table className="">
                <TableHeader className="">
                  <TableRow className="border-b border-neutral-700 hover:bg-transparent">
                    <TableHead className="w-[100px] text-neutral-300 text-[15px]">Task</TableHead>
                    <TableHead className="flex-1 text-neutral-300 text-[15px]">Title</TableHead>
                    <TableHead className="w-[150px] text-neutral-300 text-[15px]">Status</TableHead>
                    <TableHead className="w-[150px] text-neutral-300 text-[15px]">
                      Priority
                    </TableHead>
                    <TableHead className="w-[200px] text-neutral-300 text-[15px]">Team</TableHead>
                    <TableHead className="w-[200px] text-neutral-300 text-[15px]">
                      Created At
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow
                      key={task.ticketNum}
                      className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
                    >
                      <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.ticketNum}
                      </TableCell>
                      <TableCell className="flex-1 text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.taskName}
                      </TableCell>
                      <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.status}
                      </TableCell>
                      <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.priority}
                      </TableCell>
                      <TableCell className="w-[200px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.team}
                      </TableCell>
                      <TableCell className="w-[200px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                        {task.createdAt}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Team Overview */}
          <div className="overflow-auto px-6 pb-6">
            <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 overflow-hidden p-6 ">
              <div className="flex justify-between">
                <div className="text-2xl font-bold mb-6">Team Status</div>
                <div className="pt-2 pr-5">
                  <Pagination className="justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          href="#"
                        />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          href="#"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
              <div className="overflow-auto max-h-[250px]">
                <Table className="">
                  <TableHeader className="">
                    <TableRow className="border-b border-neutral-700 hover:bg-transparent">
                      <TableHead className="w-[150px] text-neutral-300 text-[15px]">
                        Member
                      </TableHead>
                      <TableHead className="w-[300px] text-neutral-300 text-[15px]">Role</TableHead>
                      <TableHead className="w-[100px] text-neutral-300 text-[15px]">
                        Status
                      </TableHead>
                      <TableHead className="w-[100px] text-neutral-300 text-[15px]">
                        Active Tasks
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamOverview.map((member) => (
                      <TableRow
                        key={member.memberName}
                        className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
                      >
                        <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                          {member.memberName}
                        </TableCell>
                        <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                          {member.role}
                        </TableCell>
                        <TableCell className="flex-1 text-neutral-400 group-hover:text-white transition-colors duration-200">
                          {member.status}
                        </TableCell>
                        <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                          {member.numTask}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Forum section */}
          <div className="overflow-auto px-6 pb-6">
            <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 overflow-hidden p-6 min-h-full">
              <div className="text-2xl font-bold mb-4">Forum</div>
              <div className="max-h-44  overflow-y-auto flex flex-col gap-2">
                <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
                <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
                <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
                <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
