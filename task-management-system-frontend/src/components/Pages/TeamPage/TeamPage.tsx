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
import React, { useEffect, useState } from "react";
import { accountService, taskService } from "@/api/api";
import { TaskResponse, User } from "@/components/types";

interface Props {}

const TeamPage = (props: Props) => {
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [allTask, setAllTasks] = useState<TaskResponse[] | null>(null);
  const [tasksPerUser, setTasksPerUser] = useState<Record<string, number>>({});

  useEffect(() => {
    getTeamDetails();
  }, []);

  const getTeamDetails = async () => {
    try {
      const users = await accountService.getAllUsers();
      setAllUsers(users);

      const tasks = await taskService.getAllTask();

      const countMap: Record<string, number> = {};

      if (tasks && tasks.length > 0) {
        tasks.forEach((task) => {
          // Using the account property which contains the User
          if (task.account && task.account.id) {
            const userId = task.account.id;
            countMap[userId] = (countMap[userId] || 0) + 1;
          }
        });
      }

      setTasksPerUser(countMap);
    } catch (err) {
      console.error("Error fetching all team members", err);
    }
  };

  return (
    <>
      <div className="p-15">
        <div className="bg-neutral-900 p-6 rounded-lg flex flex-col space-y-10 border-neutral-700 border-1">
          <div className="text-2xl font-bold">Manage Team Members</div>
          <Table className="">
            <TableHeader className="">
              <TableRow className="border-b border-neutral-700 hover:bg-transparent">
                <TableHead className="w-[150px] text-neutral-300 text-[15px]">Member</TableHead>
                <TableHead className="w-[300px] text-neutral-300 text-[15px]">Username</TableHead>
                <TableHead className="w-[100px] text-neutral-300 text-[15px]">Position</TableHead>
                <TableHead className="w-[100px] text-neutral-300 text-[15px]">Role</TableHead>
                <TableHead className="w-[100px] text-neutral-300 text-[15px]">
                  Active Tasks
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers?.map((member) => (
                <TableRow
                  key={member.id || member.username}
                  className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
                >
                  <TableCell className=" text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {member.name}
                  </TableCell>
                  <TableCell className=" text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {member.username}
                  </TableCell>
                  <TableCell className=" text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {member.username}
                  </TableCell>
                  <TableCell className=" text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {member.role}
                  </TableCell>
                  <TableCell className=" text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {tasksPerUser[member.id] || 0}
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

export default TeamPage;
