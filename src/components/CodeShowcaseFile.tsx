'use client'

import clsx from 'clsx'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { SpinnerIcon } from './icons/SpinnerIcon'

interface CodeShowcaseFileProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string
}

export function CodeShowcaseFile({ path, ...divProps }: CodeShowcaseFileProps) {
  const [code, setCode] = useState('')

  useEffect(() => {
    fetch(`/api/code/ui?filepath=${encodeURIComponent(path)}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error('Failed to fetch component code.', error)
      })
  }, [path])

  if (!code) return null

  return (
    <div className="relative" {...divProps}>
      <SyntaxHighlighter
        language="tsx"
        style={coldarkDark}
        customStyle={{
          margin: '0',
          minHeight: '60px',
          maxHeight: '300px',
          lineHeight: '1.25',
          fontSize: '12px',
          borderRadius: '0.75rem',
        }}
      >
        {code}
      </SyntaxHighlighter>

      <div className="absolute right-4 top-4 z-10 flex items-center justify-end gap-2">
        <CopyCodeButton text={code} />
      </div>
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
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(() => console.error('Failed to copy code to clipboard.'))
  }, [text])

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied || !text}
      className={clsx(
        'flex items-center justify-start gap-1 rounded border px-2 py-2 text-xs shadow-sm transition disabled:pointer-events-none',
        isCopied
          ? 'border-teal-600 bg-teal-600 text-white'
          : 'border-zinc-700 bg-zinc-700/90 text-white hover:bg-zinc-700',
      )}
    >
      {text ? (
        isCopied ? (
          <CheckIcon className="size-3.5 stroke-2" />
        ) : (
          <ClipboardIcon className="size-3.5 stroke-2" />
        )
      ) : (
        <SpinnerIcon className="size-3.5 animate-spin" />
      )}
    </button>
  )
}
