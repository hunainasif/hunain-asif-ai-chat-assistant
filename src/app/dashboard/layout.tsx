import React from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <DashboardSidebar />
      <SidebarTrigger className="text-light-primary" />
      {children}
    </div>
  );
}
