"use client"

import React, { useEffect, useRef, useState } from "react"

function SliderSimpleDemo() {
  return (
    <SliderSimple
      min={0}
      max={100}
      step={1}
      initialValue={50}
      onChange={(value) => {
        console.log(value)
      }}
    />
  )
}

type Props = {
  min?: number
  max?: number
  step?: number
  initialValue?: number
  onChange?: (value: number) => void
}

export function SliderSimple({ min = 0, max = 100, step = 1, initialValue = 0, onChange }: Props) {
  const sliderRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue)
  const valueOffset = ((value - min) / (max - min)) * 100 + 1

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.value = value.toString()
    }
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div className="relative flex w-72 flex-col">
      <input
        type="range"
        ref={sliderRef}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <div
        className="absolute top-6 text-sm font-medium"
        style={{
          left: `${valueOffset}%`,
          transform: "translateX(-50%)", // Center the value display
        }}
      >
        {value}
      </div>
    </div>
  )
}
