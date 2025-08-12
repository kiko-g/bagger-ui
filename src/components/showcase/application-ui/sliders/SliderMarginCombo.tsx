"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

type Props = {
  label: string
  min?: number
  max?: number
  step?: number
  value?: number
}

function formatPx(n: number) {
  return `${n}px`
}

export function SliderMargin({ label, min = 0, max = 80, step = 8, value = 16 }: Props) {
  const [val, setVal] = useState<number>(value)
  return (
    <div className="w-full max-w-md">
      <div className="mb-2 text-base font-semibold tracking-tight">{label}</div>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <Slider
            min={min}
            max={max}
            step={step}
            stops={max / step}
            defaultValue={[val]}
            onValueChange={(v) => setVal(v[0] ?? val)}
            thickness="md"
            roundedness="lg"
            size="md"
            className="py-2"
            trackClassName="bg-foreground/15 dark:bg-foreground/20"
            rangeClassName="bg-foreground"
            thumbClassName="border-foreground/50"
          />
        </div>
        <div className="w-16 text-right text-sm tabular-nums">{formatPx(val)}</div>
      </div>
      <div className="text-muted-foreground mt-1 flex items-center justify-between text-xs">
        <span>{min}</span>
        <span className="opacity-70">{max}</span>
      </div>
    </div>
  )
}

export function SliderMarginCombo() {
  return (
    <div className="grid w-full max-w-xl gap-6">
      <SliderMargin label="Top margin" />
      <SliderMargin label="Bottom margin" value={24} />
    </div>
  )
}
