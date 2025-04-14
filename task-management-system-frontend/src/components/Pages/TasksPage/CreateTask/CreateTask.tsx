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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
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
import { optional, z } from "zod";
import { taskService } from "@/api/api";
import { TaskRequest } from "@/components/types";
import { Status, Priority } from "@/components/types";

interface Props {}

const CreateTask = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const formSchema = z.object({
    taskTitle: z.string().min(1, {
      message: "Task title is required",
    }),
    assign: z.string({ required_error: "Assignee is required" }),
    description: z.string().optional(),
    taskStage: z
      .string({ required_error: "Task stage is required" })
      .transform((val) => Number(val)), // Convert to number
    priority: z.string({ required_error: "Priority is required" }).transform((val) => Number(val)), // Convert to number
    storyPoints: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskTitle: "",
      description: "",
      storyPoints: "",
      assign: undefined,
      taskStage: undefined,
      priority: undefined,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        taskTitle: "",
        assign: undefined,
        description: "",
        taskStage: undefined,
        priority: undefined,
        storyPoints: "",
      });
    }
  }, [open, form]);

  const onCreateTask = async (values: z.infer<typeof formSchema>) => {
    const taskRequest: TaskRequest = {
      name: values.taskTitle,
      user: values.assign,
      createdAt: new Date(),
      status: values.taskStage, // Already converted to number by zod transform
      priority: values.priority, // Already converted to number by zod transform
      estimated: values.storyPoints ? Number(values.storyPoints) : 0,
      description: values.description || "",
    };

    const response = await taskService.createTask(taskRequest);
    setOpen(false);
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button className="border-neutral-700 bg-neutral-900 border-1 hover:bg-neutral-900 cursor-pointer text-neutral-400 hover:text-white transition-colors">
            + Create Task
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-neutral-950 border-1 border-neutral-700 flex flex-col justify-center items-center max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onCreateTask)} className="space-y-6">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white pb-5 text-2xl">
                  Create Task
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                          Task Title
                        </FormLabel>
                        <div className="text-xs text-destructive">
                          {form.formState.errors.taskTitle?.message}
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="taskTitle"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <Input
                                className="text-white shadow-none border-neutral-700 border-1 focus-visible:border focus-visible:border-white focus-visible:ring-0 w-sm"
                                placeholder="Task Title"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                          Assign To
                        </FormLabel>
                        <div className="text-xs text-destructive">
                          {form.formState.errors.assign?.message}
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="assign"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full min-w-[8rem] border-neutral-700 cursor-pointer text-white">
                                  <SelectValue placeholder="Select assign to" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent
                                position="popper"
                                side="bottom"
                                align="start"
                                className="bg-neutral-800 text-white border-1 border-neutral-700"
                              >
                                <SelectItem
                                  className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                  value="1"
                                >
                                  Gabriel Reyes
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                  value="2"
                                >
                                  Andrea Mendoza
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                  value="3"
                                >
                                  Maximus
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                  value="4"
                                >
                                  Hunter
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                          Story Points
                        </FormLabel>
                        <div className="text-xs text-destructive">
                          {form.formState.errors.storyPoints?.message}
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="storyPoints"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <Input
                                className="text-white shadow-none border-neutral-700 border-1 focus-visible:border focus-visible:border-white focus-visible:ring-0 w-sm"
                                placeholder="0"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-row space-x-4 w-sm">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                            Task Stage
                          </FormLabel>
                          <div className="text-xs text-destructive">
                            {form.formState.errors.taskStage?.message}
                          </div>
                        </div>
                        <FormField
                          control={form.control}
                          name="taskStage"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value?.toString()}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full min-w-[8rem] border-neutral-700 cursor-pointer text-white">
                                    <SelectValue placeholder="Select task stage" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent
                                  position="popper"
                                  side="bottom"
                                  align="start"
                                  className="bg-neutral-800 text-white border-1 border-neutral-700"
                                >
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Status.Pending.toString()}
                                  >
                                    Pending
                                  </SelectItem>
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Status.InProgress.toString()}
                                  >
                                    In Progress
                                  </SelectItem>
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Status.QA.toString()}
                                  >
                                    QA
                                  </SelectItem>
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Status.Completed.toString()}
                                  >
                                    Completed
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                            Priority
                          </FormLabel>
                          <div className="text-xs text-destructive">
                            {form.formState.errors.priority?.message}
                          </div>
                        </div>
                        <FormField
                          control={form.control}
                          name="priority"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value?.toString()}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full min-w-[8rem] border-neutral-700 cursor-pointer text-white">
                                    <SelectValue placeholder="Priority Level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent
                                  position="popper"
                                  side="bottom"
                                  align="start"
                                  className="bg-neutral-800 text-white border-1 border-neutral-700"
                                >
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Priority.Low.toString()}
                                  >
                                    Low
                                  </SelectItem>
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Priority.Medium.toString()}
                                  >
                                    Medium
                                  </SelectItem>
                                  <SelectItem
                                    className="focus:bg-neutral-900 focus:text-white cursor-pointer"
                                    value={Priority.High.toString()}
                                  >
                                    High
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <FormLabel className="text-sm font-medium whitespace-nowrap text-white">
                          Description
                        </FormLabel>
                        <div className="text-xs text-destructive">
                          {form.formState.errors.description?.message}
                        </div>
                      </div>
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <Textarea
                                placeholder="Task description..."
                                className="text-white shadow-none border-neutral-700 border-1 focus-visible:border focus-visible:border-white focus-visible:ring-0 w-sm h-30 resize-none"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter className="w-full pt-5">
                <AlertDialogCancel className="flex-1 bg-white text-neutral-900 font-semibold text-sm hover:text-black hover:bg-neutral-300 transition-colors cursor-pointer rounded-lg">
                  Cancel
                </AlertDialogCancel>
                <Button
                  type="submit"
                  className="flex-1 bg-white text-neutral-900 font-semibold text-sm hover:text-black hover:bg-neutral-300 transition-colors cursor-pointer rounded-lg"
                >
                  Create Task
                </Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CreateTask;
