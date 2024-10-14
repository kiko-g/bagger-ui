export type ColorRgb = {
  r: number
  g: number
  b: number
}

export type ColorHex = `#${string}`

export type ColorHsl = {
  h: number
  s: number
  l: number
}

export type TailwindCombo = {
  id: number
  color: ColorHex
}

export type TailwindPalette = {
  name: string
  combos: TailwindCombo[]
  config: string
}
