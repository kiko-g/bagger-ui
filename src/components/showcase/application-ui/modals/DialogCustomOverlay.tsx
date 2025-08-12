"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DialogCustomOverlay() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="outline">Custom overlay</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="bg-primary/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-50 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className={cn(
            "bg-background fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-lg border p-6 shadow-lg",
          )}
        >
          <DialogPrimitive.Title className="text-lg font-semibold">Custom overlay dialog</DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-muted-foreground text-sm">
            Overlay uses brand tint and blur.
          </DialogPrimitive.Description>
          <div className="flex justify-end gap-2">
            <DialogPrimitive.Close asChild>
              <Button variant="ghost">Close</Button>
            </DialogPrimitive.Close>
            <Button>Action</Button>
          </div>
          <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
