"use client"

import React from "react"

export function SkeletonCard() {
  return (
    <div className="bg-background mx-auto w-full max-w-md rounded-xl border px-5 py-5">
      <div className="flex animate-pulse space-x-4">
        <div className="bg-muted h-14 w-14 rounded-full"></div>

        <div className="flex-1 space-y-4 py-1">
          <div className="bg-muted h-2 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted col-span-2 h-2 rounded"></div>
              <div className="bg-muted col-span-1 h-2 rounded"></div>
            </div>
            <div className="bg-muted h-2 rounded"></div>
          </div>
          <div className="bg-muted h-44 w-full rounded"></div>
        </div>
      </div>

      <div className="flex animate-pulse space-x-4">
        <div className="h-14 w-14 rounded-full opacity-0"></div>

        <footer className="flex flex-1 items-center justify-between gap-4">
          <div className="bg-muted h-3 w-1/5 rounded"></div>
          <div className="bg-muted h-3 w-1/5 rounded"></div>
          <div className="bg-muted h-3 w-1/2 rounded"></div>
          <div className="bg-muted h-3 w-1/2 rounded"></div>
          <div className="bg-muted h-3 w-1/2 rounded"></div>
        </footer>
      </div>
    </div>
  )
}
