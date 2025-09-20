import Header from "@/components/Header";
import AppSidebar from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { SendHorizonal } from "lucide-react";
import WelcomeNotes from "@/components/WelcomeNotes";
import ChatScreen from "@/components/ChatScreen";

export default async function Home() {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  console.log(defaultOpen, "Hey I am the Default Open");

  return (
    <div className="w-full h-full  bg-light-secondary">
      <div className="w-full h-full flex">
        {/* SideBar */}
        <div>
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className=" w-full h-screen justify-between flex  flex-col">
          <Header />
          {/* chatScreen  || Welcome Noted*/}
          {/* <WelcomeNotes /> */}
          <ChatScreen />
          {/* inputBox */}
          <div className="bg-light-primary border-2 mb-5 border-solid rounded-full border-light-primary flex items-center justify-between mx-8 h-14">
            <input
              type="text"
              placeholder="Ask me anything about Hunain Asif"
              className="p-4 flex-[9] rounded-full text-app-secondary focus:outline-none"
              name="text"
              id=""
            />
            <div className="md:flex-1 flex-3 bg-light-secondary rounded-full w-full h-full flex items-center justify-center">
              <SendHorizonal className="md:w-5 md:h-5 text-light-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
