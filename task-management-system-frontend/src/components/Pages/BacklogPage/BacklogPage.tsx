import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { taskService } from "@/api/api";
import { useEffect, useState } from "react";
import { TaskResponse } from "@/components/types";

type Props = {};

const BacklogPage = (props: Props) => {
  const [allTask, setAllTask] = useState<TaskResponse[] | null>(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const response = await taskService.getAllTask();
    const backLogs = response.filter((task) => task.status.toLowerCase() === "backlog");

    setAllTask(backLogs);
  };

  return (
    <>
      <div className="p-10">
        <div className="bg-neutral-900 border-1 rounded-lg border-neutral-700 p-6">
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
              {allTask?.map((task) => (
                <TableRow
                  key={task.account.id}
                  className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
                >
                  <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.code}
                  </TableCell>
                  <TableCell className="flex-1 text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.name}
                  </TableCell>
                  <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.status}
                  </TableCell>
                  <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.priority}
                  </TableCell>
                  <TableCell className="w-[200px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.account.name}
                  </TableCell>
                  <TableCell className="w-[200px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {task.createdAt.toString().split("T")[0]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BacklogPage;
