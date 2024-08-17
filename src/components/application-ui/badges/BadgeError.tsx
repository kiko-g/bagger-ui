"use client"

import React from "react"
import clsx from "clsx"
import { CheckIcon } from "@heroicons/react/24/outline"

type Props = {
  outline?: boolean
}

export function BadgeError({ outline }: Props) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center gap-0.5 rounded border px-2 py-1 lg:gap-1",
        outline
          ? "border-rose-700 bg-rose-700/10 text-rose-900 dark:border-rose-600 dark:bg-rose-500/30 dark:text-white"
          : "border-rose-700 bg-rose-700 text-white dark:border-rose-600 dark:bg-rose-600 dark:text-white"
      )}
    >
      <div className="text-sm">Success</div>
      <CheckIcon className="h-4 w-4" />
    </div>
  )
}
