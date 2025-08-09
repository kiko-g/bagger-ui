"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function SwitchLabeled() {
  const [value, setValue] = useState(false)
  return (
    <label className="flex items-center gap-3">
      <Switch checked={value} onCheckedChange={setValue} aria-label="Enable notifications" />
      <div className="flex flex-col">
        <span className="text-sm leading-none font-medium">Notifications</span>
        <span className="text-muted-foreground text-xs">Email me when there’s new activity</span>
      </div>
    </label>
  )
}

export default SwitchLabeled
