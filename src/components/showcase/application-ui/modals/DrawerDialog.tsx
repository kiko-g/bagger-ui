"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function DrawerDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Drawer (right)</Button>
      </DialogTrigger>
      <DialogContent className="top-0 right-0 h-svh w-96 translate-x-0 translate-y-0 rounded-none border-l sm:rounded-none">
        <DialogHeader>
          <DialogTitle>Drawer dialog</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">Slides from the right and occupies the full height.</p>
      </DialogContent>
    </Dialog>
  )
}
