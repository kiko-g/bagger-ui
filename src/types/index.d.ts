export interface ComponentSample {
  nodes: {
    item: string
    component: React.ReactNode
  }[]
}

export interface NavigationLevel {
  name: string
  items?: NavigationItem[]
}

export interface NavigationItem {
  name: string
  href: string
}

export type QuickNavigation = (NavigationItem | NavigationLevel)[]
export interface ComponentCardType {
  name: string
  path: string | null
  component: React.ReactNode
}

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

export type ColorVariant =
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export type RoundedVariant = 'sm' | 'md' | 'lg' | 'full' | 'none'
export type SizeVariant = 'sm' | 'md' | 'lg'
