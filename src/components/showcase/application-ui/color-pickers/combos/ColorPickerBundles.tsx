"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ColorPicker } from "@/components/ui/color-picker"

import { cn } from "@/lib/utils"
import { CheckIcon, CopyIcon, ChevronDownIcon, ImportIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

type ThemeType = "bundle-content" | "bundle-light" | "bundle-dark"

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

const defaultBundle: ColorBundle = {
  name: "Artisanal Earth",
  "bundle-content": {
    background: "#F5F5F0",
    main: "#A3581B",
    secondary: "#4F5D27",
    links: "#4F5D27",
    main_button_background: "#A3581B",
    main_button_text: "#FFFFFF",
    secondary_button_background: "#4F5D27",
    secondary_button_text: "#FFFFFF",
  },
  "bundle-light": {
    background: "#FFFFFF",
    main: "#A3581B",
    secondary: "#4F5D27",
    links: "#4F5D27",
    main_button_background: "#A3581B",
    main_button_text: "#FFFFFF",
    secondary_button_background: "#F0ECE6",
    secondary_button_text: "#A3581B",
  },
  "bundle-dark": {
    background: "#111827",
    main: "#D6C3B5",
    secondary: "#92A68A",
    links: "#D6C3B5",
    main_button_background: "#E1904D",
    main_button_text: "#000000",
    secondary_button_background: "#374151",
    secondary_button_text: "#D6C3B5",
  },
}

// Predefined color bundles
const predefinedBundles: ColorBundle[] = [
  defaultBundle,
  {
    name: "Ocean Breeze",
    "bundle-content": {
      background: "#F0F7F9",
      main: "#1A6B8F",
      secondary: "#4DA1C7",
      links: "#1A6B8F",
      main_button_background: "#1A6B8F",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#4DA1C7",
      secondary_button_text: "#FFFFFF",
    },
    "bundle-light": {
      background: "#FFFFFF",
      main: "#1A6B8F",
      secondary: "#4DA1C7",
      links: "#1A6B8F",
      main_button_background: "#1A6B8F",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#E6F3F7",
      secondary_button_text: "#1A6B8F",
    },
    "bundle-dark": {
      background: "#0F172A",
      main: "#7DD3FC",
      secondary: "#38BDF8",
      links: "#7DD3FC",
      main_button_background: "#0EA5E9",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#1E293B",
      secondary_button_text: "#7DD3FC",
    },
  },
  {
    name: "Berry Delight",
    "bundle-content": {
      background: "#FDF2F8",
      main: "#BE185D",
      secondary: "#DB2777",
      links: "#BE185D",
      main_button_background: "#BE185D",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#DB2777",
      secondary_button_text: "#FFFFFF",
    },
    "bundle-light": {
      background: "#FFFFFF",
      main: "#BE185D",
      secondary: "#DB2777",
      links: "#BE185D",
      main_button_background: "#BE185D",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#FCE7F3",
      secondary_button_text: "#BE185D",
    },
    "bundle-dark": {
      background: "#18181B",
      main: "#F472B6",
      secondary: "#EC4899",
      links: "#F472B6",
      main_button_background: "#DB2777",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#3F3F46",
      secondary_button_text: "#F472B6",
    },
  },
]

export function ColorPickerBundles() {
  const [bundle, setBundle] = useState<ColorBundle>(defaultBundle)
  const [copied, setCopied] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")

  // Update JSON output whenever bundle changes
  useEffect(() => {
    setJsonOutput(JSON.stringify(bundle, null, 2))
  }, [bundle])

  // Handle color change
  const handleColorChange = (theme: ThemeType, property: keyof ColorTheme, value: string) => {
    setBundle((prev) => ({
      ...prev,
      [theme]: {
        ...prev[theme],
        [property]: value,
      },
    }))
  }

  // Handle bundle name change
  const handleNameChange = (name: string) => {
    setBundle((prev) => ({
      ...prev,
      name,
    }))
  }

  // Copy JSON to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Load a predefined bundle
  const loadBundle = (presetBundle: ColorBundle) => {
    setBundle(JSON.parse(JSON.stringify(presetBundle))) // Deep clone to avoid reference issues
  }

  // Color properties to display in order
  const colorProperties: Array<{ key: keyof ColorTheme; label: string }> = [
    { key: "background", label: "Background" },
    { key: "main", label: "Main Color" },
    { key: "secondary", label: "Secondary Color" },
    { key: "links", label: "Links Color" },
    { key: "main_button_background", label: "Main Button Background" },
    { key: "main_button_text", label: "Main Button Text" },
    { key: "secondary_button_background", label: "Secondary Button Background" },
    { key: "secondary_button_text", label: "Secondary Button Text" },
  ]

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Color Bundle Editor</h2>
          <p className="text-muted-foreground text-sm">
            Configure color themes and export as JSON for your application.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Button variant="outline" onClick={copyToClipboard}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied!" : "Copy JSON"}
            </Button>
          </div>

          <div className="inline-flex rounded-md shadow-xs" role="group">
            <Button className="mr-[-1px] rounded-r-none" variant="outline">
              <ImportIcon />
              Import
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-l-none border-l px-2 shadow-none">
                  <ChevronDownIcon className="h-4 w-4" />
                  <span className="sr-only">More save options</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {predefinedBundles.map((preset, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="hover:bg-accent hover:text-accent-foreground w-full px-3 py-2 text-left text-sm"
                    onClick={() => loadBundle(preset)}
                  >
                    {preset.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="bundle-name">Bundle Name</Label>
        <Input
          id="bundle-name"
          value={bundle.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="bg-background mt-1"
        />
      </div>

      {/* Color Pickers - 3 columns */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Content Theme */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Content Theme</h3>
          {colorProperties.map((prop) => (
            <div key={`content-${prop.key}`}>
              <ColorPicker
                label={prop.label}
                value={bundle["bundle-content"][prop.key]}
                onChange={(value) => handleColorChange("bundle-content", prop.key, value)}
              />
            </div>
          ))}
        </div>

        {/* Light Theme */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Light Theme</h3>
          {colorProperties.map((prop) => (
            <div key={`light-${prop.key}`}>
              <ColorPicker
                label={prop.label}
                value={bundle["bundle-light"][prop.key]}
                onChange={(value) => handleColorChange("bundle-light", prop.key, value)}
              />
            </div>
          ))}
        </div>

        {/* Dark Theme */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Dark Theme</h3>
          {colorProperties.map((prop) => (
            <div key={`dark-${prop.key}`}>
              <ColorPicker
                label={prop.label}
                value={bundle["bundle-dark"][prop.key]}
                onChange={(value) => handleColorChange("bundle-dark", prop.key, value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Theme Previews - 3 columns */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <ColorBundleCard name="Content Theme" theme={bundle["bundle-content"]} />
        <ColorBundleCard name="Light Theme" theme={bundle["bundle-light"]} />
        <ColorBundleCard name="Dark Theme" theme={bundle["bundle-dark"]} />
      </div>

      {/* JSON Output */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>JSON Output</Label>
          <Button variant="ghost" size="sm" onClick={copyToClipboard}>
            {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
            <span className="sr-only">Copy to clipboard</span>
          </Button>
        </div>
        <pre className="scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent text-2xs overflow-auto rounded-md p-2 font-mono leading-4 text-emerald-400 dark:text-emerald-300">
          {jsonOutput}
        </pre>
      </div>
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
          <p className="mb-4 text-sm" style={{ color: theme.secondary }}>
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
