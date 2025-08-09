"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function SwitchSimple() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={setChecked} aria-label="Simple switch" />
      <span className="text-muted-foreground text-xs">{checked ? "Enabled" : "Disabled"}</span>
    </div>
  )
}
