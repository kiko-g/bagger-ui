'use client'

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { Lexend } from 'next/font/google'

import { Layout } from '@/components/Layout'
import { possible } from '@/utils/jumpseller'
import { CodeShowcaseDirect } from '@/components/CodeShowcaseDirect'
import { SparklesIcon } from '@heroicons/react/24/outline'

const lexend = Lexend({ subsets: ['latin'] })

export default function Generator() {
  const [form, setForm] = useState<Record<string, string[]>>({})

  return (
    <Layout location="Onboarding" sidebar>
      <h2 className={clsx(lexend.className, 'mb-4 text-2xl font-semibold tracking-tighter lg:text-4xl')}>
        Identity Form
      </h2>

      <p className="mb-2 max-w-3xl text-sm">
        Fill out your identity form to get started with{' '}
        <span className="inline-flex items-center gap-0.5 font-semibold text-lime-600">
          AI suggestions
          <SparklesIcon className="h-3 w-3" />
        </span>{' '}
        in your platform.
      </p>

      <article className="my-8 grid grid-cols-1 gap-8 pb-8 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-8 lg:col-span-2">
          {Object.entries(possible).map(([key, values]) => (
            <div key={`possible-${key}`} className="flex flex-col gap-2">
              <h4 className={clsx(lexend.className, 'text-xl font-semibold')}>{key}</h4>
              <ul className="flex max-w-7xl flex-wrap gap-2">
                {values.map((value, valueIdx) => (
                  <RadioBubble
                    key={`value-${key}-${valueIdx}`}
                    label={value}
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
            <h4 className={clsx(lexend.className, 'mb-2 text-lg font-semibold tracking-tighter')}>
              Store Identity JSON
            </h4>
            <CodeShowcaseDirect
              allowDownload
              language="json"
              code={JSON.stringify(form, null, 2)}
              options={{
                height: '100%',
                maxHeight: '100%',
                fontSize: '12px',
                lineHeight: '1.25',
              }}
            />
          </div>
        )}
      </article>
    </Layout>
  )
}

function RadioBubble({ label, callback }: { label: string; callback: (label: string, checked: boolean) => void }) {
  const [checked, setChecked] = useState(false)

  function handleClick() {
    const newChecked = !checked
    setChecked(newChecked)
    callback(label, newChecked)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        checked
          ? 'border-lime-500 bg-lime-500/10 dark:border-transparent dark:bg-lime-500/20'
          : 'border-zinc-900/20 bg-white hover:border-lime-500/50 hover:bg-lime-500/5 dark:bg-white/5 dark:hover:border-white/0 dark:hover:bg-white/10',
        'group flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm transition-all duration-200',
      )}
    >
      <span
        className={clsx(
          checked
            ? 'bg-lime-500 group-hover:bg-lime-500/80'
            : 'bg-zinc-300 group-hover:bg-lime-500/80 dark:bg-zinc-200/20 dark:group-hover:bg-white',
          'h-2 w-2 rounded-full transition-all duration-200',
        )}
      />
      <span>{label}</span>
    </button>
  )
}
