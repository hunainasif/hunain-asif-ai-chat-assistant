import React from "react";
import FileUpload from "./_components/FileUpload";
import FileTable from "./_components/FileTable";

export default function Dashboard() {
  return (
    <div className={`flex flex-col gap-5 mt-6 md:mx-auto `}>
      <div className="flex flex-col gap-2 my-5">
        <h1 className="font-bold text-2xl text-light-primary">
          File Managment for Your Rag
        </h1>
        <p className="font-semibold text-xl text-light-primary">
          Drag, drop, and control your documents. Build a powerful foundation
          for Retrieval-Augmented Generation
        </p>
      </div>
      {/* file Upload component */}
      <FileUpload />
      {/* Files Display Table */}
      <FileTable />
    </div>
  );
}
