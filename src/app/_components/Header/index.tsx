"use client";
import React from "react";
import { SidebarTrigger } from "../../../components/ui/sidebar";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut();
  };
  return (
    <div className="bg-light-primary dark:bg-dark-primary dark:text-dark-secondary flex items-center justify-between h-14">
      <div>
        <SidebarTrigger className="text-light-secondary" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-light-secondary dark:text-dark-secondary">
          My AI Assiatnt
        </h1>
      </div>
      <div className="mr-4 flex items-center justify-center gap-4 text-light-primary  rounded-full  ">
        <ModeToggle />
        {session ? (
          <Link href={"/dashboard"}>
            <button className="px-4 py-1 text-lg cursor-pointer bg-light-secondary dark:bg-dark-secondary dark:text-dark-primary rounded  ">
              Dashboard
            </button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <button className="px-4 py-1 text-lg cursor-pointer bg-light-secondary dark:bg-dark-secondary dark:text-dark-primary rounded  ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
