"use client"

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

import type { ColorHex, TailwindCombo, TailwindPalette } from "@/types"
import { suggestedPalettes } from "@/utils/data"
import { interpolateTailwindPalette, isValidHex, writeTailwindPalette } from "@/utils/colors"

import { Layout } from "@/components/Layout"
import { Dropzone } from "@/components/ui/dropzone"
import { ColorPicker } from "@/components/ui/color-picker"
import { CodeShowcaseDirect } from "@/components/CodeShowcaseDirect"

export default function Generator() {
  const [firstColor, setFirstColor] = useState<string | "">("")
  const [secondColor, setSecondColor] = useState<string | "">("")
  const [tailwindPalette, setTailwindPalette] = useState<TailwindPalette>({
    name: "",
    combos: [],
    config: "",
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState({
    active: false,
    value: "",
  })

  function generateTailwindPalette() {
    if (!firstColor || !secondColor) return
    if (!isValidHex(firstColor as ColorHex) || !isValidHex(secondColor as ColorHex)) return

    setLoading(true)

    const tailwindCombos = interpolateTailwindPalette(firstColor as ColorHex, secondColor as ColorHex)
    const tailwindConfig = writeTailwindPalette(tailwindPalette.name || "custom", tailwindCombos)
    setTailwindPalette({
      ...tailwindPalette,
      combos: tailwindCombos,
      config: tailwindConfig,
    })

    setLoading(false)
  }

  useEffect(() => {
    const trial = {
      firstColor: "#f4eaeb" as ColorHex,
      secondColor: "#892844" as ColorHex,
      name: "Wine" as string,
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

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setCopied({ active: true, value: text })

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCopied({ active: false, value: "" })
      timeoutRef.current = null
    }, 2000)
  }, [])

  const isLoading = useMemo(() => {
    return loading || firstColor === "" || secondColor === "" || tailwindPalette.combos.length === 0
  }, [loading, firstColor, secondColor, tailwindPalette.combos])

  return (
    <Layout location="Palette" sidebar>
      <h2 className="flex flex-wrap items-center pt-4 text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl">
        TailwindCSS Palette Generator
      </h2>

      <p className="mb-2 max-w-3xl text-sm">
        Generate a custom TailwindCSS color palette based on two colors. Enter the two colors you want to interpolate
        and the name of your color palette. Copy the output and paste it into your{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-500">tailwind.config.js</span> 😎
      </p>

      {isLoading ? (
        <PaletteSkeleton />
      ) : (
        <section id="tailwindcss-palette" className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-4 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Inputs */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  id="tailwindColorName"
                  name="tailwindColorName"
                  placeholder="Type the name of your color palette"
                  value={tailwindPalette.name}
                  onChange={(e) => setTailwindPalette((x) => ({ ...x, name: e.target.value }))}
                  className="h-10 w-full border border-zinc-900/10 bg-white px-2 py-1.5 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-teal-600/80 hover:bg-teal-600/5 focus:border-teal-600 focus:accent-teal-600 focus:ring-0 focus:ring-teal-600 focus:ring-offset-0 lg:px-3 lg:py-2 lg:text-sm dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-teal-600/80 dark:hover:bg-teal-600/5 dark:focus:border-teal-600/80 dark:focus:ring-0 dark:focus:ring-teal-600"
                />

                <div className="flex w-full items-center gap-3">
                  <ColorPicker
                    value={firstColor as string}
                    onChange={(c) => setFirstColor(c as string)}
                    className="block h-10 w-24 cursor-pointer rounded-none border border-zinc-900/10 transition"
                  />
                  <input
                    type="text"
                    id="firstColor"
                    name="firstColor"
                    value={firstColor}
                    onChange={(e) => setFirstColor(e.target.value as ColorHex)}
                    placeholder="First Color"
                    className="h-10 w-full border border-zinc-900/10 bg-white px-2 py-1.5 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-teal-600/80 hover:bg-teal-600/5 focus:border-teal-600 focus:accent-teal-600 focus:ring-0 focus:ring-teal-600 focus:ring-offset-0 lg:px-3 lg:py-2 lg:text-sm dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-teal-600/80 dark:hover:bg-teal-600/5 dark:focus:border-teal-600/80 dark:focus:ring-0 dark:focus:ring-teal-600"
                  />
                </div>

                <div className="flex w-full items-center gap-3">
                  <ColorPicker
                    value={secondColor as string}
                    onChange={(c) => setSecondColor(c as string)}
                    className="block h-10 w-24 cursor-pointer rounded-none border border-zinc-900/10 transition"
                  />
                  <input
                    type="text"
                    id="secondColor"
                    name="secondColor"
                    value={secondColor}
                    onChange={(e) => setSecondColor(e.target.value as ColorHex)}
                    placeholder="Second Color"
                    className="h-10 w-full border border-zinc-900/10 bg-white px-2 py-1.5 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-teal-600/80 hover:bg-teal-600/5 focus:border-teal-600 focus:accent-teal-600 focus:ring-0 focus:ring-teal-600 focus:ring-offset-0 lg:px-3 lg:py-2 lg:text-sm dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-teal-600/80 dark:hover:bg-teal-600/5 dark:focus:border-teal-600/80 dark:focus:ring-0 dark:focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Dropzone */}
              <Dropzone
                onDrop={() => {
                  console.info("dropped")
                }}
              />
            </div>

            {/* Submit */}
            <div className="flex w-full items-center justify-end">
              <button
                type="button"
                onClick={generateTailwindPalette}
                className="bg-primary text-primary-foreground dark:bg-primary/80 rounded-sm px-4 py-2 text-sm font-normal shadow-sm transition hover:opacity-80"
              >
                Generate Palette
              </button>
            </div>

            {/* Color Palette Demonstration */}
            {tailwindPalette.combos.length > 0 && (
              <div className="border-t border-zinc-900/10 pt-3 dark:border-white/10">
                <span className="mb-1.5 block font-semibold capitalize">{tailwindPalette.name}</span>
                <ul className="-ml-1 flex flex-wrap items-center gap-1.5">
                  {tailwindPalette.combos.map((combo) => {
                    const active = copied.active && copied.value === combo.color
                    return (
                      <li key={combo.id}>
                        <button
                          onClick={() => handleCopy(combo.color)}
                          className="group relative flex flex-col items-start justify-center rounded-sm p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
                        >
                          <span className="absolute -top-1 -right-1 flex w-full items-center justify-end opacity-0 group-hover:opacity-100">
                            <span
                              className={cn(
                                "text-2xs rounded-full border border-transparent bg-zinc-800/90 p-[2px] text-center font-medium text-white shadow-xl transition-all dark:bg-rose-400/80",
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
                            className="mb-2 flex h-10 w-14 rounded-sm shadow-sm"
                            style={{ backgroundColor: combo.color }}
                          ></span>
                          <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{combo.id}</span>
                          <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400">{combo.color}</span>
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
                  maxHeight: "100%",
                  fontSize: "14px",
                }}
              ></CodeShowcaseDirect>
            </div>
          )}
        </section>
      )}

      <section id="tailwindcss-palette-suggestions" className="mt-4 mb-24 w-full pt-4">
        <h2 className="mb-3 flex flex-wrap items-center border-b border-zinc-900/10 pt-4 pb-3 text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl dark:border-white/10">
          Suggested Palettes
        </h2>

        <ul className="flex flex-col gap-8">
          {suggestedPalettes.map((palette: TailwindPalette, paletteIndex: number) => (
            <li key={palette.name}>
              <Palette palette={palette} copied={copied} handleCopy={handleCopy} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

function PaletteSkeleton() {
  return (
    <div className="mt-4 grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="col-span-1 flex flex-col items-end gap-4 lg:col-span-2">
        <div className="h-12 w-full animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>
        <div className="h-12 w-full animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>
        <div className="h-12 w-full animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>
        <div className="mt-1 h-10 w-32 animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>

        <div className="grid w-full grid-cols-10 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-10 w-full animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>
          ))}
        </div>
      </div>

      <div className="col-span-1 h-full lg:col-span-1">
        <div className="h-96 w-full animate-pulse rounded bg-zinc-300 dark:bg-black/40"></div>
      </div>
    </div>
  )
}

function Palette({
  palette,
  copied,
  handleCopy,
}: {
  palette: TailwindPalette
  copied: { active: boolean; value: string }
  handleCopy: (color: string) => void
}) {
  return (
    <div className="w-full">
      <span className="mb-1.5 block font-semibold capitalize">{palette.name}</span>
      <ul className="-ml-1 flex flex-wrap items-center gap-1.5">
        {palette.combos.map((combo) => {
          const active = copied.active && copied.value === combo.color
          return (
            <li key={combo.id}>
              <button
                onClick={() => handleCopy(combo.color)}
                className="group relative flex flex-col items-start justify-center rounded-sm p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
              >
                <span className="absolute -top-1 -right-1 flex w-full items-center justify-end opacity-0 group-hover:opacity-100">
                  <span
                    className={cn(
                      "text-2xs rounded-full border border-transparent bg-zinc-800/90 p-[2px] text-center font-medium text-white shadow-xl transition-all dark:bg-rose-400/80",
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
                  className="mb-2 flex h-10 w-14 rounded-sm shadow-sm"
                  style={{ backgroundColor: combo.color }}
                ></span>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{combo.id}</span>
                <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400">{combo.color}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
