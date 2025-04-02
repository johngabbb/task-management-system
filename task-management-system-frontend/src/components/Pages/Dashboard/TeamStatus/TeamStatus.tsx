import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {}

const TeamStatus = (props: Props) => {
  const teamOverview = [
    {
      memberName: "Gabriel Reyes",
      role: "Senior Software Engineer Lead",
      status: "Active",
      numTask: "3",
    },
    {
      memberName: "Andrea Reyes",
      role: "Senior Software Architect",
      status: "Active",
      numTask: "182",
    },
    {
      memberName: "Hunter Husky",
      role: "Junior Software Engineer",
      status: "Active",
      numTask: "5",
    },
    {
      memberName: "Max Beagle",
      role: "Quality Assurance",
      status: "Active",
      numTask: "82",
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="text-2xl font-bold mb-6">Team Status</div>
          <div className="pt-2 pr-5">
            <Pagination className="justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    href="#"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    href="#"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <Table className="">
          <TableHeader className="">
            <TableRow className="border-b border-neutral-700 hover:bg-transparent">
              <TableHead className="w-[150px] text-neutral-300 text-[15px]">Member</TableHead>
              <TableHead className="w-[300px] text-neutral-300 text-[15px]">Role</TableHead>
              <TableHead className="w-[100px] text-neutral-300 text-[15px]">Status</TableHead>
              <TableHead className="w-[100px] text-neutral-300 text-[15px]">Active Tasks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamOverview.map((member) => (
              <TableRow
                key={member.memberName}
                className="group border-b border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
              >
                <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                  {member.memberName}
                </TableCell>
                <TableCell className="w-[100px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                  {member.role}
                </TableCell>
                <TableCell className="flex-1 text-neutral-400 group-hover:text-white transition-colors duration-200">
                  {member.status}
                </TableCell>
                <TableCell className="w-[150px] text-neutral-400 group-hover:text-white transition-colors duration-200">
                  {member.numTask}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TeamStatus;
