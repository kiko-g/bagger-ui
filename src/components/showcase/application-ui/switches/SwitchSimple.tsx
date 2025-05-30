"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Switch } from "@headlessui/react"
import { CheckIcon, XIcon } from "lucide-react"

export function SwitchSimple() {
  const [isOn, setIsOn] = useState(false)

  function toggle() {
    setIsOn((prev) => !prev)
  }

  return (
    <Switch checked={isOn} onChange={toggle}>
      <span className="sr-only">Use setting</span>
      <span
        className={cn(
          "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-sm text-white shadow-xs transition hover:opacity-80 disabled:cursor-not-allowed",
          isOn ? "bg-rose-600 dark:bg-rose-600/50" : "bg-slate-700 dark:bg-slate-500/60",
        )}
      >
        {isOn ? (
          <>
            <span className="hidden lg:inline-flex">Off</span>
            <XIcon className="size-5" />
          </>
        ) : (
          <>
            <span className="hidden lg:inline-flex">On</span>
            <CheckIcon className="size-5" />
          </>
        )}
      </span>
    </Switch>
  )
}
