"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type File = {
  id: string;
  fileName: string;
  uploadDate: string;
};

export const columns: ColumnDef<File>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "uploadDate",
    header: "Upload Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <div>
          <Dialog>
            <DialogTrigger>
              <Trash2 className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-light-primary">
                  Do You Wanted to delete this File?
                </DialogTitle>
                <DialogDescription className="text-light-primary">
                  This action cannot be undone. This will permanently delete
                  your file ({id}) and remove it from the system.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-between ">
                <button className="p-3 w-24  bg-light-primary text-light-secondary rounded-2xl cursor-pointer">
                  Yes
                </button>
                <button className="p-3 w-24 bg-light-secondary text-light-primary border-1 border-solid border-light-primary rounded-2xl cursor-pointer">
                  No
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
