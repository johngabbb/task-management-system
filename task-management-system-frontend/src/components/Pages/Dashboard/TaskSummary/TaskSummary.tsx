import { Card } from "@/components/ui/card";
import { List, ListCheck, ListCollapse, ListX } from "lucide-react";

type Props = {};

const TaskSummary = (props: Props) => {
  return (
    <>
      <div className="flex gap-3 items-stretch flex-wrap shrink-0">
        <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="font-semibold text-sm text-neutral-300 pb-3">Total Tasks</div>
              <div className="text-4xl font-bold">5,754</div>
              <div className="text-xs">100 last month</div>
            </div>
            <List className="h-10 w-7" />
          </div>
        </Card>

        <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="font-semibold text-sm text-neutral-300 pb-3">Completed</div>
              <div className="text-4xl font-bold">4,354</div>
              <div className="text-xs">100 last month</div>
            </div>
            <ListCheck className="h-10 w-7" />
          </div>
        </Card>

        <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="font-semibold text-sm text-neutral-300 pb-3">In Progress</div>
              <div className="text-4xl font-bold">1,354</div>
              <div className="text-xs">100 last month</div>
            </div>
            <ListCollapse className="h-10 w-7" />
          </div>
        </Card>

        <Card className="flex-1 min-w-[250px] bg-neutral-900 border-1 border-neutral-700 text-white p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="font-semibold text-sm text-neutral-300 pb-3">Pending</div>
              <div className="text-4xl font-bold">412</div>
              <div className="text-xs">100 last month</div>
            </div>
            <ListX className="h-10 w-7" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TaskSummary;
