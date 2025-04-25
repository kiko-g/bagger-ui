"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, CheckIcon, CopyIcon, RefreshCw, Wand2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

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

function getTextColor(bgColor: string): string {
  const r = Number.parseInt(bgColor.slice(1, 3), 16)
  const g = Number.parseInt(bgColor.slice(3, 5), 16)
  const b = Number.parseInt(bgColor.slice(5, 7), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "#000000" : "#FFFFFF"
}

export function AiColorBundleGenerator() {
  const { toast } = useToast()
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedBundles, setGeneratedBundles] = useState<ColorBundle[]>([])
  const [selectedBundle, setSelectedBundle] = useState<ColorBundle | null>(null)
  const [copied, setCopied] = useState(false)
  const placeholderPrompt = "A vibrant tropical theme with sunset colors, perfect for a travel website"

  const generateColorBundles = async () => {
    setIsGenerating(true)

    try {
      const response = await fetch("/api/colors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt.trim() !== "" ? prompt : placeholderPrompt }),
      })

      if (!response.ok) {
        throw new Error(`Failed to generate color bundles: ${response.statusText}`)
      }

      const data = await response.json()

      // Check if the response is an array (direct bundles) or has a bundles property
      const bundles = Array.isArray(data) ? data : data

      if (!bundles || !Array.isArray(bundles)) {
        throw new Error("Invalid response format from API")
      }

      setGeneratedBundles(bundles)

      if (bundles.length > 0) {
        setSelectedBundle(bundles[0])
      }

      toast({
        title: "Color bundles generated!",
        description: `Created ${bundles.length} color bundles based on your prompt`,
      })
    } catch (error) {
      console.error("Error generating color bundles:", error)
      toast({
        title: "Generation failed",
        description: "There was an error generating color bundles. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    if (!selectedBundle) return

    navigator.clipboard.writeText(JSON.stringify(selectedBundle, null, 2))
    setCopied(true)

    toast({
      title: "Copied to clipboard",
      description: "The color bundle JSON has been copied to your clipboard",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const selectBundle = (bundle: ColorBundle) => {
    setSelectedBundle(bundle)
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">AI Color Bundle Generator</h2>
          <p className="text-muted-foreground text-sm">Generate color bundles using AI based on your description</p>
        </div>
      </div>

      {/* Input Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prompt">Describe your desired color scheme</Label>
              <Textarea
                id="prompt"
                placeholder={`E.g. ${placeholderPrompt}`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-24"
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={generateColorBundles} disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Color Bundles
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {generatedBundles.length > 0 && (
        <div className="space-y-6">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="json">JSON</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-6">
              {/* Bundle Selection */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {generatedBundles.map((bundle, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedBundle?.name === bundle.name ? "ring-primary ring-2" : "",
                    )}
                    onClick={() => selectBundle(bundle)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">{bundle.name}</h3>
                        <div className="grid grid-cols-3 gap-1">
                          <div className="h-6 rounded-sm" style={{ backgroundColor: bundle["bundle-content"].main }} />
                          <div
                            className="h-6 rounded-sm"
                            style={{ backgroundColor: bundle["bundle-content"].secondary }}
                          />
                          <div
                            className="h-6 rounded-sm"
                            style={{ backgroundColor: bundle["bundle-content"].main_button_background }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Selected Bundle Preview */}
              {selectedBundle && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">{selectedBundle.name}</h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <ColorBundleCard name="Content Theme" theme={selectedBundle["bundle-content"]} />
                    <ColorBundleCard name="Light Theme" theme={selectedBundle["bundle-light"]} />
                    <ColorBundleCard name="Dark Theme" theme={selectedBundle["bundle-dark"]} />
                  </div>

                  {/* Color Palette Display */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Color Palette</h3>

                    {/* Content Theme Colors */}
                    <div className="space-y-3">
                      <Label>Content Theme Colors</Label>
                      <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                        {Object.entries(selectedBundle["bundle-content"]).map(([key, value]) => (
                          <ColorEntry key={`content-${key}`} name={key} value={value} />
                        ))}
                      </div>
                    </div>

                    {/* Light Theme Colors */}
                    <div className="space-y-3">
                      <Label>Light Theme Colors</Label>
                      <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                        {Object.entries(selectedBundle["bundle-light"]).map(([key, value]) => (
                          <ColorEntry key={`light-${key}`} name={key} value={value} />
                        ))}
                      </div>
                    </div>

                    {/* Dark Theme Colors */}
                    <div className="space-y-3">
                      <Label>Dark Theme Colors</Label>
                      <div className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                        {Object.entries(selectedBundle["bundle-dark"]).map(([key, value]) => (
                          <ColorEntry key={`dark-${key}`} name={key} value={value} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={generateColorBundles}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Generate New Options
                    </Button>
                    <Button onClick={copyToClipboard}>
                      {copied ? <CheckIcon className="mr-2 h-4 w-4" /> : <CopyIcon className="mr-2 h-4 w-4" />}
                      {copied ? "Copied!" : "Copy JSON"}
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="json">
              {selectedBundle && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{selectedBundle.name} JSON</h3>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                      <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
                    </Button>
                  </div>
                  <pre className="scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent text-2xs overflow-auto rounded-md p-2 font-mono leading-4 text-emerald-400 dark:text-emerald-300">
                    {JSON.stringify(selectedBundle, null, 2)}
                  </pre>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
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
