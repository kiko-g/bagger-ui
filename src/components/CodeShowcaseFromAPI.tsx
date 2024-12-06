'use client'

import React, { useEffect, useState, useCallback, useMemo } from 'react'
import clsx from 'clsx'
import { ArrowDownTrayIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  route: string
  language: string
  options?: any
  allowDownload?: boolean
}

export function CodeShowcaseFromAPI({ route, language, options, allowDownload }: Props) {
  const [code, setCode] = useState<string>('')
  const canCopy = useMemo(() => code !== '', [code])
  const canDownload = useMemo(() => allowDownload && code !== '', [allowDownload, code])

  useEffect(() => {
    fetch(route)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error('Failed to fetch component code.')
      })
  }, [route])

  if (!code)
    return (
      <div className="flex w-full items-center justify-center rounded-xl bg-[#1E2937] px-8 py-16 shadow dark:bg-black/10">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="-ml-1 mr-3 h-12 w-12 animate-spin text-primary-600 dark:text-primary-500"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )

  return (
    <div className="group relative max-w-7xl overflow-auto rounded-xl border border-zinc-200 dark:border-white/10">
      {/* Controls */}
      <div className="absolute right-4 top-4 flex items-center justify-end gap-2">
        {canDownload ? <DownloadButton text={code} filename={`code.${language}`} /> : null}
        {canCopy ? <CopyCodeButton text={code} /> : null}
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          borderRadius: '0.75rem',
          minHeight: '500px',
          maxHeight: '1000px',
          margin: '0',
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
      .catch(() => console.error('Failed to copy code to clipboard.'))
  }, [text])

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={clsx(
        'flex items-center justify-start gap-1.5 rounded bg-zinc-700 px-2.5 py-1 text-xs text-white shadow-sm transition disabled:cursor-not-allowed dark:bg-zinc-900',
        isCopied ? '' : 'hover:bg-zinc-600 dark:hover:bg-zinc-700',
      )}
    >
      <span className="hidden xl:flex">{isCopied ? 'Copied' : 'Copy'}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}

function DownloadButton({ text, filename }: { text: string; filename: string }) {
  const [isDownloading, setIsDownloading] = useState(false)

  const download = () => {
    setIsDownloading(true)
    try {
      const blob = new Blob([text], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to download code.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <button
      onClick={download}
      disabled={isDownloading}
      className={clsx(
        'flex items-center justify-start gap-1.5 rounded bg-zinc-700 px-2 py-1.5 text-xs text-white shadow-sm transition disabled:cursor-not-allowed dark:bg-zinc-900',
        isDownloading ? '' : 'hover:bg-zinc-600 dark:hover:bg-zinc-700',
      )}
    >
      <span className="hidden xl:flex">Download</span>
      {isDownloading ? <CheckIcon className="h-4 w-4" /> : <ArrowDownTrayIcon className="h-4 w-4" />}
    </button>
  )
}
