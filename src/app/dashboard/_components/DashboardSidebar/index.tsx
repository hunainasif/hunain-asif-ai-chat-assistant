import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DashboardItems } from "@/utils/constants";
import { ChevronUp, User2 } from "lucide-react";
export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" h-14 flex items-center justify-center">
        <span className="text-lg font-bold text-center text-light-primary">
          AI Chat Assistant
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {DashboardItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className=" p-7 text-sm text-light-primary"
                asChild
              >
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="">
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
