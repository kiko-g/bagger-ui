"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Folder, Settings } from "lucide-react"

export function SidebarCollapsed() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <SidebarProvider defaultOpen={false} className="h-[420px] min-h-0 rounded-lg">
        <div className="flex w-full">
          <Sidebar variant="inset" collapsible="icon" className="absolute! inset-y-0 left-0">
            <SidebarHeader />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home /> <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Folder /> <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings /> <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
          <SidebarInset>
            <div className="flex items-center justify-between border-b p-3">
              <SidebarTrigger />
              <div className="text-muted-foreground text-sm">Content area</div>
            </div>
            <div className="text-muted-foreground p-6 text-sm">Collapsed icon-only sidebar by default.</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
