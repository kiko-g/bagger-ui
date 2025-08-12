"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export function DialogWithCloseActions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Close via actions only</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Controlled closing</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">Overlay click is disabled. Use the buttons to close.</p>
        <DialogFooter>
          <Button variant="secondary">Secondary</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
