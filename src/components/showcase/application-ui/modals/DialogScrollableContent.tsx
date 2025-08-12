"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export function DialogScrollableContent() {
  const items = Array.from({ length: 30 }).map((_, i) => `Item ${i + 1}`)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable content</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <div className="bg-background sticky top-0 z-10 -mx-6 -mt-6 border-b p-6">
          <DialogHeader>
            <DialogTitle>Long content</DialogTitle>
          </DialogHeader>
        </div>
        <div className="max-h-80 overflow-y-auto pr-1">
          <ul className="list-disc pl-4 text-sm">
            {items.map((x) => (
              <li key={x} className="py-1">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background sticky bottom-0 z-10 -mx-6 -mb-6 border-t p-6">
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button>Save</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
