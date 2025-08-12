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

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a teammate</DialogTitle>
          <DialogDescription>Send an invitation to collaborate on this project.</DialogDescription>
        </DialogHeader>
        <div className="text-muted-foreground text-sm">You can manage members later from the team settings page.</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
