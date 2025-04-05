import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import CreateTask from "./CreateTask/CreateTask";
import TaskCard from "./TaskCard/TaskCard";

interface Props {}

const TasksPage = (props: Props) => {
  const [activeView, setActiveView] = useState<"board" | "list">("board");

  const handleActiveView = (view: "board" | "list") => {
    setActiveView(view);
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
            <CreateTask />
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
                  <TaskCard />
                  <TaskCard />
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <TaskCard />
                  <TaskCard />
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <TaskCard />
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
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
