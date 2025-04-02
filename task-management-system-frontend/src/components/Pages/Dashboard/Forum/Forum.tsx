import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

type Props = {};

const Forum = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-2xl font-bold mb-4">Forum</div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-[200px] w-full">
          <div className="flex flex-col gap-4 pr-4">
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Gabriel Reyes just finished 257 tasks in one hour. Well done brother!
            </Card>
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Hunter hunter hunter hunter
            </Card>
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Forum post 3
            </Card>
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Forum post 4
            </Card>
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Forum post 5
            </Card>
            <Card className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-white">
              Forum post 6
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Forum;
