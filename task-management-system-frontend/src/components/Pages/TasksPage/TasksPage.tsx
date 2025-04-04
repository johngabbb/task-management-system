import { Card } from "@/components/ui/card";
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

interface Props {}

const cardClassName =
  "bg-neutral-900 border-neutral-700 text-white p-6 h-50 overflow-auto";

const TasksPage = (props: Props) => {
  return (
    <>
      <div className="h-full p-6 flex flex-col gap-10">
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-800 cursor-pointer text-neutral-400 hover:text-white transition-colors">
                  + New Task
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle></AlertDialogTitle>
                  <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="flex flex-row pr-5">
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">
            Pending
          </div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">
            In Progress
          </div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">
            QA
          </div>
          <div className="flex-1 text-neutral-400 text-lg flex justify-center">
            Completed
          </div>
        </div>

        <div className="h-[calc(100vh-280px)]">
          <ScrollArea className="h-full w-full">
            <div className="pr-5">
              <div className="grid grid-cols-4 gap-10">
                <div className="flex flex-col gap-5 h-full">
                  <Card className="bg-neutral-900 border-neutral-700 text-white p-6 h-50 overflow-auto">
                    Task 1
                  </Card>
                  <Card className={cardClassName}>Task 2</Card>
                  <Card className={cardClassName}>Task 3</Card>
                  <Card className={cardClassName}>Task 4</Card>
                  <Card className={cardClassName}>Task 5</Card>
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <Card className={cardClassName}>Task 1</Card>
                  <Card className={cardClassName}>Task 2</Card>
                  <Card className={cardClassName}>Task 3</Card>
                  <Card className={cardClassName}>Task 4</Card>
                  <Card className={cardClassName}>Task 5</Card>
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <Card className={cardClassName}>Task 1</Card>
                  <Card className={cardClassName}>Task 2</Card>
                  <Card className={cardClassName}>Task 3</Card>
                  <Card className={cardClassName}>Task 4</Card>
                  <Card className={cardClassName}>Task 5</Card>
                </div>

                <div className="flex flex-col gap-5 h-full">
                  <Card className={cardClassName}>Task 1</Card>
                  <Card className={cardClassName}>Task 2</Card>
                  <Card className={cardClassName}>Task 3</Card>
                  <Card className={cardClassName}>Task 4</Card>
                  <Card className={cardClassName}>Task 5</Card>
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
