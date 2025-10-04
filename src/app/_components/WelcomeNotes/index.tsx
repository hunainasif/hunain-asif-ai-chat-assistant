import React from "react";
type WelcomeNotesProps = {
  handleSend: (query: string) => void;
};
export default function WelcomeNotes({ handleSend }: WelcomeNotesProps) {
  return (
    <div className="w-4/5  mx-auto h-3/5 px-4 flex flex-col space-y-2">
      <div
        onClick={() => {
          handleSend("Who is Hunain Asif?");
        }}
        className=" w-full h-1/2 bg-light-primary dark:bg-dark-primary text-light-secondary  dark:text-dark-secondary rounded-2xl flex items-center justify-center"
      >
        <span className="md:text-xl px-4 text-center text-sm  font-light cursor-pointer">
          Who is Hunain Asif?
        </span>
      </div>
      <div className="w-full h-1/2  flex items-center justify-between gap-2 ">
        <div
          onClick={() => {
            handleSend("What are the Skills of Hunain Asif?");
          }}
          className="  flex-1 bg-light-primary dark:bg-dark-primary text-light-secondary  dark:text-dark-secondary   rounded-2xl h-full flex items-center justify-center"
        >
          <span className="md:text-xl px-4 text-center text-sm font-light cursor-pointer">
            What are the Skills of Hunain Asif?
          </span>
        </div>
        <div
          onClick={() => {
            handleSend("How can i hire him for the project?");
          }}
          className="flex-1 bg-light-primary dark:bg-dark-primary text-light-secondary  dark:text-dark-secondary rounded-2xl h-full flex items-center justify-center"
        >
          <span className="md:text-xl px-4 text-center text-sm  font-light cursor-pointer">
            How can i hire him for the project?
          </span>
        </div>
      </div>
    </div>
  );
}
