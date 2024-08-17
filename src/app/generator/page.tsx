"use client"

import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"
import {
  type ColorHex,
  interpolateTailwindPalette,
  isValidHex,
  TailwindCombo,
  writeTailwindPalette,
} from "@/utils/colors"
import { CodeShowcaseDirect } from "@/components/CodeShowcaseDirect"

const lexend = Lexend({ subsets: ["latin"] })

type TailwindPalette = {
  name: string
  combos: TailwindCombo[]
  config: string
}

export default function Generator() {
  const [firstColor, setFirstColor] = useState<ColorHex | "">("")
  const [secondColor, setSecondColor] = useState<ColorHex | "">("")
  const [tailwindPalette, setTailwindPalette] = useState<TailwindPalette>({
    name: "",
    combos: [],
    config: "",
  })

  function generateTailwindPalette() {
    if (!firstColor || !secondColor) return
    if (!isValidHex(firstColor) || !isValidHex(secondColor)) return

    const tailwindCombos = interpolateTailwindPalette(firstColor, secondColor)
    const tailwindConfig = writeTailwindPalette(tailwindPalette.name || "custom", tailwindCombos)
    setTailwindPalette({ ...tailwindPalette, combos: tailwindCombos, config: tailwindConfig })
  }

  useEffect(() => {
    const trial = {
      firstColor: "#f0f9ff" as ColorHex,
      secondColor: "#082f49" as ColorHex,
      name: "Custom" as string,
    }

    setFirstColor(trial.firstColor)
    setSecondColor(trial.secondColor)

    const tailwindCombos = interpolateTailwindPalette(trial.firstColor, trial.secondColor)
    const tailwindConfig = writeTailwindPalette(trial.name, tailwindCombos)
    setTailwindPalette({ name: trial.name, combos: tailwindCombos, config: tailwindConfig })
  }, [])

  return (
    <Layout location="Generator" sidebar>
      <div className="my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl lg:py-6 xl:max-w-3xl">
        <h2
          className={clsx(
            lexend.className,
            "flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl"
          )}
        >
          Generator
        </h2>
        <p className="mb-3 max-w-5xl">Make use of our generator for colors and utilities for your websites.</p>
      </div>

      <ul className="border-dimmed mt-2 flex w-full flex-col gap-4 border-t pt-4">
        <li id="tailwindcss-palette">
          <h3
            className={clsx(
              lexend.className,
              "flex flex-wrap items-center text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl"
            )}
          >
            TailwindCSS Palette Generator
          </h3>

          <p className="mb-2 max-w-3xl text-sm">
            Generate a custom TailwindCSS color palette based on two colors. Enter the two colors you want to
            interpolate and the name of your color palette. Copy the output and paste it into your{" "}
            <code className="font-bold text-primary dark:text-primary">tailwind.config.js</code> 😎
          </p>

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
                onChange={(e) => setTailwindPalette({ ...tailwindPalette, name: e.target.value })}
                className="w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
              />

              {/* First Color Picker */}
              <div className="flex w-full items-center gap-3">
                <input
                  type="color"
                  value={firstColor}
                  onChange={(e) => setFirstColor(e.target.value as ColorHex)}
                  className="h-12 cursor-pointer transition hover:opacity-80"
                />
                <input
                  type="text"
                  id="firstColor"
                  name="firstColor"
                  value={firstColor}
                  onChange={(e) => setFirstColor(e.target.value as ColorHex)}
                  placeholder="First Color"
                  className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
                />
              </div>

              {/* Second Color Picker */}
              <div className="flex w-full items-center gap-3">
                <input
                  type="color"
                  value={secondColor}
                  onChange={(e) => setSecondColor(e.target.value as ColorHex)}
                  className="h-12 cursor-pointer transition hover:opacity-80"
                />
                <input
                  type="text"
                  id="secondColor"
                  name="secondColor"
                  value={secondColor}
                  onChange={(e) => setSecondColor(e.target.value as ColorHex)}
                  placeholder="Second Color"
                  className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-primary/70 dark:hover:bg-primary/5 dark:focus:border-primary/80 dark:focus:ring-0 dark:focus:ring-primary lg:px-3.5 lg:py-2.5 lg:text-sm"
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
                  <ul className="flex flex-wrap items-center gap-3">
                    {tailwindPalette.combos.map((combo) => (
                      <li key={combo.id} className="flex flex-col items-start justify-center">
                        <span
                          className="mb-2 flex h-10 w-14 rounded shadow"
                          style={{ backgroundColor: combo.color }}
                        ></span>
                        <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{combo.id}</span>
                        <span className="text-xs font-normal text-gray-600 dark:text-gray-400">{combo.color}</span>
                      </li>
                    ))}
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
                  options={{ maxHeight: "600px" }}
                ></CodeShowcaseDirect>
              </div>
            )}
          </section>
        </li>
      </ul>
    </Layout>
  )
}
