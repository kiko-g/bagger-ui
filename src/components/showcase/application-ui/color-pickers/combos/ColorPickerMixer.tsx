"use client"

import { useState, useEffect } from "react"
import { Copy, Check, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ColorPicker } from "@/components/ui/color-picker"

interface ColorPickerMixerProps {
  className?: string
}

export function ColorPickerMixer({ className }: ColorPickerMixerProps) {
  const [baseColor, setBaseColor] = useState("#6366f1")
  const [whiteAmount, setWhiteAmount] = useState(0)
  const [blackAmount, setBlackAmount] = useState(0)
  const [whiteMixedColor, setWhiteMixedColor] = useState(baseColor)
  const [blackMixedColor, setBlackMixedColor] = useState(baseColor)
  const [copiedWhite, setCopiedWhite] = useState(false)
  const [copiedBlack, setCopiedBlack] = useState(false)

  // Function to mix a color with white (tint)
  const tintColor = (color: string, amount: number): string => {
    const r = Number.parseInt(color.slice(1, 3), 16)
    const g = Number.parseInt(color.slice(3, 5), 16)
    const b = Number.parseInt(color.slice(5, 7), 16)

    const mixAmount = amount / 100

    const mixedR = Math.round(r + (255 - r) * mixAmount)
    const mixedG = Math.round(g + (255 - g) * mixAmount)
    const mixedB = Math.round(b + (255 - b) * mixAmount)

    return `#${mixedR.toString(16).padStart(2, "0")}${mixedG.toString(16).padStart(2, "0")}${mixedB.toString(16).padStart(2, "0")}`
  }

  // Function to mix a color with black (shade)
  const shadeColor = (color: string, amount: number): string => {
    const r = Number.parseInt(color.slice(1, 3), 16)
    const g = Number.parseInt(color.slice(3, 5), 16)
    const b = Number.parseInt(color.slice(5, 7), 16)

    const mixAmount = amount / 100

    const mixedR = Math.round(r * (1 - mixAmount))
    const mixedG = Math.round(g * (1 - mixAmount))
    const mixedB = Math.round(b * (1 - mixAmount))

    return `#${mixedR.toString(16).padStart(2, "0")}${mixedG.toString(16).padStart(2, "0")}${mixedB.toString(16).padStart(2, "0")}`
  }

  // Generate random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`
    setBaseColor(randomColor)
    // Reset sliders
    setWhiteAmount(0)
    setBlackAmount(0)
  }

  // Update mixed colors when base color or sliders change
  useEffect(() => {
    setWhiteMixedColor(tintColor(baseColor, whiteAmount))
    setBlackMixedColor(shadeColor(baseColor, blackAmount))
  }, [baseColor, whiteAmount, blackAmount])

  // Copy hex value to clipboard
  const copyToClipboard = (value: string, isWhite: boolean) => {
    navigator.clipboard.writeText(value)
    if (isWhite) {
      setCopiedWhite(true)
      setTimeout(() => setCopiedWhite(false), 2000)
    } else {
      setCopiedBlack(true)
      setTimeout(() => setCopiedBlack(false), 2000)
    }
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Color Mixer
          <Button variant="outline" size="icon" onClick={generateRandomColor} title="Generate random color">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>Select a base color and mix it with white or black</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div className="mb-2 text-sm font-medium">Base Color</div>
          <ColorPicker value={baseColor} onChange={setBaseColor} showInput={true} showEyeDropper={true} />
        </div>

        {/* Mix with White Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Mix with White: {whiteAmount}%</span>
            <span className="h-5 w-5 rounded-full border" style={{ backgroundColor: "#ffffff" }}></span>
          </div>
          <Slider
            value={[whiteAmount]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => setWhiteAmount(value[0])}
          />
          <div className="flex h-8 overflow-hidden rounded-md">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`white-${i}`}
                className="flex-1"
                style={{ backgroundColor: tintColor(baseColor, i * 10) }}
              ></div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Current Hex Value</div>
            <div className="flex w-full items-center gap-2">
              <div className="h-8 w-8 rounded-md border" style={{ backgroundColor: whiteMixedColor }}></div>
              <code className="bg-muted flex-1 rounded-md px-2 py-1 font-mono text-sm">{whiteMixedColor}</code>
              <Button variant="outline" size="icon" onClick={() => copyToClipboard(whiteMixedColor, true)}>
                {copiedWhite ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mix with Black Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Mix with Black: {blackAmount}%</span>
            <span className="h-5 w-5 rounded-full border" style={{ backgroundColor: "#000000" }}></span>
          </div>
          <Slider
            value={[blackAmount]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => setBlackAmount(value[0])}
          />
          <div className="flex h-8 overflow-hidden rounded-md">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`black-${i}`}
                className="flex-1"
                style={{ backgroundColor: shadeColor(baseColor, i * 10) }}
              ></div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Current Hex Value</div>
            <div className="flex w-full items-center gap-2">
              <div className="h-8 w-8 rounded-md border" style={{ backgroundColor: blackMixedColor }}></div>
              <code className="bg-muted flex-1 rounded-md px-2 py-1 font-mono text-sm">{blackMixedColor}</code>
              <Button variant="outline" size="icon" onClick={() => copyToClipboard(blackMixedColor, false)}>
                {copiedBlack ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
