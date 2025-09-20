import React from "react";

export default function WelcomeNotes() {
  return (
    <div className="w-4/5  mx-auto h-3/4 px-4 flex flex-col space-y-2">
      <div className=" w-full h-1/2 bg-light-primary text-light-secondary rounded-2xl flex items-center justify-center">
        <span className="md:text-2xl font-light cursor-pointer">
          Who is Hunain Asif?
        </span>
      </div>
      <div className="w-full h-1/2  flex items-center justify-between gap-2 ">
        <div className="bg-light-primary flex-1 text-light-secondary   rounded-2xl h-full flex items-center justify-center">
          <span className="md:text-2xl font-light cursor-pointer">
            What are the Core Skills of Hunain Asif?
          </span>
        </div>
        <div className="bg-light-primary flex-1 text-light-secondary rounded-2xl h-full flex items-center justify-center">
          <span className="md:text-2xl font-light cursor-pointer">
            How can i hire him for the project?
          </span>
        </div>
      </div>
    </div>
  );
}
