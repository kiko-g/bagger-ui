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

export function SidebarWithAvatars() {
  const users = ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Edsger Dijkstra"]
  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <SidebarProvider className="h-[420px] min-h-0 rounded-lg">
        <div className="flex w-full">
          <Sidebar variant="inset" className="absolute! inset-y-0 left-0">
            <SidebarHeader />

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Members</SidebarGroupLabel>
                <SidebarMenu>
                  {users.map((name) => (
                    <SidebarMenuItem key={name}>
                      <SidebarMenuButton>
                        <span className="bg-accent flex size-6 items-center justify-center rounded-full text-[10px] font-medium">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                        <span>{name}</span>
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
            <div className="text-muted-foreground p-6 text-sm">Sidebar with avatars/initials.</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
