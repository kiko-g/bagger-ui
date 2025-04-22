"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ColorPicker } from "@/components/ui/color-picker"

import { Check, Copy, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return { h, s, l }
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function getTextColor(bgColor: string): string {
  const rgb = hexToRgb(bgColor)
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b)
  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

function mixColors(color1: string, color2: string, weight: number): string {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const r = Math.round(rgb1.r * (1 - weight) + rgb2.r * weight)
  const g = Math.round(rgb1.g * (1 - weight) + rgb2.g * weight)
  const b = Math.round(rgb1.b * (1 - weight) + rgb2.b * weight)

  return rgbToHex(r, g, b)
}

function lightenColor(color: string, amount: number): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Increase lightness
  hsl.l = Math.min(1, hsl.l + amount)

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

function darkenColor(color: string, amount: number): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Decrease lightness
  hsl.l = Math.max(0, hsl.l - amount)

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

function adjustSaturation(color: string, amount: number): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Adjust saturation
  hsl.s = Math.min(1, Math.max(0, hsl.s + amount))

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

interface ColorTheme {
  background: string
  main: string
  secondary: string
  links: string
  main_button_background: string
  main_button_text: string
  secondary_button_background: string
  secondary_button_text: string
}

interface ColorBundle {
  name: string
  "bundle-content": ColorTheme
  "bundle-light": ColorTheme
  "bundle-dark": ColorTheme
}

export function ColorPickerBundleGenerator() {
  const [bundleName, setBundleName] = useState("My Color Bundle")
  const [primaryColor, setPrimaryColor] = useState("#A3581B")
  const [secondaryColor, setSecondaryColor] = useState("#4F5D27")
  const [colorBundle, setColorBundle] = useState<ColorBundle | null>(null)
  const [copied, setCopied] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")

  // Generate the color bundle whenever primary or secondary colors change
  useEffect(() => {
    generateColorBundle()
  }, [primaryColor, secondaryColor, bundleName])

  const generateColorBundle = () => {
    // Content theme
    const contentTheme: ColorTheme = {
      background: lightenColor(mixColors(primaryColor, secondaryColor, 0.5), 0.4), // Light mix of primary and secondary
      main: primaryColor,
      secondary: secondaryColor,
      links: secondaryColor, // Same as secondary
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: secondaryColor,
      secondary_button_text: getTextColor(secondaryColor),
    }

    // Light theme
    const lightTheme: ColorTheme = {
      background: "#FFFFFF", // White background
      main: primaryColor,
      secondary: secondaryColor,
      links: secondaryColor, // Same as secondary
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: lightenColor(primaryColor, 0.3), // Lighter version of primary
      secondary_button_text: primaryColor,
    }

    // Dark theme
    const darkTheme: ColorTheme = {
      background: "#111827", // Dark background
      main: lightenColor(primaryColor, 0.25), // Lighter version of primary
      secondary: lightenColor(secondaryColor, 0.2), // Lighter version of secondary
      links: lightenColor(primaryColor, 0.25), // Same as main
      main_button_background: adjustSaturation(lightenColor(primaryColor, 0.1), 0.1), // Brighter primary
      main_button_text: getTextColor(adjustSaturation(lightenColor(primaryColor, 0.1), 0.1)),
      secondary_button_background: "#374151", // Dark gray
      secondary_button_text: lightenColor(primaryColor, 0.25), // Same as main
    }

    // Create the color bundle
    const bundle: ColorBundle = {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }

    setColorBundle(bundle)
    setJsonOutput(JSON.stringify(bundle, null, 2))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateRandomColors = () => {
    const randomHex = () => {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`
    }

    setPrimaryColor(randomHex())
    setSecondaryColor(randomHex())
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Color Bundle Generator</h2>
          <p className="text-muted-foreground text-sm">
            Generate a complete color bundle from primary and secondary colors
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={generateRandomColors}>
            <Sparkles className="mr-2 h-4 w-4" />
            Random Colors
          </Button>
          <Button variant="outline" onClick={copyToClipboard}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Copy JSON"}
          </Button>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-4">
          <Label htmlFor="bundle-name">Bundle Name</Label>
          <Input id="bundle-name" value={bundleName} onChange={(e) => setBundleName(e.target.value)} className="mt-1" />
        </div>
        <div className="space-y-4">
          <Label>Primary Color</Label>
          <ColorPicker value={primaryColor} onChange={setPrimaryColor} showEyeDropper />
        </div>
        <div className="space-y-4">
          <Label>Secondary Color</Label>
          <ColorPicker value={secondaryColor} onChange={setSecondaryColor} showEyeDropper />
        </div>
      </div>

      {colorBundle && (
        <>
          {/* Theme Previews - 3 columns */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Content Theme Preview */}
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg p-6" style={{ backgroundColor: colorBundle["bundle-content"].background }}>
                  <h3 className="mb-2 text-xl font-bold" style={{ color: colorBundle["bundle-content"].main }}>
                    Content Theme
                  </h3>
                  <p className="mb-4" style={{ color: colorBundle["bundle-content"].secondary }}>
                    This is a preview of your content theme with{" "}
                    <a href="#" className="underline" style={{ color: colorBundle["bundle-content"].links }}>
                      sample links
                    </a>{" "}
                    and text.
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-content"].main_button_background,
                        color: colorBundle["bundle-content"].main_button_text,
                      }}
                    >
                      Primary
                    </button>
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-content"].secondary_button_background,
                        color: colorBundle["bundle-content"].secondary_button_text,
                      }}
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Light Theme Preview */}
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg p-6" style={{ backgroundColor: colorBundle["bundle-light"].background }}>
                  <h3 className="mb-2 text-xl font-bold" style={{ color: colorBundle["bundle-light"].main }}>
                    Light Theme
                  </h3>
                  <p className="mb-4" style={{ color: colorBundle["bundle-light"].secondary }}>
                    This is a preview of your light theme with{" "}
                    <a href="#" className="underline" style={{ color: colorBundle["bundle-light"].links }}>
                      sample links
                    </a>{" "}
                    and text.
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-light"].main_button_background,
                        color: colorBundle["bundle-light"].main_button_text,
                      }}
                    >
                      Primary
                    </button>
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-light"].secondary_button_background,
                        color: colorBundle["bundle-light"].secondary_button_text,
                      }}
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dark Theme Preview */}
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg p-6" style={{ backgroundColor: colorBundle["bundle-dark"].background }}>
                  <h3 className="mb-2 text-xl font-bold" style={{ color: colorBundle["bundle-dark"].main }}>
                    Dark Theme
                  </h3>
                  <p className="mb-4" style={{ color: colorBundle["bundle-dark"].secondary }}>
                    This is a preview of your dark theme with{" "}
                    <a href="#" className="underline" style={{ color: colorBundle["bundle-dark"].links }}>
                      sample links
                    </a>{" "}
                    and text.
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-dark"].main_button_background,
                        color: colorBundle["bundle-dark"].main_button_text,
                      }}
                    >
                      Primary
                    </button>
                    <button
                      className="rounded-md px-4 py-2"
                      style={{
                        backgroundColor: colorBundle["bundle-dark"].secondary_button_background,
                        color: colorBundle["bundle-dark"].secondary_button_text,
                      }}
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Color Palette Display */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Color Palette</h3>

            {/* Content Theme Colors */}
            <div className="space-y-3">
              <Label>Content Theme Colors</Label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {Object.entries(colorBundle["bundle-content"]).map(([key, value]) => (
                  <div
                    key={`content-${key}`}
                    className="flex h-12 items-center justify-between gap-2 rounded-md border p-2 text-sm font-medium capitalize"
                    style={{ backgroundColor: value, color: getTextColor(value) }}
                  >
                    <span className="tracking-tighter">
                      {key.split("_")[0]} {key.split("_")[1]}
                    </span>
                    <span className="text-2xs rounded bg-black px-1 py-0.5 font-bold text-white uppercase">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Light Theme Colors */}
            <div className="space-y-3">
              <Label>Light Theme Colors</Label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {Object.entries(colorBundle["bundle-light"]).map(([key, value]) => (
                  <div
                    key={`light-${key}`}
                    className="flex h-12 items-center justify-between gap-2 rounded-md border p-2 text-sm font-medium capitalize"
                    style={{ backgroundColor: value, color: getTextColor(value) }}
                  >
                    <span className="tracking-tighter">
                      {key.split("_")[0]} {key.split("_")[1]}
                    </span>
                    <span className="text-2xs rounded bg-black px-1 py-0.5 font-bold text-white uppercase">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Theme Colors */}
            <div className="space-y-3">
              <Label>Dark Theme Colors</Label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {Object.entries(colorBundle["bundle-dark"]).map(([key, value]) => (
                  <div
                    key={`dark-${key}`}
                    className="flex h-12 items-center justify-between gap-2 rounded-md border p-2 text-sm font-medium capitalize"
                    style={{ backgroundColor: value, color: getTextColor(value) }}
                  >
                    <span className="tracking-tighter">
                      {key.split("_")[0]} {key.split("_")[1]}
                    </span>
                    <span className="text-2xs rounded bg-black px-1 py-0.5 font-bold text-white uppercase">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* JSON Output */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label>JSON Output</Label>
              <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </div>

            <pre className="scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent text-2xs overflow-auto rounded-md p-2 font-mono leading-4 text-emerald-400 dark:text-emerald-300">
              {jsonOutput}
            </pre>
          </div>
        </>
      )}
    </div>
  )
}
