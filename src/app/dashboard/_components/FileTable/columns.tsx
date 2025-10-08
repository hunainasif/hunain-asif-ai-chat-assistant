"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Crown, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFileService } from "@/utils/services/message";
import { toast } from "sonner";
import { useState } from "react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type File = {
  _id: string;
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
    cell: ({ row }) => {
      const { uploadDate } = row.original;
      return moment(uploadDate).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      console.log("hey i am the row", row);
      const [open, setOpen] = useState(false);

      const { _id } = row.original;
      let fileId = _id.toString();
      console.log(fileId, "Hey ia mthe id from client");
      const queryClient = useQueryClient();

      const { mutate, isPending } = useMutation({
        mutationFn: deleteFileService,
        onSuccess: (data) => {
          toast.success(data.message);
          queryClient.invalidateQueries({ queryKey: ["getAllFilesService"] });
        },
      });

      return (
        <div>
          <Dialog open={open} onOpenChange={setOpen}>
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
                  your file ({fileId}) and remove it from the system.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-between ">
                <button
                  onClick={() => setOpen(false)}
                  className="p-3 w-24 bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary  border border-light-primary rounded-2xl cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    mutate(fileId, {
                      onSuccess: () => setOpen(false),
                    });
                  }}
                  disabled={isPending}
                  className={`p-3 w-24  bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary rounded-2xl cursor-pointer disabled:bg-[#D3D3D3]`}
                >
                  {isPending ? <>Deleting....</> : `Yes`}
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
