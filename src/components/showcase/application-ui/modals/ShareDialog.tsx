"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function ShareDialog() {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== "undefined" ? window.location.href : "https://example.com"

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Copy this link to share with others.</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2">
          <Input value={url} readOnly />
          <Button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(url)
              setCopied(true)
              setTimeout(() => setCopied(false), 1200)
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
        <DialogFooter>
          <Button variant="ghost">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
