import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai("gpt-4o"),
      messages,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response("An error occurred while processing your request", {
      status: 500,
    })
  }
}
