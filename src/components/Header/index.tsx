import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-light-primary flex items-center justify-between h-14">
      <div>
        <SidebarTrigger className="text-light-secondary" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-light-secondary">
          My AI Assiatnt
        </h1>
      </div>
      <div className="mr-4 flex items-center justify-center gap-2 text-light-primary  rounded-full  bg-light-secondary">
        <Link href={"/login"}>
          <button className="px-4 py-1 text-xl cursor-pointer">Login</button>
        </Link>
      </div>
    </div>
  );
}
