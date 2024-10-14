'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Lexend, Inter } from 'next/font/google'

import { Layout } from '@/components/Layout'
import { possible } from '@/utils/jumpseller'
import { CodeShowcaseDirect } from '@/components/CodeShowcaseDirect'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })
const lexend = Lexend({ subsets: ['latin'] })

export default function JumpsellerStoreIdentity() {
  const [form, setForm] = useState<Record<string, string[]>>({})
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const storedForm = localStorage.getItem('form')
    if (storedForm) setForm(JSON.parse(storedForm))
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) localStorage.setItem('form', JSON.stringify(form))
  }, [form, isInitialized])

  return (
    <Layout location="Onboarding" sidebar>
      <h2 className={clsx(lexend.className, 'mb-4 text-2xl font-semibold tracking-tighter lg:text-4xl')}>
        Jumpseller Store Identity
      </h2>

      <p className="mb-2 max-w-3xl text-base">
        Fill out your store identity form to get started with{' '}
        <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-pink-600 via-primary-600 to-sky-600 bg-clip-text font-semibold text-transparent">
          AI suggestions
        </span>{' '}
        in your platform.
      </p>

      {isInitialized ? (
        <article className="mb-16 mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-8 lg:col-span-2">
            {Object.entries(possible).map(([key, values]) => (
              <div key={`possible-${key}`} className="flex flex-col gap-2">
                <h4 className={clsx(inter.className, 'text-xl font-semibold')}>{key}</h4>
                <ul className="flex max-w-7xl flex-wrap gap-2">
                  {values.map((value, valueIdx) => (
                    <RadioBubble
                      key={`value-${key}-${valueIdx}`}
                      label={value}
                      checked={form[key] ? form[key].includes(value) : false}
                      callback={(label, checked) =>
                        setForm((prev) => {
                          if (checked) return { ...prev, [key]: [...(prev[key] || []), label] }
                          else {
                            const updatedList = (prev[key] || []).filter((l) => l !== label)
                            if (updatedList.length === 0) {
                              const { [key]: _, ...rest } = prev
                              return rest
                            }
                            return { ...prev, [key]: updatedList }
                          }
                        })
                      }
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {Object.keys(form).length > 0 && (
            <div className="col-span-1 h-full lg:col-span-1">
              <div className="flex items-center justify-end gap-2">
                <Button variant="link" size="sm" onClick={() => setForm({})} className="px-2">
                  Reset
                </Button>
              </div>
              <CodeShowcaseDirect
                allowDownload
                language="json"
                code={JSON.stringify(form, null, 2)}
                options={{
                  height: '100%',
                  maxHeight: '100%',
                  fontSize: '14px',
                  lineHeight: '1.25',
                }}
              />
            </div>
          )}
        </article>
      ) : (
        <Skeleton />
      )}
    </Layout>
  )
}

function RadioBubble({
  label,
  checked,
  callback,
}: {
  label: string
  checked: boolean
  callback: (label: string, checked: boolean) => void
}) {
  function handleClick() {
    callback(label, !checked)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        checked
          ? 'border-primary-500 bg-primary-500/10 dark:border-transparent dark:bg-primary-500/20'
          : 'border-zinc-900/20 bg-white hover:border-primary-500/50 hover:bg-primary-500/5 dark:bg-white/5 dark:hover:border-white/0 dark:hover:bg-white/10',
        'group flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm transition-all duration-200',
      )}
    >
      <span
        className={clsx(
          checked
            ? 'bg-primary-500 group-hover:bg-primary-500/80'
            : 'bg-zinc-300 group-hover:bg-primary-500/80 dark:bg-zinc-200/20 dark:group-hover:bg-white',
          'h-2 w-2 rounded-full transition-all duration-200',
        )}
      />
      <span>{label}</span>
    </button>
  )
}

function Skeleton() {
  return (
    <div className="mt-4 flex h-64 w-full max-w-lg items-center justify-center rounded bg-primary-500/5 dark:bg-primary-500/10">
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
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0

        3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  )
}
