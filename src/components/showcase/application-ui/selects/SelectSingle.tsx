"use client"

import React, { Fragment, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { Listbox, Transition } from "@headlessui/react"
import { CheckCircleIcon, ChevronsUpDownIcon } from "lucide-react"

type Props = {
  className?: string
}

export function SelectSingle({ className }: Props) {
  const [picked, setPicked] = useState(null)
  const nothingSelected = useMemo(() => picked === null, [picked])
  const values = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua melon",
    "Yellow apple",
    "Zucchini",
  ]

  return (
    <Listbox as="div" value={picked} onChange={setPicked}>
      {({ open }) => (
        <div className={cn("relative", className)}>
          <Listbox.Button
            className={cn(
              "inline-flex w-full items-center justify-center gap-x-0.5 rounded border py-1.5 pl-2 pr-1.5 text-center text-xs text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 lg:py-1.5 lg:pl-2.5 lg:pr-1.5 lg:text-xs",
              nothingSelected
                ? "border-zinc-500 bg-zinc-500/70 dark:border-zinc-500 dark:bg-zinc-500/50"
                : "border-blue-600 bg-slate-700/70 dark:border-blue-600 dark:bg-slate-500/50",
            )}
          >
            <span className={cn("whitespace-nowrap font-normal tracking-tighter")}>
              {nothingSelected ? "Select One" : picked}
            </span>
            <ChevronsUpDownIcon className="size-4 lg:h-5 lg:w-5" aria-hidden="true" />
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
              className={cn(
                "z-50 max-h-80 overflow-scroll rounded-md bg-white px-0 py-1 text-sm shadow-xl dark:bg-zinc-800",
                open ? "absolute right-0 mt-2 w-full min-w-[12rem] lg:w-48" : "hidden",
              )}
            >
              <div className="dark:border- flex w-full items-center justify-end border-b px-3 pb-2 pt-1 font-normal tracking-tighter">
                <button
                  type="button"
                  className="tracking-tighter text-blue-500 hover:underline hover:opacity-80 dark:text-white"
                  onClick={() => setPicked(null)}
                >
                  Reset
                </button>
              </div>

              {values.map((item: string, itemIdx: number) => {
                const isSelected = picked === item

                return (
                  <Listbox.Option
                    key={`game-${itemIdx}`}
                    value={item}
                    className={({ active }) =>
                      cn(
                        "relative cursor-default select-none py-1.5 pl-3 pr-3",
                        active ? "bg-zinc-200 dark:bg-zinc-600" : "",
                      )
                    }
                  >
                    {({ selected }) => {
                      const highlight = selected || isSelected
                      return (
                        <span className="flex items-center gap-2">
                          {highlight ? (
                            <CheckCircleIcon className="size-5 text-blue-500" aria-hidden="true" />
                          ) : (
                            <span className="size-5" />
                          )}
                          <span className={cn("block truncate", highlight ? "font-bold" : "font-normal")}>{item}</span>
                        </span>
                      )
                    }}
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
