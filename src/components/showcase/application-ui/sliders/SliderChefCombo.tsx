"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function SliderChefCombo() {
  const [value, setValue] = useState<number[]>([20])

  return (
    <div className="w-full max-w-xl">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium">Intensity</span>
        <span className="text-muted-foreground text-xs">{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={10}
        thickness="md"
        size="lg"
        stops={10}
        trackClassName="bg-linear-to-r from-zinc-200 via-primary/20 to-zinc-200 dark:from-zinc-800 dark:via-primary/20 dark:to-zinc-800"
        rangeClassName="bg-linear-to-r from-primary to-secondary"
        thumbClassName="border-foreground/30 backdrop-blur supports-backdrop-filter:bg-background/70"
      />
      <div className="mt-3 grid grid-cols-8 gap-1">
        {["Min", "", "", "Mid", "", "", "", "Max"].map((label, i) => (
          <div key={i} className="flex justify-center">
            <span className="text-muted-foreground text-[10px]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderChefCombo
