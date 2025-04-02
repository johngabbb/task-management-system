import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Props = {};

const TaskOverview = (props: Props) => {
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

  return (
    <>
      <div>
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

        <Table>
          <TableHeader>
            <TableRow className="border-b border-neutral-700 hover:bg-transparent cursor-default">
              <TableHead className="w-[100px] text-neutral-300 text-[15px]">Task</TableHead>
              <TableHead className="flex-1 text-neutral-300 text-[15px]">Title</TableHead>
              <TableHead className="w-[150px] text-neutral-300 text-[15px]">Status</TableHead>
              <TableHead className="w-[150px] text-neutral-300 text-[15px]">Priority</TableHead>
              <TableHead className="w-[200px] text-neutral-300 text-[15px]">Team</TableHead>
              <TableHead className="w-[200px] text-neutral-300 text-[15px]">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow
                key={task.ticketNum}
                className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
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
    </>
  );
};

export default TaskOverview;
