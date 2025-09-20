import React, { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link2 } from "lucide-react";
import { Links } from "@/utils/constants";
import Link from "next/link";

export default function AppSidebar({ children }: { children?: ReactNode }) {
  return (
    <Sidebar className="bg-light-secondary">
      <SidebarHeader className=" h-14 flex items-center justify-center">
        <span className="text-lg font-bold text-center text-light-primary">
          AI Chat Assistant
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        {children}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-col gap-3 text-light-primary">
          {Links.map((item, id) => (
            <SidebarMenuItem
              key={id}
              className="flex items-center justify-between mx-2"
            >
              <span className="text-sm font-medium">{item?.title}</span>
              <Link href={item.url} target="_blank">
                <Link2 className="cursor-pointer" />
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
