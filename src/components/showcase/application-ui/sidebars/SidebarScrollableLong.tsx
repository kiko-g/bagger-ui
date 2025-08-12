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
import { File } from "lucide-react"

export function SidebarScrollableLong() {
  const items = Array.from({ length: 30 }).map((_, i) => `Document ${i + 1}`)
  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <SidebarProvider className="h-[420px] min-h-0 rounded-lg">
        <div className="flex w-full">
          <Sidebar variant="inset" className="absolute! inset-y-0 left-0">
            <SidebarHeader />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Documents</SidebarGroupLabel>
                <SidebarMenu>
                  {items.map((name) => (
                    <SidebarMenuItem key={name}>
                      <SidebarMenuButton>
                        <File /> <span>{name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
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
            <div className="text-muted-foreground p-6 text-sm">Long list with overflow scrolling.</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
