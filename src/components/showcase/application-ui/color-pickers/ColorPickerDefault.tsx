"use client"

import { useState, useCallback } from "react"
import { ColorPicker } from "@/components/ui/color-picker"

export function ColorPickerDefault() {
  const [color, setColor] = useState("#000000")

  const handleChange = useCallback((value: string) => {
    setColor(value)
  }, [])

  return <ColorPicker value={color} onChange={handleChange} />
}
