import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react"; // Added useRef import
import { ScrollArea } from "@/components/ui/scroll-area";
import CreateTask from "./CreateTask/CreateTask";
import TaskCard from "./TaskCard/TaskCard";
import { TaskResponse, User } from "@/components/types";
import { accountService, taskService } from "@/api/api";

interface Props {}

const TasksPage = (props: Props) => {
  const [activeView, setActiveView] = useState<"board" | "list">("board");
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [allTasks, setAllTasks] = useState<TaskResponse[] | null>(null);
  const [pendingTasks, setPendingTasks] = useState<TaskResponse[] | null>(null);
  const [inProgressTasks, setInProgressTasks] = useState<TaskResponse[] | null>(null);
  const [qaTasks, setQaTasks] = useState<TaskResponse[] | null>(null);
  const [completedTasks, setCompletedTasks] = useState<TaskResponse[] | null>(null);

  const effectRan = useRef(false); // Added ref to track if effect has run

  const handleActiveView = (view: "board" | "list") => {
    setActiveView(view);
  };

  useEffect(() => {
    // Only run once even in StrictMode
    if (!effectRan.current) {
      effectRan.current = true;
      fetchTasks();
      getAllUsers();
    }
  }, []);

  useEffect(() => {
    if (allTasks) {
      filterTask();
    }
  }, [allTasks]);

  const getAllUsers = async () => {
    try {
      const response = await accountService.getAllUsers();
      const filteredUsers = response.filter((user) => user.role !== "Admin");
      console.log(filteredUsers);
      setAllUsers(filteredUsers);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await taskService.getAllTask();
      console.log(response);
      setAllTasks(response);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const filterTask = () => {
    if (!allTasks) return;

    const pending = allTasks?.filter((task) => task.status === "Pending");
    const inProgress = allTasks?.filter((task) => task.status === "InProgress");
    const qa = allTasks?.filter((task) => task.status === "QA");
    const completed = allTasks?.filter((task) => task.status === "Completed");

    setPendingTasks(pending);
    setInProgressTasks(inProgress);
    setQaTasks(qa);
    setCompletedTasks(completed);
  };

  const cardClassName = "bg-neutral-900 border-neutral-700 text-white p-6 h-50 overflow-auto";

  return (
    <>
      <div className="h-full p-6 flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Button
              type="button"
              className={`border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-900 cursor-pointer hover:text-white ${
                activeView === "board" ? "text-white" : "text-neutral-400"
              } transition-colors`}
              onClick={() => handleActiveView("board")}
            >
              Board View
            </Button>
            <Button
              type="button"
              className={`border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-900 cursor-pointer hover:text-white ${
                activeView === "list" ? "text-white" : "text-neutral-400"
              } transition-colors`}
              onClick={() => handleActiveView("list")}
            >
              List View
            </Button>
          </div>
          <div>
            <CreateTask allUsers={allUsers} fetchTasks={fetchTasks} />
          </div>
        </div>

        <div className="flex flex-row pr-5">
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">Pending</div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">In Progress</div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">QA</div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">Completed</div>
        </div>

        <div className="h-[calc(100vh-280px)]">
          <ScrollArea className="h-full w-full">
            <div className="pr-5">
              <div className="grid grid-cols-4 gap-10">
                <div className="flex flex-col gap-5 h-full">
                  {pendingTasks?.map((task) => (
                    <TaskCard task={task} />
                  ))}
                </div>

                <div className="flex flex-col gap-5 h-full">
                  {inProgressTasks?.map((task) => (
                    <TaskCard task={task} />
                  ))}
                </div>

                <div className="flex flex-col gap-5 h-full">
                  {qaTasks?.map((task) => (
                    <TaskCard task={task} />
                  ))}
                </div>

                <div className="flex flex-col gap-5 h-full">
                  {completedTasks?.map((task) => (
                    <TaskCard task={task} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default TasksPage;
