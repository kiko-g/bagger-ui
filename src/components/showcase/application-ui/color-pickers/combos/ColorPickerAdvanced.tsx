"use client"

import { useState, useCallback, useEffect } from "react"
import { RgbColorPicker, type RgbColor, HexColorInput } from "react-colorful"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Check, Copy, Pipette } from "lucide-react"

export interface ColorPickerAdvancedProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  disabled?: boolean
  className?: string
  popoverClassName?: string
  label?: string
  description?: string
  historySize?: number
  presets?: string[]
}

function hexToRgb(hex: string): RgbColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

function rgbToHex(rgb: RgbColor): string {
  return `#${((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).slice(1)}`
}

export function ColorPickerAdvanced({
  value,
  onChange,
  onBlur,
  disabled,
  className,
  popoverClassName,
  label,
  description,
  historySize = 18,
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
    "#fff176",
    "#ff8a65",
    "#90a4ae",
  ],
}: ColorPickerAdvancedProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [hexValue, setHexValue] = useState(value || "#000000")
  const [rgbValue, setRgbValue] = useState<RgbColor>(hexToRgb(value || "#000000"))
  const [history, setHistory] = useState<string[]>([])

  // determine if the color is light or dark to set appropriate text color
  const isLight = useCallback((color: string) => {
    const hex = color.replace("#", "")
    const r = Number.parseInt(hex.substr(0, 2), 16)
    const g = Number.parseInt(hex.substr(2, 2), 16)
    const b = Number.parseInt(hex.substr(4, 2), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128
  }, [])

  // load history from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem("color-picker-history")
      if (savedHistory) {
        try {
          setHistory(JSON.parse(savedHistory))
        } catch (e) {
          console.error("Failed to parse color history:", e)
        }
      }
    }
  }, [])

  // save history to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined" && history.length > 0) {
      localStorage.setItem("color-picker-history", JSON.stringify(history))
    }
  }, [history])

  // sync hex and rgb values on value prop change
  useEffect(() => {
    if (value) {
      setHexValue(value)
      setRgbValue(hexToRgb(value))
    }
  }, [value])

  const handleHexChange = useCallback(
    (hex: string) => {
      setHexValue(hex)
      setRgbValue(hexToRgb(hex))
      onChange(hex)

      // add to history if new color
      setHistory((prev) => {
        const newHistory = prev.filter((c) => c.toLowerCase() !== hex.toLowerCase())
        return [hex, ...newHistory].slice(0, historySize)
      })
    },
    [onChange, historySize],
  )

  const handleRgbChange = useCallback(
    (rgb: RgbColor) => {
      setRgbValue(rgb)
      const hex = rgbToHex(rgb)
      setHexValue(hex)
      onChange(hex)

      // add to history if new color
      setHistory((prev) => {
        const newHistory = prev.filter((c) => c.toLowerCase() !== hex.toLowerCase())
        return [hex, ...newHistory].slice(0, historySize)
      })
    },
    [onChange, historySize],
  )

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(hexValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [hexValue])

  const useEyeDropper = useCallback(async () => {
    // @ts-ignore - EyeDropper API is not yet in the TypeScript DOM types
    if (!window.EyeDropper) {
      console.warn("EyeDropper API not supported in this browser")
      return
    }

    try {
      // @ts-ignore
      const eyeDropper = new EyeDropper()
      const result = await eyeDropper.open()
      handleHexChange(result.sRGBHex)
    } catch (e) {
      console.error("Error using eyedropper:", e)
    }
  }, [handleHexChange])

  // check if EyeDropper API is available
  const [eyeDropperSupported, setEyeDropperSupported] = useState(false)

  useEffect(() => {
    // @ts-ignore - EyeDropper API is not yet in the TypeScript DOM types
    setEyeDropperSupported(typeof window !== "undefined" && "EyeDropper" in window)
  }, [])

  return (
    <div className="flex flex-col gap-1.5">
      {label && <Label>{label}</Label>}
      {description && <p className="text-muted-foreground mb-2 text-sm">{description}</p>}

      <div className="flex items-center gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              disabled={disabled}
              variant="outline"
              size="icon"
              className={cn("h-10 w-10 border-2", className)}
              style={{
                backgroundColor: hexValue,
                borderColor: isLight(hexValue) ? "#00000020" : "#ffffff20",
              }}
              aria-label={`Select color: ${hexValue}`}
            >
              <span className="sr-only">Open color picker</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={cn("w-96 p-3", popoverClassName)}
            sideOffset={5}
            onInteractOutside={() => {
              setOpen(false)
              onBlur?.()
            }}
          >
            <Tabs defaultValue="picker">
              <TabsList className="mb-2 w-full">
                <TabsTrigger value="picker" className="flex-1">
                  Picker
                </TabsTrigger>
                <TabsTrigger value="sliders" className="flex-1">
                  Sliders
                </TabsTrigger>
                <TabsTrigger value="presets" className="flex-1">
                  Presets
                </TabsTrigger>
              </TabsList>

              <TabsContent value="picker" className="mt-0 flex h-full min-h-60 flex-col justify-between space-y-4">
                <RgbColorPicker color={rgbValue} onChange={handleRgbChange} className="w-full" />

                <div className="flex items-center gap-2">
                  <div className="border-input flex h-8 flex-1 items-center overflow-hidden rounded-md border">
                    <div className="h-full w-8" style={{ backgroundColor: hexValue }} aria-hidden="true" />
                    <div className="flex-1 px-2">
                      <HexColorInput
                        color={hexValue}
                        onChange={handleHexChange}
                        prefixed
                        className="bg-background w-full border-0 p-0 text-sm focus:ring-0 focus:outline-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={copyToClipboard}
                    aria-label={copied ? "Copied" : "Copy color code"}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>

                  {eyeDropperSupported && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0"
                      onClick={useEyeDropper}
                      aria-label="Pick color from screen"
                    >
                      <Pipette className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="sliders" className="mt-0 flex h-full min-h-60 flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label>Red</Label>
                      <span className="text-muted-foreground text-xs">{rgbValue.r}</span>
                    </div>
                    <Slider
                      min={0}
                      max={255}
                      step={1}
                      value={[rgbValue.r]}
                      onValueChange={(value) => handleRgbChange({ ...rgbValue, r: value[0] })}
                      className="[&_.relative]:bg-gradient-to-r [&_.relative]:from-black [&_.relative]:to-red-600 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label>Green</Label>
                      <span className="text-muted-foreground text-xs">{rgbValue.g}</span>
                    </div>
                    <Slider
                      min={0}
                      max={255}
                      step={1}
                      value={[rgbValue.g]}
                      onValueChange={(value) => handleRgbChange({ ...rgbValue, g: value[0] })}
                      className="[&_.relative]:bg-gradient-to-r [&_.relative]:from-black [&_.relative]:to-green-600 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label>Blue</Label>
                      <span className="text-muted-foreground text-xs">{rgbValue.b}</span>
                    </div>
                    <Slider
                      min={0}
                      max={255}
                      step={1}
                      value={[rgbValue.b]}
                      onValueChange={(value) => handleRgbChange({ ...rgbValue, b: value[0] })}
                      className="[&_.relative]:bg-gradient-to-r [&_.relative]:from-black [&_.relative]:to-blue-600 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="border-input flex h-8 flex-1 items-center overflow-hidden rounded-md border">
                    <div className="h-full w-8" style={{ backgroundColor: hexValue }} aria-hidden="true" />
                    <div className="flex-1 px-2">
                      <HexColorInput
                        color={hexValue}
                        onChange={handleHexChange}
                        prefixed
                        className="bg-background w-full border-0 p-0 text-sm focus:ring-0 focus:outline-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={copyToClipboard}
                    aria-label={copied ? "Copied" : "Copy color code"}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="presets" className="mt-0 flex h-full min-h-60 flex-col justify-between space-y-4">
                <div className="grid w-fit grid-cols-9 gap-x-2 gap-y-2">
                  {presets.map((preset) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      size="icon"
                      className={cn(
                        "h-8 w-8 rounded-md border p-0",
                        hexValue.toLowerCase() === preset.toLowerCase() && "ring-ring ring-1",
                      )}
                      style={{ backgroundColor: preset, borderColor: "#00000030" }}
                      onClick={() => handleHexChange(preset)}
                      aria-label={`Select color: ${preset}`}
                    >
                      {hexValue.toLowerCase() === preset.toLowerCase() && (
                        <Check className="h-4 w-4 text-white drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)]" />
                      )}
                    </Button>
                  ))}
                </div>

                {history.length > 0 && (
                  <>
                    <div className="text-muted-foreground mt-4 mb-1 text-xs font-medium">Recent Colors</div>
                    <div className="grid w-fit grid-cols-9 gap-x-2 gap-y-2">
                      {history.map((color, index) => (
                        <Button
                          key={`${color}-${index}`}
                          type="button"
                          variant="outline"
                          size="icon"
                          className={cn(
                            "h-8 w-8 rounded-md border p-0",
                            hexValue.toLowerCase() === color.toLowerCase() && "ring-ring ring-1",
                          )}
                          style={{ backgroundColor: color, borderColor: "#00000030" }}
                          onClick={() => handleHexChange(color)}
                          aria-label={`Select color: ${color}`}
                        >
                          {hexValue.toLowerCase() === color.toLowerCase() && (
                            <Check className="h-4 w-4 text-white drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)]" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </PopoverContent>
        </Popover>

        <div className="relative max-w-[8.5rem] flex-1">
          <div
            className="border-input absolute top-0 bottom-0 left-0 w-8 rounded-l-md border-y border-l"
            style={{ backgroundColor: hexValue }}
            aria-hidden="true"
          />
          <HexColorInput
            color={hexValue}
            onChange={handleHexChange}
            prefixed
            className="bg-background border-input focus:ring-ring h-10 w-full rounded-md border pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
            onBlur={onBlur}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

ColorPickerAdvanced.displayName = "ColorPickerAdvanced"
