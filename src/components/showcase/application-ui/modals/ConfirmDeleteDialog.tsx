"use client"

import { useState } from "react"
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

export function ConfirmDeleteDialog() {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>Are you sure you want to delete this item?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" disabled={loading}>
              Cancel
            </Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>
            {loading ? "Deleting…" : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
