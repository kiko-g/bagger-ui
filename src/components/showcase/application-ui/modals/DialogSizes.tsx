"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function SizeExample({ label, className }: { label: string; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{label} dialog</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">Content area sized by max-width or viewport.</p>
      </DialogContent>
    </Dialog>
  )
}

export function DialogSizes() {
  return (
    <div className="flex flex-wrap gap-2">
      <SizeExample label="Small" className="max-w-sm" />
      <SizeExample label="Default (md)" className="max-w-md" />
      <SizeExample label="Large" className="max-w-xl" />
      <SizeExample label="XL" className="max-w-2xl" />
      <SizeExample
        label="Fullscreen"
        className="top-0 left-0 h-svh w-screen max-w-none translate-x-0 translate-y-0 rounded-none p-6 sm:rounded-none"
      />
    </div>
  )
}
