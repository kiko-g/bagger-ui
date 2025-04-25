"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ColorPicker } from "@/components/ui/color-picker"
import { AlertCircle, Check, ChevronDown, Copy, Import } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

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
  {
    name: "Candyland",
    "bundle-content": {
      background: "#FFFFFF",
      main: "#5a1826",
      secondary: "#030807",
      links: "#37a086",
      main_button_background: "#cc3f5d",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#2a7a66",
      secondary_button_text: "#FFFFFF",
    },
    "bundle-light": {
      background: "#eee9ea",
      main: "#5a1826",
      secondary: "#030807",
      links: "#37a086",
      main_button_background: "#cc3f5d",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#6fceb6",
      secondary_button_text: "#102e27",
    },
    "bundle-dark": {
      background: "#5a1826",
      main: "#ffffff",
      secondary: "#bbe8dd",
      links: "#ecb8c3",
      main_button_background: "#e15d7a",
      main_button_text: "#FFFFFF",
      secondary_button_background: "#FFFFFF",
      secondary_button_text: "#2a7a66",
    },
  },
]

function isValidColorTheme(obj: any): obj is ColorTheme {
  if (!obj || typeof obj !== "object") return false

  const requiredKeys: (keyof ColorTheme)[] = [
    "background",
    "main",
    "secondary",
    "links",
    "main_button_background",
    "main_button_text",
    "secondary_button_background",
    "secondary_button_text",
  ]

  return requiredKeys.every(
    (key) => key in obj && typeof obj[key] === "string" && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(obj[key]),
  )
}

function isValidColorBundle(obj: any): obj is ColorBundle {
  if (!obj || typeof obj !== "object") return false

  if (!("name" in obj) || typeof obj.name !== "string") return false

  const requiredThemes: ThemeType[] = ["bundle-content", "bundle-light", "bundle-dark"]
  return requiredThemes.every((theme) => theme in obj && isValidColorTheme(obj[theme]))
}

function tryConvertToValidJson(input: string): string {
  try {
    JSON.parse(input) // check if already valid
    return input
  } catch (e) {
    let processed = input
      .replace(/,\s*([}\]])/g, "$1") // remove trailing commas
      .replace(/([{,]\s*)([a-zA-Z0-9_$]+)(\s*:)/g, '$1"$2"$3') // quote unquoted property names, avoid requoting
      .replace(/'([^'\\]*(\\.[^'\\]*)*)'(?=:|\s*[,}\]])/g, '"$1"') // convert single quotes to double
      .replace(/\/\/.*?(\r?\n|$)/g, "$1") // remove comments (both // and /* */)
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .trim()

    // input appears to be an object within an array or another object extract just the object part
    if (!processed.startsWith("{")) {
      const objectStart = processed.indexOf("{")
      const objectEnd = processed.lastIndexOf("}") + 1
      if (objectStart >= 0 && objectEnd > objectStart) processed = processed.substring(objectStart, objectEnd)
    }

    try {
      JSON.parse(processed)
      return processed
    } catch (e) {
      throw new Error("Could not convert to valid JSON. Please check the format.")
    }
  }
}

export function ColorPickerBundles() {
  const [bundle, setBundle] = useState<ColorBundle>(defaultBundle)
  const [copied, setCopied] = useState(false)
  const [jsonOutput, setJsonOutput] = useState("")
  const [importDialogOpen, setImportDialogOpen] = useState(false)
  const [importJson, setImportJson] = useState("")
  const [importError, setImportError] = useState<string | null>(null)
  const [importFormat, setImportFormat] = useState<"json" | "js">("json")
  const { toast } = useToast()

  useEffect(() => {
    setJsonOutput(JSON.stringify(bundle, null, 2))
  }, [bundle])

  useEffect(() => {
    if (importDialogOpen) {
      setImportJson(JSON.stringify(bundle, null, 2))
      setImportError(null)
      setImportFormat("json")
    }
  }, [importDialogOpen, bundle])

  const handleColorChange = (theme: ThemeType, property: keyof ColorTheme, value: string) => {
    setBundle((prev) => ({
      ...prev,
      [theme]: {
        ...prev[theme],
        [property]: value,
      },
    }))
  }

  const handleNameChange = (name: string) => {
    setBundle((prev) => ({
      ...prev,
      name,
    }))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)

    toast({
      title: "Copied to clipboard",
      description: "The color bundle JSON has been copied to your clipboard.",
    })
  }

  const importBundle = () => {
    setImportError(null)

    try {
      let processedJson: string
      let parsedBundle: any

      if (importFormat === "json") {
        processedJson = importJson
        parsedBundle = JSON.parse(processedJson)
      } else {
        try {
          processedJson = tryConvertToValidJson(importJson)
          parsedBundle = JSON.parse(processedJson)
        } catch (e) {
          setImportError(`${e instanceof Error ? e.message : "Unknown error"}`)
          return
        }
      }

      if (!isValidColorBundle(parsedBundle)) {
        setImportError("Invalid color bundle format. Please check the structure and try again.")
        return
      }

      setBundle(parsedBundle)
      setImportDialogOpen(false)

      toast({
        title: "Import successful",
        description: `Color bundle "${parsedBundle.name}" has been imported.`,
      })
    } catch (e) {
      setImportError(`Invalid format: ${e instanceof Error ? e.message : "Unknown error"}`)
    }
  }

  const loadBundle = (presetBundle: ColorBundle) => {
    setBundle(JSON.parse(JSON.stringify(presetBundle)))

    toast({
      title: "Preset loaded",
      description: `Color bundle "${presetBundle.name}" has been loaded.`,
    })
  }

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
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? "Copied!" : "Copy JSON"}
            </Button>
          </div>

          <div className="inline-flex rounded-md shadow-xs" role="group">
            <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
              <DialogTrigger asChild>
                <Button className="mr-[-1px] rounded-r-none" variant="outline">
                  <Import className="mr-2 h-4 w-4" />
                  Import
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Import Color Bundle</DialogTitle>
                  <DialogDescription>
                    Paste your color bundle below. You can use either JSON format or JavaScript/TypeScript object
                    notation.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-start justify-center space-y-2">
                    <div className="inline-flex rounded-md shadow-xs" role="group">
                      <Button
                        variant={importFormat === "json" ? "default" : "outline"}
                        className="rounded-r-none"
                        onClick={() => setImportFormat("json")}
                      >
                        JSON
                      </Button>
                      <Button
                        variant={importFormat === "js" ? "default" : "outline"}
                        className="rounded-l-none"
                        onClick={() => setImportFormat("js")}
                      >
                        JS/TS Object
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="color-bundle-json">
                      {importFormat === "json" ? "JSON" : "JavaScript/TypeScript Object"}
                    </Label>
                    <Textarea
                      id="color-bundle-json"
                      value={importJson}
                      onChange={(e) => setImportJson(e.target.value)}
                      placeholder={
                        importFormat === "json" ? "Paste your color bundle JSON here" : "Paste your JS/TS object here"
                      }
                      rows={12}
                      className="font-mono text-xs leading-4 md:text-xs md:leading-4"
                    />
                  </div>

                  {importError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{importError}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setImportDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={importBundle}>
                    Import Bundle
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-l-none border-l px-2 shadow-none">
                  <ChevronDown className="h-4 w-4" />
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
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
