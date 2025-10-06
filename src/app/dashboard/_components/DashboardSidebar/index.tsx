"use client";
import { signOut } from "next-auth/react";
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
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function DashboardSidebar() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
    signOut();
  };
  return (
    <Sidebar>
      <SidebarHeader className=" h-14 flex items-center justify-center">
        <Link href={"/"}>
          <span className="text-lg font-bold text-center text-light-primary">
            AI Chat Assistant
          </span>
        </Link>
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
                <SidebarMenuButton className="text-light-primary dark:text-dark-secondary">
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="">
                <DropdownMenuItem>
                  <button
                    onClick={handleLogout}
                    className="text-light-primary dark:text-dark-secondary"
                  >
                    Sign out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
