import type { ColorHex, ColorHsl, ColorRgb, TailwindCombo } from '@/types'

export function isValidHex(hex: ColorHex): boolean {
  return /^#[0-9A-F]{6}$/i.test(hex)
}

export function writeTailwindPalette(colorName: string, combos: TailwindCombo[]): string {
  let tailwindPalette = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        ${colorName.toLowerCase()}: {\n`
  combos.forEach((combo) => {
    tailwindPalette += `          ${combo.id}: '${combo.color}',\n`
  })
  tailwindPalette += `        },\n      },\n    },\n  },\n}`

  return tailwindPalette
}

// Improved functions below
export function hexToRgb(hex: ColorHex): ColorRgb {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

export function rgbToHex(rgb: ColorRgb): ColorHex {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`
}

export function rgbToHsl(rgb: ColorRgb): ColorHsl {
  let r = rgb.r / 255
  let g = rgb.g / 255
  let b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0
  let s = 0
  let l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60
        break
      case g:
        h = ((b - r) / d + 2) * 60
        break
      case b:
        h = ((r - g) / d + 4) * 60
        break
    }
  }

  return { h, s, l }
}

export function hslToRgb(hsl: ColorHsl): ColorRgb {
  let h = hsl.h
  let s = hsl.s
  let l = hsl.l

  let r, g, b

  const c = (1 - Math.abs(2 * l - 1)) * s
  const hPrime = h / 60
  const x = c * (1 - Math.abs((hPrime % 2) - 1))
  const m = l - c / 2

  if (hPrime >= 0 && hPrime < 1) {
    r = c
    g = x
    b = 0
  } else if (hPrime >= 1 && hPrime < 2) {
    r = x
    g = c
    b = 0
  } else if (hPrime >= 2 && hPrime < 3) {
    r = 0
    g = c
    b = x
  } else if (hPrime >= 3 && hPrime < 4) {
    r = 0
    g = x
    b = c
  } else if (hPrime >= 4 && hPrime < 5) {
    r = x
    g = 0
    b = c
  } else if (hPrime >= 5 && hPrime < 6) {
    r = c
    g = 0
    b = x
  } else {
    r = 0
    g = 0
    b = 0
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return { r, g, b }
}

export function interpolateTailwindPalette(color1: ColorHex, color2: ColorHex): TailwindCombo[] {
  const steps = [
    { id: 50, lightness: 95 },
    { id: 100, lightness: 85 },
    { id: 200, lightness: 75 },
    { id: 300, lightness: 60 },
    { id: 400, lightness: 50 },
    { id: 500, lightness: 40 },
    { id: 600, lightness: 35 },
    { id: 700, lightness: 30 },
    { id: 800, lightness: 20 },
    { id: 900, lightness: 12 },
    { id: 950, lightness: 7 },
  ]

  const startHSL = rgbToHsl(hexToRgb(color1))
  const endHSL = rgbToHsl(hexToRgb(color2))
  const interpolatedColors: TailwindCombo[] = []

  steps.forEach((stepObj, index) => {
    const stepFactor = index / (steps.length - 1)

    let h: number
    const hueDiff = endHSL.h - startHSL.h

    if (Math.abs(hueDiff) > 180) {
      if (endHSL.h > startHSL.h) {
        h = startHSL.h + (hueDiff - 360) * stepFactor
      } else {
        h = startHSL.h + (hueDiff + 360) * stepFactor
      }
    } else {
      h = startHSL.h + hueDiff * stepFactor
    }

    h = (h + 360) % 360 // Ensure hue is between 0 and 360

    // Interpolate saturation
    const s = startHSL.s + (endHSL.s - startHSL.s) * stepFactor

    // Use predefined lightness values for Tailwind shades
    const l = stepObj.lightness / 100

    const interpolatedHSL = { h, s, l }
    const interpolatedRGB = hslToRgb(interpolatedHSL)
    interpolatedColors.push({ id: stepObj.id, color: rgbToHex(interpolatedRGB) })
  })

  return interpolatedColors
}
