export type ColorRgb = { r: number; g: number; b: number }
export type ColorHex = `#${string}`
export type TailwindCombo = { id: number; color: ColorHex }

export function hexToRgb(hex: ColorHex): ColorRgb {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

export function rgbToHex(rgb: ColorRgb): ColorHex {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`
}

export function isValidHex(hex: ColorHex): boolean {
  return /^#[0-9A-F]{6}$/i.test(hex)
}

export function interpolateRGB(color1: ColorHex, color2: ColorHex, steps: number): string[] {
  const startRGB = hexToRgb(color1)
  const endRGB = hexToRgb(color2)
  const stepFactor = 1 / (steps - 1)
  let interpolatedColors: string[] = []

  for (let step = 0; step < steps; step++) {
    let interpolatedRGB: ColorRgb = {
      r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * step * stepFactor),
      g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * step * stepFactor),
      b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * step * stepFactor),
    }
    interpolatedColors.push(rgbToHex(interpolatedRGB))
  }

  return interpolatedColors
}

export function interpolateTailwindPalette(color1: ColorHex, color2: ColorHex) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  const startRGB = hexToRgb(color1)
  const endRGB = hexToRgb(color2)
  const interpolatedColors: TailwindCombo[] = []

  steps.forEach((step, index) => {
    const stepFactor = index / (steps.length - 1)
    const interpolatedRGB = {
      r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * stepFactor),
      g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * stepFactor),
      b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * stepFactor),
    }
    interpolatedColors.push({ id: step, color: rgbToHex(interpolatedRGB) })
  })

  return interpolatedColors
}

export function writeTailwindPalette(colorName: string, combos: TailwindCombo[]): string {
  let tailwindPalette = `/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        ${colorName.toLowerCase()}: {\n`
  combos.forEach((combo) => {
    tailwindPalette += `          ${combo.id}: '${combo.color}',\n`
  })
  tailwindPalette += `        },\n      },\n    },\n  },\n}`

  return tailwindPalette
}
