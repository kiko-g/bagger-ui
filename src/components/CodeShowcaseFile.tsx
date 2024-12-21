'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect, useCallback } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { baggerDark } from '@/lib/syntax'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import { CheckIcon, ClipboardIcon, LoaderCircleIcon } from 'lucide-react'

interface CodeShowcaseFileProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string
}

export function CodeShowcaseFile({ path, ...divProps }: CodeShowcaseFileProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [code, setCode] = useState<string | null>('')

  useEffect(() => {
    fetch(`/api/code/ui?filepath=${encodeURIComponent(path)}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        setIsLoading(false)
        setCode(null)
        console.error('Failed to fetch component code.', error)
      })
      .finally(() => setIsLoading(false))
  }, [path])

  if (code === null) return null

  return isLoading ? (
    <div className="flex w-full items-center justify-center gap-3">
      <Skeleton className="h-[200px] flex-1 rounded-xl" />
      <div className="flex flex-[8] flex-col gap-3">
        <Skeleton className="h-[100px] w-full rounded-xl" />
        <Skeleton className="h-[88px] w-full rounded-xl" />
      </div>
    </div>
  ) : (
    <div className={cn('relative', isExpanded ? 'expanded' : 'not-expanded')} {...divProps}>
      <SyntaxHighlighter
        language="tsx"
        style={baggerDark}
        customStyle={{
          margin: '0',
          minHeight: '60px',
          overflow: isExpanded ? 'auto' : 'hidden',
          lineHeight: '1.25',
          fontSize: '12px',
          letterSpacing: '-0.025em',
          borderRadius: '0.75rem',
          position: 'relative',
        }}
      >
        {code}
      </SyntaxHighlighter>

      {!isExpanded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[120px] rounded-b-xl"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 1) 100%)',
          }}
        />
      )}

      <div className="absolute right-4 top-4 z-10 flex items-center justify-end gap-2">
        <CopyCodeButton text={code} />
      </div>

      <div className="absolute bottom-4 z-10 flex w-full items-center justify-center gap-2">
        <Button variant="default-inverted" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
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
      className={cn(
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
        <LoaderCircleIcon className="size-3.5 animate-spin" />
      )}
    </button>
  )
}
