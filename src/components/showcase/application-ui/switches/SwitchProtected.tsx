"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Switch } from "@headlessui/react"

export function SwitchProtected() {
  const [isEnabled, setIsEnabled] = useState(true)

  function toggle() {
    // only prompt for code if switch is enabled
    if (isEnabled) {
      const userCode = window.prompt(`Please enter the code to toggle switch OFF (1234):`)
      const expectedCode = "1234"

      if (userCode === expectedCode) setIsEnabled(false)
      else alert("Incorrect code. Switch was not disabled.")
    } else {
      setIsEnabled(true)
    }
  }

  return (
    <Switch
      checked={isEnabled}
      onChange={toggle}
      className={cn(
        isEnabled ? "bg-slate-700" : "bg-zinc-600",
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:focus:ring-blue-600/80",
      )}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        aria-hidden="true"
        className={cn(
          isEnabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  )
}
