import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

type Props = {};

const TaskCard = (props: Props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-50 p-6 border-1 border-neutral-700 hover:bg-black cursor-pointer text-white w-full flex items-start flex-col justify-between">
            {/* Button content remains the same */}
            <div className="text-left w-full overflow-hidden">
              <div className="text-sm font-bold w-full break-all overflow-hidden text-ellipsis whitespace-normal">
                3Shape 3.0.1 - Case downloader continuous to log cases without file attachments as
                log success causing discrepancies in the wfa dashboard
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-left flex items-center">
                <div className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></div>
                Medium
              </div>
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-right">Gabriel Reyes</div>
            </div>

            <div className="flex flex-row w-full">
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-left">April 5, 2025</div>
              <div className="flex-1 text-sm text-neutral-500 mt-2 text-right">HT-1824</div>
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
