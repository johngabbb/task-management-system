import { TaskResponse } from "@/components/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

interface Task {
  task: TaskResponse;
}

const TaskCard = ({ task }: Task) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-50 p-6 border-1 border-neutral-700 hover:bg-black cursor-pointer text-white w-full flex items-start flex-col justify-between">
            {/* Button content remains the same */}
            <div className="text-left w-full overflow-hidden">
              <div className="text-sm font-bold w-full break-all overflow-hidden text-ellipsis whitespace-normal">
                {task.name}
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-left flex items-center">
                <div className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></div>
                {task.priority}
              </div>
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-right">
                {task.account.name}
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-left">
                {task.createdAt.toString().split("T")[0]}
              </div>
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-right">{task.code}</div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="!max-w-none !w-[1020px] !h-[720px] bg-neutral-950 border-1 border-neutral-700 flex flex-col justify-center items-center">
          {/* Simple X button */}
          <DialogClose className=" text-neutral-500 hover:text-white"></DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskCard;
