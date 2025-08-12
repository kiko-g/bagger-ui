"use client"

import React from "react"

export function SkeletonCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-white px-5 py-5 dark:bg-zinc-800">
      <div className="flex animate-pulse space-x-4">
        <div className="h-14 w-14 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>

        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 rounded bg-zinc-300 dark:bg-zinc-600"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-zinc-300 dark:bg-zinc-600"></div>
              <div className="col-span-1 h-2 rounded bg-zinc-300 dark:bg-zinc-600"></div>
            </div>
            <div className="h-2 rounded bg-zinc-300 dark:bg-zinc-600"></div>
          </div>
          <div className="h-44 w-full rounded bg-zinc-300 dark:bg-zinc-600"></div>
        </div>
      </div>
    </div>
  )
}
