"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function SwitchTones() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const [d, setD] = useState(false)
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch tone="success" checked={a} onCheckedChange={setA} aria-label="Success" />
        <span className="text-xs">Success</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch tone="warning" checked={b} onCheckedChange={setB} aria-label="Warning" />
        <span className="text-xs">Warning</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch tone="destructive" checked={c} onCheckedChange={setC} aria-label="Destructive" />
        <span className="text-xs">Destructive</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch tone="info" checked={d} onCheckedChange={setD} aria-label="Info" />
        <span className="text-xs">Info</span>
      </div>
    </div>
  )
}

export default SwitchTones
