import { NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const systemPrompt = `
Generate 3 color bundle options based on this description: "${prompt}"

Each color bundle should have a creative name and three themes (content, light, and dark).
Each theme needs these exact color properties (all valid hex codes):
- background
- main
- secondary
- links
- main_button_background
- main_button_text
- secondary_button_background
- secondary_button_text

Return ONLY valid JSON with this exact structure (no explanation text):
[
  {
    "name": "Bundle Name 1",
    "bundle-content": {
      "background": "#HEXCODE",
      "main": "#HEXCODE",
      "secondary": "#HEXCODE",
      "links": "#HEXCODE",
      "main_button_background": "#HEXCODE",
      "main_button_text": "#HEXCODE",
      "secondary_button_background": "#HEXCODE",
      "secondary_button_text": "#HEXCODE"
    },
    "bundle-light": {
      "background": "#HEXCODE",
      "main": "#HEXCODE",
      "secondary": "#HEXCODE",
      "links": "#HEXCODE",
      "main_button_background": "#HEXCODE",
      "main_button_text": "#HEXCODE",
      "secondary_button_background": "#HEXCODE",
      "secondary_button_text": "#HEXCODE"
    },
    "bundle-dark": {
      "background": "#HEXCODE",
      "main": "#HEXCODE",
      "secondary": "#HEXCODE",
      "links": "#HEXCODE",
      "main_button_background": "#HEXCODE",
      "main_button_text": "#HEXCODE",
      "secondary_button_background": "#HEXCODE",
      "secondary_button_text": "#HEXCODE"
    }
  },
  {
    "name": "Bundle Name 2",
    ...
  },
  {
    "name": "Bundle Name 3",
    ...
  }
]
`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: systemPrompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    try {
      const cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
      const parsedBundles = JSON.parse(cleanedText)
      return NextResponse.json(parsedBundles)
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError)
      return NextResponse.json({ error: "Invalid response format from AI", raw: text }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in color generation:", error)
    return NextResponse.json({ error: "Failed to generate colors" }, { status: 500 })
  }
}
