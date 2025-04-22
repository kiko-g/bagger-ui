"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ColorPicker, ColorPickerProps } from "@/components/ui/color-picker"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export interface ColorPickerWithPresetsProps extends ColorPickerProps {
  presets?: string[]
  presetsClassName?: string
  presetsLabel?: string
  popoverClassName?: string
  children?: React.ReactNode
}

export function ColorPickerWithPresets({
  value,
  onChange,
  presets = [
    "#000000",
    "#ffffff",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#e57373",
    "#ba68c8",
    "#4fc3f7",
    "#81c784",
  ],
  presetsClassName,
  presetsLabel = "Presets",
  popoverClassName,
  ...props
}: ColorPickerWithPresetsProps) {
  const [localValue, setLocalValue] = useState(value)

  const handleChange = useCallback(
    (color: string) => {
      setLocalValue(color)
      onChange(color)
    },
    [onChange],
  )

  return (
    <div>
      <ColorPicker
        value={localValue}
        onChange={handleChange}
        popoverClassName={cn("w-auto", popoverClassName)}
        {...props}
      />
      <div className="w-full">
        {presetsLabel && <div className="text-muted-foreground mt-4 mb-2 text-xs font-medium">{presetsLabel}</div>}
        <div className={cn("mt-2 grid w-fit grid-cols-6 gap-2", presetsClassName)}>
          {presets.map((preset) => (
            <Button
              key={preset}
              type="button"
              variant="outline"
              size="icon"
              className={cn(
                "h-6 w-6 rounded-md border p-0",
                localValue.toLowerCase() === preset.toLowerCase() && "ring-ring ring-1",
              )}
              style={{ backgroundColor: preset, borderColor: "#00000030" }}
              onClick={() => handleChange(preset)}
              aria-label={`Select color: ${preset}`}
            >
              {localValue.toLowerCase() === preset.toLowerCase() && (
                <Check className="h-3 w-3 text-white drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)]" />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

ColorPickerWithPresets.displayName = "ColorPickerWithPresets"
