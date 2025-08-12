"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"

export function DialogNoOverlay() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="outline">No overlay</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        {/* no overlay rendered */}
        <DialogPrimitive.Content className="bg-background fixed top-10 left-1/2 z-50 w-full max-w-md -translate-x-1/2 rounded-lg border p-6 shadow-lg">
          <DialogPrimitive.Title className="text-lg font-semibold">No overlay dialog</DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-muted-foreground text-sm">
            Useful for embedded or inline-like flows.
          </DialogPrimitive.Description>
          <div className="mt-4 flex justify-end">
            <DialogPrimitive.Close asChild>
              <Button variant="ghost">Close</Button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
