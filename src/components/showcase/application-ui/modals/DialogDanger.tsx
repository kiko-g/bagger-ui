"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

export function DialogDanger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Danger dialog</Button>
      </DialogTrigger>
      <DialogContent className="border-destructive">
        <DialogHeader>
          <DialogTitle className="text-destructive">Delete project</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">All data will be permanently removed.</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
