"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { HexColorPicker, HexColorInput } from "react-colorful"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Check, Copy, Pipette } from "lucide-react"

export interface ColorPickerProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  disabled?: boolean
  className?: string
  popoverClassName?: string
  showInput?: boolean
  showEyeDropper?: boolean
  label?: string
  description?: string
}

export function ColorPicker({
  value,
  onChange,
  onBlur,
  disabled,
  className,
  popoverClassName,
  showInput = true,
  showEyeDropper = false,
  label,
  description,
}: ColorPickerProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const parsedValue = useMemo(() => value || "#FFFFFF", [value])

  // Determine if the color is light or dark to set appropriate text color
  const isLight = useMemo(() => {
    const hex = parsedValue.replace("#", "")
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128
  }, [parsedValue])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(parsedValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [parsedValue])

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
      onChange(result.sRGBHex)
    } catch (e) {
      console.error("Error using eyedropper:", e)
    }
  }, [onChange])

  // Check if EyeDropper API is available
  const [eyeDropperSupported, setEyeDropperSupported] = useState(false)

  useEffect(() => {
    // @ts-ignore - EyeDropper API is not yet in the TypeScript DOM types
    setEyeDropperSupported(typeof window !== "undefined" && "EyeDropper" in window)
  }, [])

  return (
    <div className="flex flex-col gap-1">
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
              className={cn("h-10 w-10 border", className)}
              style={{ backgroundColor: parsedValue, borderColor: isLight ? "#00000020" : "#ffffff20" }}
              aria-label={`Select color: ${parsedValue}`}
            >
              <span className="sr-only">Open color picker</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={cn("w-64 p-3", popoverClassName)}
            sideOffset={5}
            onInteractOutside={() => {
              setOpen(false)
              onBlur?.()
            }}
          >
            <HexColorPicker color={parsedValue} onChange={onChange} className="mb-3 w-full" />

            <div className="flex items-center gap-2">
              {showInput && (
                <div className="border-input flex h-8 flex-1 items-center overflow-hidden rounded-md border">
                  <div aria-hidden="true" className="h-full w-8" style={{ backgroundColor: parsedValue }} />
                  <div className="flex-1 px-2">
                    <HexColorInput
                      color={parsedValue}
                      onChange={onChange}
                      prefixed
                      className="w-full border-0 bg-transparent p-0 text-sm focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              )}

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

              {showEyeDropper && eyeDropperSupported && (
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
          </PopoverContent>
        </Popover>

        {showInput && (
          <div className="relative max-w-34 flex-1">
            <div
              className="border-input absolute top-0 bottom-0 left-0 w-8 rounded-l-md border"
              style={{ backgroundColor: parsedValue, borderColor: isLight ? "#00000020" : "#ffffff20" }}
              aria-hidden="true"
            />
            <HexColorInput
              color={parsedValue}
              onChange={onChange}
              prefixed
              className="bg-background border-input focus:ring-ring h-10 w-full rounded-md border pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
              onBlur={onBlur}
              disabled={disabled}
            />
          </div>
        )}
      </div>
    </div>
  )
}

ColorPicker.displayName = "ColorPicker"
