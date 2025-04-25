"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Copy, Wand2 } from "lucide-react"
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
  colors: string[]
}

export function AiColorBundleGenerator() {
  const { toast } = useToast()
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedBundles, setGeneratedBundles] = useState<ColorBundle[]>([])
  const [selectedBundle, setSelectedBundle] = useState<ColorBundle | null>(null)
  const [copied, setCopied] = useState(false)

  const placeholder = "A vibrant tropical theme with sunset colors, perfect for a travel website"

  const generateColorBundles = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Describe the color scheme you're looking for",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/colors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate colors")
      }

      const bundles = await response.json()

      const transformedBundles: ColorBundle[] = bundles.map((bundle: any) => ({
        name: bundle.name,
        colors: [
          bundle["bundle-content"].main,
          bundle["bundle-light"].main,
          bundle["bundle-dark"].main,
          bundle["bundle-content"].secondary,
        ],
      }))

      setGeneratedBundles(transformedBundles)

      if (transformedBundles.length > 0) {
        setSelectedBundle(transformedBundles[0])
      }

      toast({
        title: "Color bundles generated!",
        description: `Created ${transformedBundles.length} color bundles based on your prompt`,
      })
    } catch (error) {
      toast({
        title: "Error generating colors",
        description: "Failed to generate color bundles. Please try again.",
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
              <Label htmlFor="prompt">Describe the color scheme you're looking for</Label>
              <Input
                id="prompt"
                placeholder={`E.g., ${placeholder}`}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={generateColorBundles} disabled={isGenerating || !prompt.trim()}>
                {isGenerating ? (
                  <>Generating...</>
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
          <h3 className="text-xl font-semibold">Generated Color Bundles</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {generatedBundles.map((bundle, index) => (
              <Card
                key={index}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  selectedBundle?.name === bundle.name ? "ring-primary ring-2" : "",
                )}
                onClick={() => setSelectedBundle(bundle)}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{bundle.name}</h3>
                    <div className="flex gap-1">
                      {bundle.colors.map((color, colorIndex) => (
                        <div key={colorIndex} className="h-6 w-6 rounded-sm" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedBundle && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Selected Bundle: {selectedBundle.name}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedBundle.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex h-12 w-24 items-center justify-center rounded-md border text-sm font-medium"
                    style={{ backgroundColor: color, color: getTextColor(color) }}
                  >
                    {color}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={copyToClipboard} disabled={!selectedBundle}>
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy JSON"}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function getTextColor(bgColor: string): string {
  const r = Number.parseInt(bgColor.slice(1, 3), 16)
  const g = Number.parseInt(bgColor.slice(3, 5), 16)
  const b = Number.parseInt(bgColor.slice(5, 7), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "#000000" : "#FFFFFF"
}
