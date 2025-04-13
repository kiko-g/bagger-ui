"use client"

import React, { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ComponentCardType } from "@/types"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { GithubIcon } from "./icons/GithubIcon"
import { CheckIcon, ClipboardIcon, LinkIcon, LoaderCircleIcon, MoonIcon, SunIcon } from "lucide-react"

export function ComponentShowcase({ index, name, path, component }: ComponentCardType & { index: number }) {
  const sectionId = name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const [code, setCode] = useState<string>("")
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  useEffect(() => {
    if (path) {
      fetch(`/api/code?filepath=${encodeURIComponent(path)}`)
        .then((response) => response.text())
        .then((data) => setCode(data))
        .catch((error) => {
          console.error("Failed to fetch component code.")
        })
    }
  }, [path])

  return (
    <li className="flex flex-col" id={sectionId}>
      <h4
        className={cn(
          "mb-2 flex flex-wrap items-center text-base font-semibold tracking-tight xl:text-xl 2xl:text-2xl",
          index === 0 ? "pt-3" : "pt-16",
        )}
      >
        <a href={`#${sectionId}`} className="group flex w-full items-center gap-1">
          <span className="group-hover:underline">{name}</span>
          <LinkIcon className="size-4 opacity-0 transition-opacity group-hover:opacity-60" />
        </a>
      </h4>

      <section className="relative mb-8 overflow-hidden">
        <div className="mb-3">
          <ChangeViewModeTabs
            isCodeVisible={isCodeVisible}
            toggleShowCode={() => setIsCodeVisible(true)}
            toggleShowPreview={() => setIsCodeVisible(false)}
          />
        </div>

        <div className="absolute right-3 top-16 z-10 flex items-center justify-end gap-2">
          {path && isCodeVisible && <LinkToGithubButton path={path} />}
          <CopyCodeButton text={code} />
        </div>

        {isCodeVisible ? (
          <SyntaxHighlighter
            language="tsx"
            style={coldarkDark}
            customStyle={{
              margin: "0",
              minHeight: "60px",
              lineHeight: "1.25",
              fontSize: "12px",
              letterSpacing: "-0.025em",
              borderRadius: "0.75rem",
            }}
          >
            {code}
          </SyntaxHighlighter>
        ) : (
          <div className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-8 py-32 dark:border-zinc-800 dark:bg-zinc-900">
            {component}
          </div>
        )}
      </section>
    </li>
  )
}

function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(() => console.error("Failed to copy code to clipboard."))
  }, [text])

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied || !text}
      className={cn(
        "flex items-center justify-start gap-1 rounded border px-2 py-2 text-xs shadow-sm transition disabled:pointer-events-none",
        isCopied
          ? "border-teal-600 bg-teal-600 text-white"
          : "border-zinc-700 bg-zinc-700/90 text-white hover:bg-zinc-700",
      )}
    >
      {text ? (
        isCopied ? (
          <CheckIcon className="size-3.5 stroke-2" />
        ) : (
          <ClipboardIcon className="size-3.5 stroke-2" />
        )
      ) : (
        <LoaderCircleIcon className="size-3.5 animate-spin" />
      )}
    </button>
  )
}

function ChangeViewModeTabs({
  isCodeVisible,
  toggleShowCode,
  toggleShowPreview,
}: {
  isCodeVisible: boolean
  toggleShowCode: () => void
  toggleShowPreview: () => void
}) {
  return (
    <div className="flex items-center justify-start gap-2 transition">
      <button
        onClick={toggleShowPreview}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-center text-sm transition-all lg:px-3 lg:py-1.5",
          isCodeVisible
            ? "border-transparent"
            : "border-zinc-900 bg-zinc-150 font-semibold dark:border-zinc-100 dark:bg-white/5",
        )}
      >
        Preview
      </button>
      <button
        onClick={toggleShowCode}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-center text-sm transition-all hover:bg-zinc-100 dark:hover:bg-white/5 lg:px-3 lg:py-1.5",
          isCodeVisible
            ? "border-zinc-900 bg-zinc-150 font-semibold dark:border-zinc-100 dark:bg-white/5"
            : "border-transparent",
        )}
      >
        Code
      </button>
    </div>
  )
}

function LinkToGithubButton({ path }: { path: string }) {
  const githubBlobWebUrl = "https://github.com/kiko-g/bagger-ui/blob/main"
  const href = `${githubBlobWebUrl}/src/components/showcase/${path}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-start gap-2 rounded bg-white px-3 py-1.5 text-2xs text-zinc-900 shadow-sm transition hover:opacity-80 disabled:cursor-not-allowed"
    >
      <span>Open on Github</span>
      <GithubIcon className="size-3.5" />
    </Link>
  )
}
