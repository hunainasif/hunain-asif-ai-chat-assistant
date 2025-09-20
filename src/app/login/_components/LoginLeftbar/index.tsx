import { FileText, Flame, Search } from "lucide-react";
import React from "react";

export default function LoginLeftbar() {
  return (
    <div className="bg-light-primary text-light-secondary flex-1 h-full hidden md:flex flex-col justify-center gap-9 ">
      <div id="top" className="w-5/6 mx-auto space-y-5">
        <h1 className="text-3xl font-bold">Transform Your Documents with AI</h1>
        <span className="text-xl font-medium">
          Experience the future of document intelligence. Our RAG-powered
          platform turns your knowledge base into an intelligent conversation
          partner.
        </span>
      </div>
      <div id="bottom" className="  w-5/6 mx-auto space-y-4">
        {/* #one */}
        <div className="flex justify-between gap-3">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center  ">
            <FileText />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Smart Document Processing</span>
            <span>
              Upload any document and watch our AI extract, understand, and
              organize information with unprecedented accuracy.
            </span>
          </div>
        </div>
        {/* #two */}
        <div className="flex justify-between gap-3">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center  ">
            <Search />
          </div>
          <div className="flex flex-col">
            <span>Intelligent Search & Retrieval</span>
            <span>
              Ask questions in natural language and get precise answers backed
              by your documents with source citations.
            </span>
          </div>
        </div>
        {/* # three */}
        <div className="flex justify-between gap-3">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center  ">
            <Flame />
          </div>
          <div className="flex flex-col">
            <span>Lightning-Fast Insights</span>
            <span>
              Get instant answers from thousands of pages. Our advanced RAG
              technology makes knowledge discovery effortless.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
