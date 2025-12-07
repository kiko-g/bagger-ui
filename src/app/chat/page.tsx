"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"

export default function Chat() {
  const { messages, sendMessage, status } = useChat()
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <div className="stretch mx-auto flex w-full max-w-md flex-col py-24">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            if (part.type === "text") {
              return <div key={`${message.id}-${i}`}>{part.text}</div>
            }
            if (part.type.startsWith("tool-")) {
              return <pre key={`${message.id}-${i}`}>{JSON.stringify(part, null, 2)}</pre>
            }
            return null
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-zinc-300 p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.target.value)}
          disabled={status === "streaming"}
        />
      </form>
    </div>
  )
}
