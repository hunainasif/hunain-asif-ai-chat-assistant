"use client";
import Header from "@/app/_components/Header";
import AppSidebar from "@/app/_components/AppSidebar";
import { SendHorizonal } from "lucide-react";
import WelcomeNotes from "@/app/_components/WelcomeNotes";
import ChatScreen from "@/app/_components/ChatScreen";
import { useMessageStore } from "@/utils/store/message-store";
import useAskService from "@/utils/helpers/askHelper";
import { useSession } from "next-auth/react";

export default function Home() {
  const { messages, text, setText } = useMessageStore();
  const { isPending, handleSend } = useAskService();
  console.log(isPending, "from the Page.tsx");
  const { data: session } = useSession();
  console.log("Hey I am the Data", session);

  return (
    <div className="w-full h-full  bg-light-secondary dark:bg-dark-secondary">
      <div className="w-full h-full flex">
        {/* SideBar */}
        <div>
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className=" w-full h-screen justify-between flex  flex-col">
          <Header />
          {/* chatScreen  || Welcome Notes*/}
          {messages.length > 0 ? (
            <ChatScreen isPending={isPending} />
          ) : (
            <WelcomeNotes handleSend={handleSend} />
          )}
          {/* inputBox */}
          <div className="bg-light-primary dark:bg-dark-primary border-2 mb-5 border-solid rounded-full border-light-primary flex items-center justify-between mx-8 h-14">
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend(text);
                }
              }}
              type="text"
              placeholder="Ask me anything about Hunain Asif"
              className="p-4 flex-[9] rounded-full text-light-secondary focus:outline-none focus:bg-none"
              name="text"
              value={text}
              id=""
            />
            <button
              disabled={isPending}
              onClick={() => {
                handleSend(text);
              }}
              className={`md:flex-1 flex-3 bg-light-secondary dark:bg-dark-secondary rounded-full w-full h-full flex items-center justify-center disabled:bg-[#D3D3D3] `}
            >
              <SendHorizonal className="md:w-5 md:h-5 text-light-primary dark:text-dark-primary cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
