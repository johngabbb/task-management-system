import { Card } from "@/components/ui/card";
import React from "react";

type Props = {};

const Forum = (props: Props) => {
  return (
    <>
      <div>
        <div className="text-2xl font-bold mb-4">Forum</div>
        <div className="max-h-44  overflow-y-auto flex flex-col gap-2">
          <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
          <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
          <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
          <Card className="rounded-lg border-neutral-700 bg-neutral-900"></Card>
        </div>
      </div>
    </>
  );
};

export default Forum;
