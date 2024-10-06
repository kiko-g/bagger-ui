'use client'

import React, { useState, useCallback } from 'react'
import clsx from 'clsx'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Inter_Tight } from 'next/font/google'
import { fontMono } from '@/lib/fonts'

const inter = Inter_Tight({ subsets: ['latin'] })

type Props = {
  code: string
  language: string
  options?: any
}

export function CodeShowcaseDirect({ code, language, options }: Props) {
  return (
    <div className={clsx(fontMono.variable, 'group relative mb-4 max-w-7xl overflow-auto rounded-xl')}>
      {/* Controls */}
      <div className="absolute right-3 top-3 z-20 flex items-center justify-end gap-2">
        {code === '' ? null : <CopyCodeButton text={code} />}
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          borderRadius: options?.borderRadius || '0',
          maxHeight: options?.maxHeight || '200px',
          margin: options?.margin || '0',
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
        'flex items-center justify-start gap-1.5 rounded bg-[#0e131f] px-2 py-1.5 text-xs text-white shadow-sm transition disabled:cursor-not-allowed',
        isCopied ? '' : 'hover:bg-zinc-700',
      )}
    >
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}
