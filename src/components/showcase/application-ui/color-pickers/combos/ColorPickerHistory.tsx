"use client"

import { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ColorPicker, type ColorPickerProps } from "@/components/ui/color-picker"
import { Button } from "@/components/ui/button"
import { Check, RotateCcw } from "lucide-react"

export interface ColorPickerWithHistoryProps extends ColorPickerProps {
  historySize?: number
  historyClassName?: string
  historyLabel?: string
  storageKey?: string
}

export function ColorPickerWithHistory({
  value,
  onChange,
  historySize = 12,
  historyClassName,
  historyLabel = "Recent Colors",
  storageKey = "color-picker-history",
  popoverClassName,
  ...props
}: ColorPickerWithHistoryProps) {
  const [localValue, setLocalValue] = useState(value)
  const [history, setHistory] = useState<string[]>([])

  // load history from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem(storageKey)
      if (savedHistory) {
        try {
          setHistory(JSON.parse(savedHistory))
        } catch (e) {
          console.error("Failed to parse color history:", e)
        }
      }
    }
  }, [storageKey])

  // save history to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined" && history.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(history))
    }
  }, [history, storageKey])

  const handleChange = useCallback(
    (color: string) => {
      setLocalValue(color)
      onChange(color)

      // add to history if new color
      setHistory((prev) => {
        const newHistory = prev.filter((c) => c.toLowerCase() !== color.toLowerCase())
        return [color, ...newHistory].slice(0, historySize)
      })
    },
    [onChange, historySize],
  )

  const clearHistory = useCallback(() => {
    setHistory([])
    if (typeof window !== "undefined") localStorage.removeItem(storageKey)
  }, [storageKey])

  return (
    <div>
      <ColorPicker
        value={localValue}
        onChange={handleChange}
        popoverClassName={cn("w-auto", popoverClassName)}
        {...props}
      />
      {history.length > 0 && (
        <div className="w-full">
          <div className="mt-4 mb-2 flex items-center justify-between">
            <div className="text-muted-foreground text-xs font-medium">{historyLabel}</div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-5 w-5"
              onClick={clearHistory}
              aria-label="Clear color history"
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>
          <div className={cn("mt-2 grid w-fit grid-cols-6 gap-2", historyClassName)}>
            {history.map((color, index) => (
              <Button
                key={`${color}-${index}`}
                type="button"
                variant="outline"
                size="icon"
                className={cn(
                  "h-6 w-6 rounded-md border p-0",
                  localValue.toLowerCase() === color.toLowerCase() && "ring-ring ring-1",
                )}
                style={{ backgroundColor: color, borderColor: "#00000030" }}
                onClick={() => handleChange(color)}
                aria-label={`Select color: ${color}`}
              >
                {localValue.toLowerCase() === color.toLowerCase() && (
                  <Check className="h-3 w-3 text-white drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)]" />
                )}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

ColorPickerWithHistory.displayName = "ColorPickerWithHistory"
