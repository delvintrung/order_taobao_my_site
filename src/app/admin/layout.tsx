import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import NavTop from "./components/NavTop";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin",
  description: "Quản trị viên",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="relative">
            <NavTop />
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
