"use client"

import * as React from "react"
import {
  LayoutDashboard,
  BookOpenText,
  NotepadText,
  FileSpreadsheet,
  Building2,
  UserCog,
} from "lucide-react"

import NavMain from "@/components/MainLayout/NavMain"
import { NavUser } from "@/components/MainLayout/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Business",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "Company",
          url: "/company",
        },
        {
          title: "Client Settings",
          url: "/client-settings",
        },
        {
          title: "Contacts",
          url: "/contacts",
        },
      ],
    },
    {
      title: "Billing",
      icon: NotepadText,
      isActive: true,
      items: [
        {
          title: "New Invoice",
          url: "/new-invoice",
        },
        {
          title: "Choose Client",
          url: "/choose-client",
        },
        {
          title: "Billing Period",
          url: "/billing-period",
        },
        {
          title: "Upload File",
          url: "/upload-file",
        },
        {
          title: "Preview Invoice",
          url: "/preview-invoice",
        },
        {
          title: "Print Invoice",
          url: "/print-invoice",
        },
        {
          title: "Print Summary",
          url: "/print-summary",
        },
        {
          title: "Send Invoice",
          url: "/send-invoice",
        },
      ],
    },
    {
      title: "Collection",
      icon: BookOpenText,
      isActive: true,
      items: [
        {
          title: "All Invoices",
          url: "/all-invoices",
        },
        {
          title: "Unpaid Invoices",
          url: "unpaid-invoices",
        },
        {
          title: "Paid Invoices",
          url: "/paid-invoices",
        },
        {
          title: "Email Followup",
          url: "/email-followup",
        },
      ],
    },
    {
      title: "Report",
      icon: FileSpreadsheet,
      isActive: true,
      items: [
        {
          title: "Aging Report",
          url: "/aging-report",
        },
        {
          title: "AR Summary",
          url: "/ar-summary",
        },
        {
          title: "Paid Invoices",
          url: "/paid-report-invoices",
        },
        {
          title: "Unpaid Invoices",
          url: "/unpaid-report-invoices",
        },
        {
          title: "Projected Revenue",
          url: "/projected-revenue",
        },
        {
          title: "Actual Revenue",
          url: "/actual-revenue",
        },
        {
          title: "Collections Forecast",
          url: "collections-forecast",
        },
        {
          title: "Invoice Listing",
          url: "/invoice-listing",
        },
      ],
    },
    {
      title: "User Settings",
      icon: UserCog,
      isActive: true,
      items: [
        {
          title: "Main Processor",
          url: "/main-processor",
        },
        {
          title: "Viewer Access",
          url: "/viewer-access",
        },
        {
          title: "Feature Control",
          url: "/feature-control",
        },
      ],
    },
  ],
}

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    alt="logo"
                    src="/logoWithoutTitle.jpg"
                    width={50}
                    height={50}
                    className="max-w-[50px] w=full h-auto"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">HastyPH</span>
                  <span className="truncate text-xs">
                    Billing and Collection
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
