"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function DialogPositions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Centered</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Centered dialog</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">Default centered alignment.</p>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Top aligned</Button>
        </DialogTrigger>
        <DialogContent className="top-10 translate-y-0">
          <DialogHeader>
            <DialogTitle>Top-aligned dialog</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">Useful for wizards or notifications.</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
