"use client"

import React, { useEffect, useState, useCallback } from "react"
import clsx from "clsx"
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Inter_Tight } from "next/font/google"

const inter = Inter_Tight({ subsets: ["latin"] })

type Props = {
  route: string // api route
  language: string
}

export function CodeShowcaseFromAPI({ route, language }: Props) {
  const [code, setCode] = useState<string>("")

  useEffect(() => {
    fetch(route)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error("Failed to fetch component code.")
      })
  }, [route])

  return code === "" ? (
    <div className="flex w-full items-center justify-center rounded-xl bg-[#1E2937] px-8 py-16 shadow dark:bg-black/10">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="-ml-1 mr-3 h-12 w-12 animate-spin text-primary dark:text-primary"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  ) : (
    <div className={clsx(inter.className, "group relative max-w-7xl overflow-auto rounded-xl")}>
      {/* Controls */}
      <div className="absolute right-4 top-4 flex items-center justify-end gap-2 font-sans">
        {code === "" ? null : <CopyCodeButton text={code} />}
      </div>

      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={coldarkDark}
        customStyle={{
          backgroundColor: "#0e131f",
          borderRadius: "0",
          minHeight: "500px",
          maxHeight: "1000px",
          margin: "0",
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
      className={clsx(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-white/20 text-white hover:bg-blue-600/80 hover:text-white dark:bg-white/10 dark:hover:bg-blue-500/60"
      )}
    >
      <span className="hidden xl:flex">{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}
