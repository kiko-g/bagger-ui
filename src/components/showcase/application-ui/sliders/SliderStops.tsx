"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function SliderStops() {
  const [value, setValue] = useState<number[]>([40])
  return (
    <div className="w-full max-w-xl">
      <Slider
        defaultValue={[40]}
        value={value}
        onValueChange={setValue}
        max={100}
        step={10}
        stops={10}
        trackClassName="bg-gradient-to-r from-zinc-200 via-primary/20 to-zinc-200 dark:from-zinc-800 dark:via-primary/20 dark:to-zinc-800"
        rangeClassName="bg-linear-to-r from-primary to-secondary"
        thumbClassName="border-primary/60"
      />
      <div className="text-muted-foreground mt-2 text-xs">{value[0]}%</div>
    </div>
  )
}

export default SliderStops
