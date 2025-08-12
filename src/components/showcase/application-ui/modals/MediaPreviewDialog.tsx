"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function MediaPreviewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Media preview</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Preview image</DialogTitle>
        </DialogHeader>
        <div className="overflow-hidden rounded-md border">
          <img src="/og.png" alt="Preview" className="h-auto w-full" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
