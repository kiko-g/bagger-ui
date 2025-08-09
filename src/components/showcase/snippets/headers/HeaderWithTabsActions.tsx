"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusIcon, Settings2Icon } from "lucide-react"

export function HeaderWithTabsActions({ className }: { className?: string }) {
  return (
    <header className={cn("bg-background flex w-full items-center justify-between px-3 py-2", className)}>
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex items-center justify-between gap-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Settings2Icon className="size-4" />
              Configure
            </Button>
            <Button size="sm" className="gap-1">
              <PlusIcon className="size-4" />
              New
            </Button>
          </div>
        </div>

        <TabsContent value="overview">
          <div className="flex h-32 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              This is a placeholder for the overview tab. You can replace this with your own content.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="activity">
          <div className="flex h-32 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              This is a placeholder for the activity tab. You can replace this with your own content.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="flex h-32 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              This is a placeholder for the settings tab. You can replace this with your own content.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </header>
  )
}

export default HeaderWithTabsActions
