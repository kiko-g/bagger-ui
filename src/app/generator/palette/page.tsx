'use client'

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { Lexend } from 'next/font/google'
import { Layout } from '@/components/Layout'
import {
  type ColorHex,
  interpolateTailwindPalette,
  isValidHex,
  TailwindCombo,
  writeTailwindPalette,
} from '@/utils/colors'
import { CodeShowcaseDirect } from '@/components/CodeShowcaseDirect'
import { ColorPicker } from '@/components/common/ColorPicker'

const lexend = Lexend({ subsets: ['latin'] })

type TailwindPalette = {
  name: string
  combos: TailwindCombo[]
  config: string
}

export default function Generator() {
  const [firstColor, setFirstColor] = useState<string | ''>('')
  const [secondColor, setSecondColor] = useState<string | ''>('')
  const [tailwindPalette, setTailwindPalette] = useState<TailwindPalette>({
    name: '',
    combos: [],
    config: '',
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState({
    active: false,
    color: '',
  })

  function generateTailwindPalette() {
    if (!firstColor || !secondColor) return
    if (!isValidHex(firstColor as ColorHex) || !isValidHex(secondColor as ColorHex)) return

    setLoading(true)

    const tailwindCombos = interpolateTailwindPalette(firstColor as ColorHex, secondColor as ColorHex)
    const tailwindConfig = writeTailwindPalette(tailwindPalette.name || 'custom', tailwindCombos)
    setTailwindPalette({
      ...tailwindPalette,
      combos: tailwindCombos,
      config: tailwindConfig,
    })

    setLoading(false)
  }

  useEffect(() => {
    const trial = {
      firstColor: '#f0f9ff' as ColorHex,
      secondColor: '#082f49' as ColorHex,
      name: 'Custom' as string,
    }

    setFirstColor(trial.firstColor as string)
    setSecondColor(trial.secondColor as string)

    const tailwindCombos = interpolateTailwindPalette(trial.firstColor, trial.secondColor)
    const tailwindConfig = writeTailwindPalette(trial.name, tailwindCombos)
    setTailwindPalette({
      name: trial.name,
      combos: tailwindCombos,
      config: tailwindConfig,
    })

    setLoading(false)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = useCallback((color: ColorHex) => {
    navigator.clipboard.writeText(color)
    setCopied({ active: true, color })

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCopied({ active: false, color: '' })
      timeoutRef.current = null
    }, 2000)
  }, [])

  const isLoading = useMemo(() => {
    return loading || firstColor === '' || secondColor === '' || tailwindPalette.combos.length === 0
  }, [loading, firstColor, secondColor, tailwindPalette.combos])

  return (
    <Layout location="Generator" sidebar>
      <ul className="flex w-full flex-col gap-4 pt-8">
        <li id="tailwindcss-palette">
          <h3
            className={clsx(
              lexend.className,
              'flex flex-wrap items-center text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl',
            )}
          >
            TailwindCSS Palette Generator
          </h3>

          <p className="mb-2 max-w-3xl text-sm">
            Generate a custom TailwindCSS color palette based on two colors. Enter the two colors you want to
            interpolate and the name of your color palette. Copy the output and paste it into your{' '}
            <code className="font-bold text-primary dark:text-primary">tailwind.config.js</code> 😎
          </p>

          {isLoading ? (
            <PaletteSkeleton />
          ) : (
            <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Color Pickers */}
              <div className="col-span-1 flex flex-col gap-4 lg:col-span-2">
                {/* Color Name */}
                <input
                  type="text"
                  id="tailwindColorName"
                  name="tailwindColorName"
                  placeholder="Type the name of your color palette"
                  value={tailwindPalette.name}
                  onChange={(e) =>
                    setTailwindPalette({
                      ...tailwindPalette,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
                />

                {/* First Color Picker */}
                <div className="flex w-full items-center gap-3">
                  <ColorPicker onChange={(c) => setFirstColor(c as string)} value={firstColor as string} />
                  <input
                    type="text"
                    id="firstColor"
                    name="firstColor"
                    value={firstColor}
                    onChange={(e) => setFirstColor(e.target.value as ColorHex)}
                    placeholder="First Color"
                    className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
                  />
                </div>

                {/* Second Color Picker */}
                <div className="flex w-full items-center gap-3">
                  <ColorPicker onChange={(c) => setSecondColor(c as string)} value={secondColor as string} />
                  <input
                    type="text"
                    id="secondColor"
                    name="secondColor"
                    value={secondColor}
                    onChange={(e) => setSecondColor(e.target.value as ColorHex)}
                    placeholder="Second Color"
                    className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
                  />
                </div>

                <div className="flex w-full items-center justify-end">
                  <button
                    type="button"
                    onClick={generateTailwindPalette}
                    className="rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow transition hover:opacity-80 dark:bg-primary"
                  >
                    Generate Palette
                  </button>
                </div>

                {/* Color Palette Demonstration */}
                {tailwindPalette.combos.length > 0 && (
                  <div className="border-dimmed border-t pt-4">
                    <span className="mb-2 block font-semibold capitalize">{tailwindPalette.name}</span>
                    <ul className="-ml-1 flex flex-wrap items-center gap-2">
                      {tailwindPalette.combos.map((combo) => {
                        const active = copied.active && copied.color === combo.color
                        return (
                          <li key={combo.id}>
                            <button
                              onClick={() => handleCopy(combo.color)}
                              className="group relative flex flex-col items-start justify-center rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
                            >
                              <span className="absolute -right-1 -top-1 flex w-full items-center justify-end opacity-0 group-hover:opacity-100">
                                <span
                                  className={clsx(
                                    'rounded-full border border-transparent p-[2px] text-center text-2xs font-medium text-white shadow-xl transition-all',
                                    active
                                      ? 'bg-emerald-800/90 dark:bg-emerald-600/80'
                                      : 'bg-gray-800/90 dark:bg-black/80',
                                  )}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-3"
                                  >
                                    {active ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    ) : (
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                                      />
                                    )}
                                  </svg>
                                </span>
                              </span>

                              <span
                                className="mb-2 flex h-10 w-14 rounded shadow"
                                style={{ backgroundColor: combo.color }}
                              ></span>
                              <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{combo.id}</span>
                              <span className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                {combo.color}
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tailwind Config Colors */}
              {tailwindPalette.config && (
                <div className="col-span-1 lg:col-span-1">
                  <CodeShowcaseDirect
                    language="js"
                    code={tailwindPalette.config.trim()}
                    options={{
                      maxHeight: '100%',
                      fontSize: '14px',
                    }}
                  ></CodeShowcaseDirect>
                </div>
              )}
            </section>
          )}
        </li>
      </ul>
    </Layout>
  )
}

function PaletteSkeleton() {
  return (
    <div className="mt-4 grid h-full grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="col-span-1 flex flex-col items-end gap-4 lg:col-span-2">
        <div className="h-12 w-full animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>
        <div className="h-12 w-full animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>
        <div className="h-12 w-full animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>
        <div className="mt-1 h-10 w-32 animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>

        <div className="grid w-full grid-cols-10 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-10 w-full animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>
          ))}
        </div>
      </div>

      <div className="col-span-1 h-full lg:col-span-1">
        <div className="h-96 w-full animate-pulse rounded bg-gray-300 dark:bg-black/40"></div>
      </div>
    </div>
  )
}