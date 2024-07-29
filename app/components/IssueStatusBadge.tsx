import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}
const statusMap: Record<
  Status,
  { label: String; Color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", Color: "red" },
  IN_PROGRESS: { label: "In progress", Color: "violet" },
  CLOSED: { label: "Closed", Color: "green" },
};
const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].Color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
