"use client"

import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function SliderBasic() {
  const min = 0
  const step = 10
  const max = 100
  const stops = max / step
  const [value, setValue] = useState<number>(33)

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-4">
        <Slider
          min={min}
          max={max}
          step={step}
          defaultValue={[value]}
          onValueChange={(v) => setValue(v[0] ?? value)}
          trackClassName="bg-foreground/15 dark:bg-foreground/20"
          className="py-2"
        />
        <div className="text-foreground w-8 text-right font-semibold">{value}</div>
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="text-foreground/50 text-sm">{min}</div>
        <div className="text-foreground/50 text-sm">{max}</div>
      </div>
    </div>
  )
}
