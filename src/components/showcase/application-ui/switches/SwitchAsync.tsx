"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function SwitchAsync() {
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleChange(next: boolean) {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setChecked(next)
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={handleChange} aria-label="Async switch" disabled={loading} />
      <span className="text-muted-foreground text-xs">{loading ? "Saving…" : checked ? "Enabled" : "Disabled"}</span>
    </div>
  )
}

export default SwitchAsync
