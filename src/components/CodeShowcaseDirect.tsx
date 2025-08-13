"use client"

import React, { useState, useCallback, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { CheckIcon, ClipboardIcon, DownloadIcon } from "lucide-react"

type Props = {
  code: string
  language: string
  options?: any
  allowDownload?: boolean
}

export function CodeShowcaseDirect({ code, language, options, allowDownload }: Props) {
  const canCopy = useMemo(() => code !== "", [code])
  const canDownload = useMemo(() => allowDownload && code !== "", [allowDownload, code])

  return (
    <div className="group relative mb-4 max-w-7xl overflow-auto rounded-xl">
      {/* Controls */}
      <div className="absolute top-3 right-3 z-20 flex items-center justify-end gap-2">
        {canDownload ? <DownloadButton text={code} filename={`code.${language}`} /> : null}
        {canCopy ? <CopyCodeButton text={code} /> : null}
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          borderRadius: options?.borderRadius || "0.75rem",
          maxHeight: options?.maxHeight || "200px",
          margin: options?.margin || "0",
          ...options,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 4000)
      })
      .catch(() => console.error("Failed to copy code to clipboard."))
  }, [text])

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={cn(
        "flex items-center justify-start gap-1.5 rounded bg-zinc-700 px-2 py-1.5 text-xs text-white shadow-xs transition disabled:cursor-not-allowed dark:bg-zinc-900",
        isCopied ? "" : "hover:bg-zinc-600 dark:hover:bg-zinc-700",
      )}
    >
      {isCopied ? <CheckIcon className="size-4" /> : <ClipboardIcon className="size-4" />}
    </button>
  )
}

function DownloadButton({ text, filename }: { text: string; filename: string }) {
  const [isDownloading, setIsDownloading] = useState(false)

  const download = () => {
    setIsDownloading(true)
    try {
      const blob = new Blob([text], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Failed to download code.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <button
      onClick={download}
      disabled={isDownloading}
      className={cn(
        "flex items-center justify-start gap-1.5 rounded bg-zinc-700 px-2 py-1.5 text-xs text-white shadow-xs transition disabled:cursor-not-allowed dark:bg-zinc-900",
        isDownloading ? "" : "hover:bg-zinc-600 dark:hover:bg-zinc-700",
      )}
    >
      {isDownloading ? <CheckIcon className="size-4" /> : <DownloadIcon className="size-4" />}
    </button>
  )
}
