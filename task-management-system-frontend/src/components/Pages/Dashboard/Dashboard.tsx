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

interface Props {}

const tasks = [
  {
    ticketNum: "HT-1823",
    taskName: "[3Shape 5.0.0] Create dashboard for the clients to view cases.",
    status: "In Progress",
    priority: "Medium",
    team: "Gab",
    createdAt: "2hours ago",
  },
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
      <div className="h-screen w-full grid grid-cols-[300px_1fr] bg-neutral-900 text-white">
        <div className="grid grid-rows-[80px_120px_1fr]">
          <div className="flex gap-1 items-center justify-center border-r border-b border-neutral-700">
            <img className="h-9 w-auto items-center" src={wolfLogo} />
            <div className="text-xl">Hunter Tracker 1.0</div>
          </div>

          <div className="flex items-center justify-center border-r border-b border-neutral-700">
            <Button className="bg-transparent cursor-pointer h-25 shadow-none hover:bg-black transition-colors">
              <div className="flex flex-row items-center justify-between gap-3">
                <img
                  className="h-20 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsddXJkLf9HhpAch8nNBL0M1101J3xX3TGJA&s"
                />
                <div className="flex flex-col max-w-[200px]">
                  <div className="text-lg whitespace-normal overflow-hidden break-words hyphens-auto">
                    Task Management
                  </div>
                  <div className="text-xs font-mono justify-start">Software Project</div>
                </div>
              </div>
            </Button>
          </div>

          <div className="flex items-center justify-center w-full border-r border-neutral-700">
            <SideBar movePage={movePage} activePage={activePage} />
          </div>
        </div>

        <div className="grid grid-rows-[80px_1fr]">
          {/* Navbar */}
          <div className="flex items-center justify-center border-b border-neutral-700">
            <NavBar activePage={activePage} />
          </div>

          {/* Main Content */}
          <div className="bg-neutral-800">
            <div className="flex flex-wrap items-stretch gap-3 p-10">
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
                    <div className="font-semibold text-sm text-neutral-300 mb-4">To Dos</div>
                    <div className="text-4xl font-bold">412</div>
                    <div className="text-xs">100 last month</div>
                  </div>
                  <ListX className="h-10 w-7" />
                </div>
              </Card>
            </div>

            <div className="pl-10 pr-10">
              <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 overflow-hidden">
                <Table className="">
                  <TableHeader className="">
                    <TableRow className="border-b border-neutral-700 hover:bg-neutral-800">
                      <TableHead className="w-[100px] text-neutral-300 text-[15px]">Task</TableHead>
                      <TableHead className="flex-1 text-neutral-300 text-[15px]">Title</TableHead>
                      <TableHead className="w-[150px] text-neutral-300 text-[15px]">
                        Status
                      </TableHead>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
