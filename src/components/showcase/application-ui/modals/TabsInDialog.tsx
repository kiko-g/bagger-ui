"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function TabsInDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Tabs in dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Project settings</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="text-muted-foreground text-sm">
            General settings go here.
          </TabsContent>
          <TabsContent value="members" className="text-muted-foreground text-sm">
            Members management goes here.
          </TabsContent>
          <TabsContent value="advanced" className="text-muted-foreground text-sm">
            Advanced settings go here.
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
