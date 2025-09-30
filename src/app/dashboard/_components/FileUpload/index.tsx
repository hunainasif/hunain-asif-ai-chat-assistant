import { CloudUpload, Paperclip } from "lucide-react";
import React from "react";

export default function FileUpload() {
  return (
    <div className="flex flex-col space-y-4 p-3 bg-light-primary rounded-2xl">
      <span className="text-light-secondary text-lg font-bold">
        Upload Files
      </span>
      <div className="flex flex-col w-11/12 mx-auto justify-between items-center gap-3 p-5 rounded-2xl ">
        <CloudUpload className="text-light-secondary" />
        <div className="flex flex-col items-center  gap-3 p-4 rounded-2xl bg-light-secondary text-light-primary">
          <span>
            Drag, drop, and control your documents. Build a powerful foundation
            for Retrieval-Augmented Generation
          </span>
          <span>accept pdf only</span>
        </div>
      </div>
      <button className="flex text-light-primary bg-light-secondary  p-3 rounded-2xl w-2xs space-x-2">
        <Paperclip />
        <span className="cursor-pointer">Upload</span>
      </button>
    </div>
  );
}
