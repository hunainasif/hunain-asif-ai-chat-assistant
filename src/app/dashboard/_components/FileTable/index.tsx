"use client";
import { useQuery } from "@tanstack/react-query";
import { columns, File } from "./columns";
import { DataTable } from "./data-table";
import { getAllFilesService } from "@/utils/services/message";

export default function FileTable() {
  const { data: filesData } = useQuery({
    queryKey: ["getAllFilesService"],
    queryFn: getAllFilesService,
  });
  console.log(filesData?.files);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={filesData?.files ?? []} />
    </div>
  );
}
