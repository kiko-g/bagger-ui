"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ColorPicker } from "@/components/ui/color-picker"

import { Check, ChevronDown, Copy, Sparkles } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

// New color utility functions
function getColorCategory(color: string): "light" | "dark" | "vibrant" | "muted" | "neutral" {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  const luminance = getLuminance(rgb.r, rgb.g, rgb.b)

  if (hsl.s < 0.15) return "neutral"
  if (luminance > 0.7) return "light"
  if (luminance < 0.3) return "dark"
  if (hsl.s > 0.6) return "vibrant"
  return "muted"
}

function getComplementaryColor(color: string): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Rotate hue by 180 degrees
  hsl.h = (hsl.h + 0.5) % 1

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

function getAnalogousColor(color: string, offset = 0.083): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Rotate hue by 30 degrees (0.083 in the 0-1 scale)
  hsl.h = (hsl.h + offset) % 1

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

function getTriadicColor(color: string, offset = 0.333): string {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Rotate hue by 120 degrees (0.333 in the 0-1 scale)
  hsl.h = (hsl.h + offset) % 1

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b)
}

function getSplitComplementaryColor(color: string, offset = 0.15): string {
  const complementary = getComplementaryColor(color)
  return getAnalogousColor(complementary, offset)
}

function adjustColorForBackground(color: string, bgColor: string, contrastThreshold = 4.5): string {
  const bgRgb = hexToRgb(bgColor)
  const bgLuminance = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b)

  let adjustedColor = color
  let colorRgb = hexToRgb(adjustedColor)
  let colorLuminance = getLuminance(colorRgb.r, colorRgb.g, colorRgb.b)

  // Calculate contrast ratio
  const contrast = (Math.max(bgLuminance, colorLuminance) + 0.05) / (Math.min(bgLuminance, colorLuminance) + 0.05)

  // If contrast is below threshold, adjust the color
  if (contrast < contrastThreshold) {
    const hsl = rgbToHsl(colorRgb.r, colorRgb.g, colorRgb.b)

    // Determine if we should lighten or darken based on background
    if (bgLuminance > 0.5) {
      // Dark text on light background
      let amount = 0.1
      while (amount < 0.8) {
        adjustedColor = darkenColor(color, amount)
        colorRgb = hexToRgb(adjustedColor)
        colorLuminance = getLuminance(colorRgb.r, colorRgb.g, colorRgb.b)
        const newContrast =
          (Math.max(bgLuminance, colorLuminance) + 0.05) / (Math.min(bgLuminance, colorLuminance) + 0.05)
        if (newContrast >= contrastThreshold) break
        amount += 0.1
      }
    } else {
      // Light text on dark background
      let amount = 0.1
      while (amount < 0.8) {
        adjustedColor = lightenColor(color, amount)
        colorRgb = hexToRgb(adjustedColor)
        colorLuminance = getLuminance(colorRgb.r, colorRgb.g, colorRgb.b)
        const newContrast =
          (Math.max(bgLuminance, colorLuminance) + 0.05) / (Math.min(bgLuminance, colorLuminance) + 0.05)
        if (newContrast >= contrastThreshold) break
        amount += 0.1
      }
    }
  }

  return adjustedColor
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

const ColorBundleGenerators = {
  simple: (primaryColor: string, secondaryColor: string, bundleName: string): ColorBundle => {
    const contentTheme: ColorTheme = {
      background: "#FFFFFF",
      main: darkenColor(primaryColor, 0.3),
      secondary: darkenColor(secondaryColor, 0.3),
      links: lightenColor(secondaryColor, 0.1),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: secondaryColor,
      secondary_button_text: getTextColor(secondaryColor),
    }

    const lightTheme: ColorTheme = {
      background: lightenColor(mixColors(primaryColor, secondaryColor, 0.5), 0.5),
      main: darkenColor(primaryColor, 0.3),
      secondary: darkenColor(secondaryColor, 0.3),
      links: lightenColor(secondaryColor, 0.1),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: lightenColor(secondaryColor, 0.3),
      secondary_button_text: darkenColor(secondaryColor, 0.2),
    }

    const darkTheme: ColorTheme = {
      background: darkenColor(primaryColor, 0.3),
      main: lightenColor(primaryColor, 0.25),
      secondary: lightenColor(secondaryColor, 0.2),
      links: lightenColor(primaryColor, 0.25),
      main_button_background: adjustSaturation(lightenColor(primaryColor, 0.1), 0.1),
      main_button_text: getTextColor(adjustSaturation(lightenColor(primaryColor, 0.1), 0.1)),
      secondary_button_background: getTextColor(secondaryColor),
      secondary_button_text: secondaryColor,
    }

    return {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }
  },

  // New generator: Adaptive - adjusts strategy based on color properties
  adaptive: (primaryColor: string, secondaryColor: string, bundleName: string): ColorBundle => {
    const primaryCategory = getColorCategory(primaryColor)
    const secondaryCategory = getColorCategory(secondaryColor)

    // Determine background colors based on primary color properties
    let contentBackground = "#FFFFFF"
    let lightBackground = "#F8FAFC"
    let darkBackground = "#111827"

    if (primaryCategory === "light") {
      // For light primary colors, use a slightly tinted background
      contentBackground = lightenColor(primaryColor, 0.3)
      lightBackground = lightenColor(primaryColor, 0.4)
    } else if (primaryCategory === "dark") {
      // For dark primary colors, use a very light tint of the color
      contentBackground = lightenColor(primaryColor, 0.8)
      lightBackground = lightenColor(primaryColor, 0.9)
      darkBackground = darkenColor(primaryColor, 0.1)
    }

    // Adjust text colors for optimal contrast
    const contentMain = adjustColorForBackground(primaryColor, contentBackground)
    const contentSecondary = adjustColorForBackground(secondaryColor, contentBackground)
    const lightMain = adjustColorForBackground(primaryColor, lightBackground)
    const lightSecondary = adjustColorForBackground(secondaryColor, lightBackground)
    const darkMain = adjustColorForBackground(lightenColor(primaryColor, 0.2), darkBackground)
    const darkSecondary = adjustColorForBackground(lightenColor(secondaryColor, 0.2), darkBackground)

    // Create button colors with appropriate contrast
    const contentMainButton = primaryColor
    const contentSecondaryButton = secondaryColor
    const lightMainButton = primaryColor
    const lightSecondaryButton = secondaryColor
    const darkMainButton = adjustColorForBackground(primaryColor, darkBackground, 3)
    const darkSecondaryButton = adjustColorForBackground(secondaryColor, darkBackground, 3)

    // Ensure button text has good contrast
    const contentMainButtonText = getTextColor(contentMainButton)
    const contentSecondaryButtonText = getTextColor(contentSecondaryButton)
    const lightMainButtonText = getTextColor(lightMainButton)
    const lightSecondaryButtonText = getTextColor(lightSecondaryButton)
    const darkMainButtonText = getTextColor(darkMainButton)
    const darkSecondaryButtonText = getTextColor(darkSecondaryButton)

    // Create themes
    const contentTheme: ColorTheme = {
      background: contentBackground,
      main: contentMain,
      secondary: contentSecondary,
      links: contentSecondary,
      main_button_background: contentMainButton,
      main_button_text: contentMainButtonText,
      secondary_button_background: contentSecondaryButton,
      secondary_button_text: contentSecondaryButtonText,
    }

    const lightTheme: ColorTheme = {
      background: lightBackground,
      main: lightMain,
      secondary: lightSecondary,
      links: lightSecondary,
      main_button_background: lightMainButton,
      main_button_text: lightMainButtonText,
      secondary_button_background: lightSecondaryButton,
      secondary_button_text: lightSecondaryButtonText,
    }

    const darkTheme: ColorTheme = {
      background: darkBackground,
      main: darkMain,
      secondary: darkSecondary,
      links: darkMain,
      main_button_background: darkMainButton,
      main_button_text: darkMainButtonText,
      secondary_button_background: darkSecondaryButton,
      secondary_button_text: darkSecondaryButtonText,
    }

    return {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }
  },

  // New generator: Complementary - uses color theory to create complementary color schemes
  complementary: (primaryColor: string, secondaryColor: string, bundleName: string): ColorBundle => {
    // Generate complementary colors
    const primaryComplement = getComplementaryColor(primaryColor)
    const secondaryComplement = getComplementaryColor(secondaryColor)

    // Content theme with white background and complementary accents
    const contentTheme: ColorTheme = {
      background: "#FFFFFF",
      main: primaryColor,
      secondary: secondaryColor,
      links: getSplitComplementaryColor(primaryColor),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: primaryComplement,
      secondary_button_text: getTextColor(primaryComplement),
    }

    // Light theme with subtle background and complementary colors
    const lightTheme: ColorTheme = {
      background: lightenColor(mixColors(primaryColor, "#FFFFFF", 0.9), 0.1),
      main: primaryColor,
      secondary: secondaryColor,
      links: getAnalogousColor(primaryColor, 0.1),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: getAnalogousColor(primaryColor, -0.1),
      secondary_button_text: getTextColor(getAnalogousColor(primaryColor, -0.1)),
    }

    // Dark theme with rich background and vibrant complementary colors
    const darkTheme: ColorTheme = {
      background: "#1A1A2E",
      main: lightenColor(primaryColor, 0.1),
      secondary: lightenColor(secondaryColor, 0.1),
      links: lightenColor(primaryComplement, 0.2),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: primaryComplement,
      secondary_button_text: getTextColor(primaryComplement),
    }

    return {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }
  },

  // New generator: Monochromatic - creates variations based on a single color
  monochromatic: (primaryColor: string, secondaryColor: string, bundleName: string): ColorBundle => {
    // For monochromatic, we primarily use the primary color and create variations
    const primaryHsl = rgbToHsl(hexToRgb(primaryColor).r, hexToRgb(primaryColor).g, hexToRgb(primaryColor).b)

    // Create variations by adjusting saturation and lightness
    const primaryLight = hslToRgb(primaryHsl.h, Math.max(0.1, primaryHsl.s - 0.2), Math.min(0.9, primaryHsl.l + 0.3))
    const primaryLighter = hslToRgb(
      primaryHsl.h,
      Math.max(0.05, primaryHsl.s - 0.3),
      Math.min(0.95, primaryHsl.l + 0.4),
    )
    const primaryDark = hslToRgb(primaryHsl.h, Math.min(1, primaryHsl.s + 0.1), Math.max(0.2, primaryHsl.l - 0.2))
    const primaryDarker = hslToRgb(primaryHsl.h, Math.min(1, primaryHsl.s + 0.15), Math.max(0.1, primaryHsl.l - 0.3))

    // Convert back to hex
    const lightVariant = rgbToHex(primaryLight.r, primaryLight.g, primaryLight.b)
    const lighterVariant = rgbToHex(primaryLighter.r, primaryLighter.g, primaryLighter.b)
    const darkVariant = rgbToHex(primaryDark.r, primaryDark.g, primaryDark.b)
    const darkerVariant = rgbToHex(primaryDarker.r, primaryDarker.g, primaryDarker.b)

    // Content theme with white background and monochromatic accents
    const contentTheme: ColorTheme = {
      background: "#FFFFFF",
      main: primaryColor,
      secondary: darkVariant,
      links: primaryColor,
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: lightVariant,
      secondary_button_text: getTextColor(lightVariant),
    }

    // Light theme with very light primary background
    const lightTheme: ColorTheme = {
      background: lighterVariant,
      main: primaryColor,
      secondary: darkVariant,
      links: primaryColor,
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: lightVariant,
      secondary_button_text: darkerVariant,
    }

    // Dark theme with dark primary background
    const darkTheme: ColorTheme = {
      background: darkerVariant,
      main: lightVariant,
      secondary: lighterVariant,
      links: lightVariant,
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: darkVariant,
      secondary_button_text: lighterVariant,
    }

    return {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }
  },

  // New generator: Triadic - uses triadic color harmony
  triadic: (primaryColor: string, secondaryColor: string, bundleName: string): ColorBundle => {
    // Generate triadic colors
    const triadicColor1 = getTriadicColor(primaryColor)
    const triadicColor2 = getTriadicColor(primaryColor, 0.667) // 240 degrees

    // Content theme with white background and triadic accents
    const contentTheme: ColorTheme = {
      background: "#FFFFFF",
      main: primaryColor,
      secondary: secondaryColor,
      links: triadicColor1,
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: triadicColor2,
      secondary_button_text: getTextColor(triadicColor2),
    }

    // Light theme with subtle background and triadic colors
    const lightTheme: ColorTheme = {
      background: lightenColor(mixColors(primaryColor, "#FFFFFF", 0.95), 0.05),
      main: primaryColor,
      secondary: secondaryColor,
      links: triadicColor1,
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: lightenColor(triadicColor2, 0.2),
      secondary_button_text: getTextColor(lightenColor(triadicColor2, 0.2)),
    }

    // Dark theme with rich background and vibrant triadic colors
    const darkTheme: ColorTheme = {
      background: "#121212",
      main: lightenColor(primaryColor, 0.1),
      secondary: lightenColor(secondaryColor, 0.1),
      links: lightenColor(triadicColor1, 0.2),
      main_button_background: primaryColor,
      main_button_text: getTextColor(primaryColor),
      secondary_button_background: triadicColor2,
      secondary_button_text: getTextColor(triadicColor2),
    }

    return {
      name: bundleName,
      "bundle-content": contentTheme,
      "bundle-light": lightTheme,
      "bundle-dark": darkTheme,
    }
  },
}

export function ColorPickerBundleGenerator() {
  const [generatorType, setGeneratorType] = useState("simple")
  const [bundleName, setBundleName] = useState("My Color Bundle")
  const [primaryColor, setPrimaryColor] = useState("#A3581B")
  const [secondaryColor, setSecondaryColor] = useState("#4F5D27")
  const [colorBundle, setColorBundle] = useState<ColorBundle | null>(null)
  const [copied, setCopied] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")

  useEffect(() => {
    generateColorBundle()
  }, [primaryColor, secondaryColor, bundleName, generatorType])

  const generateColorBundle = () => {
    const generator = ColorBundleGenerators[(generatorType as keyof typeof ColorBundleGenerators) || "simple"]
    const bundle = generator(primaryColor, secondaryColor, bundleName)
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="capitalize">
                {generatorType}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setGeneratorType("simple")}>Simple</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setGeneratorType("adaptive")}>Adaptive</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setGeneratorType("complementary")}>Complementary</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setGeneratorType("monochromatic")}>Monochromatic</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setGeneratorType("triadic")}>Triadic</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" onClick={generateRandomColors}>
            <Sparkles className="mr-2 h-4 w-4" />
            Random
          </Button>
          <Button variant="outline" onClick={copyToClipboard}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <ColorBundleCard name="Content Theme" theme={colorBundle["bundle-content"]} />
            <ColorBundleCard name="Light Theme" theme={colorBundle["bundle-light"]} />
            <ColorBundleCard name="Dark Theme" theme={colorBundle["bundle-dark"]} />
          </div>

          {/* Color Palette Display */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Color Palette</h3>

            {/* Content Theme Colors */}
            <div className="space-y-3">
              <Label>Content Theme Colors</Label>
              <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                {Object.entries(colorBundle["bundle-content"]).map(([key, value]) => (
                  <ColorEntry key={`content-${key}`} name={key} value={value} />
                ))}
              </div>
            </div>

            {/* Light Theme Colors */}
            <div className="space-y-3">
              <Label>Light Theme Colors</Label>
              <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                {Object.entries(colorBundle["bundle-light"]).map(([key, value]) => (
                  <ColorEntry key={`light-${key}`} name={key} value={value} />
                ))}
              </div>
            </div>

            {/* Dark Theme Colors */}
            <div className="space-y-3">
              <Label>Dark Theme Colors</Label>
              <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                {Object.entries(colorBundle["bundle-dark"]).map(([key, value]) => (
                  <ColorEntry key={`dark-${key}`} name={key} value={value} />
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

function ColorBundleCard({ name, theme }: { name: string; theme: ColorTheme }) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <div className="rounded-xl border p-5" style={{ backgroundColor: theme.background }}>
          <h3 className="mb-2 text-xl font-bold" style={{ color: theme.main }}>
            {name}
          </h3>
          <p className="mb-4" style={{ color: theme.secondary }}>
            This is a preview of your {name} theme with{" "}
            <a href="#" className="underline" style={{ color: theme.links }}>
              sample links
            </a>{" "}
            and text.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-md px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: theme.main_button_background,
                color: theme.main_button_text,
              }}
            >
              Primary
            </button>
            <button
              className="rounded-md px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: theme.secondary_button_background, color: theme.secondary_button_text }}
            >
              Secondary
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ColorEntry({ name, value }: { name: string; value: string }) {
  return (
    <div
      className="flex h-12 items-center justify-between gap-2 rounded-md border p-2 text-sm font-medium tracking-tighter capitalize"
      style={{ backgroundColor: value, color: getTextColor(value) }}
    >
      <span className="max-w-32 leading-none">{name.split("_").join(" ")}</span>
      <span className="text-2xs rounded bg-black px-1 py-0.5 text-white uppercase">{value}</span>
    </div>
  )
}
