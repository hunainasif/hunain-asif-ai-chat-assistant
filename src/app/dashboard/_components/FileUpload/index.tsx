"use client";
import { fileUploadService } from "@/utils/services/message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CloudUpload, Paperclip } from "lucide-react";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: fileUploadService,
    onSuccess: (data) => {
      setFile(null);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["getAllFilesService"] });
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file first!");
      return;
    }
    const form = new FormData();
    form.append("file", file);
    mutate(form);
  };

  return (
    <div className="flex flex-col  space-y-4 p-3 bg-light-primary dark:bg-dark-primary rounded-2xl">
      <span className="text-light-secondary dark:text-dark-secondary text-lg font-bold">
        Upload Files
      </span>

      <div
        {...getRootProps()}
        className={`flex flex-col w-11/12 mx-auto justify-between items-center gap-3 p-5 rounded-2xl border-2 border-dashed ${
          isDragActive ? "border-blue-400" : "border-gray-400"
        }`}
      >
        <input {...getInputProps()} />

        {file ? (
          <span>{file.name}</span>
        ) : (
          <>
            <CloudUpload className="text-light-secondary dark:text-dark-secondary" />
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-dark-secondary">
              <span>
                Drag, drop, and control your documents. Build a powerful
                foundation for RAG.
              </span>
              <span>Accepts PDF only</span>
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleUpload}
        className={`flex text-light-primary dark:text-dark-primary ${
          isPending
            ? "bg-[#D3D3D3] "
            : "bg-light-secondary dark:bg-dark-secondary"
        } p-3 rounded-2xl w-2xs space-x-2`}
      >
        {isPending ? (
          <span>Uploading...</span>
        ) : (
          <>
            <Paperclip />
            <span className="cursor-pointer">
              {file ? `${file.name.slice(0, 10)} file selected` : "Upload"}
            </span>
          </>
        )}
      </button>
    </div>
  );
}
