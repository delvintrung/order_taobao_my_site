import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  User,
  Home,
  Package,
  MessageSquareQuote,
  ShieldQuestion,
} from "lucide-react";
import Link from "next/link";
import FooterSidebar from "./FooterSidebar";

export function AppSidebar() {
  const items = [
    {
      title: "Đơn Hàng",
      url: "/admin",
      icon: Package,
    },
    {
      title: "Người Dùng",
      url: "/admin/user",
      icon: User,
    },
    {
      title: "Đánh Giá",
      url: "/admin/feedback",
      icon: MessageSquareQuote,
    },
    {
      title: "Hỏi Đáp",
      url: "/admin/faq",
      icon: ShieldQuestion,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <FooterSidebar />
      </SidebarFooter>
    </Sidebar>
  );
}
