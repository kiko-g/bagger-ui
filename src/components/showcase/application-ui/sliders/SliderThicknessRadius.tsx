"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function SliderThicknessRadius() {
  const [valueA, setValueA] = useState<number[]>([30])
  const [valueB, setValueB] = useState<number[]>([70])
  return (
    <div className="grid w-full max-w-xl grid-cols-1 gap-6">
      <div>
        <div className="mb-2 text-xs">Thicker track, large thumb</div>
        <Slider value={valueA} onValueChange={setValueA} max={100} step={1} thickness="lg" size="lg" />
      </div>
      <div>
        <div className="mb-2 text-xs">Thin track, squared</div>
        <Slider
          value={valueB}
          onValueChange={setValueB}
          max={100}
          step={1}
          thickness="xs"
          roundedness="none"
          size="sm"
        />
      </div>
    </div>
  )
}

export default SliderThicknessRadius
