"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function SwitchSizes() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(true)
  const [c, setC] = useState(false)
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch size="sm" checked={a} onCheckedChange={setA} aria-label="Small" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="md" checked={b} onCheckedChange={setB} aria-label="Medium" />
        <span className="text-xs">Medium</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="lg" checked={c} onCheckedChange={setC} aria-label="Large" />
        <span className="text-xs">Large</span>
      </div>
    </div>
  )
}

export default SwitchSizes
