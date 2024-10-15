'use client'

import React from 'react'

export function ButtonGroupJoined() {
  return (
    <div className="flex items-center">
      <button className="rounded-l bg-zinc-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/30 dark:hover:bg-slate-700">
        Button A
      </button>

      <button className="bg-zinc-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/30 dark:hover:bg-slate-700">
        Button B
      </button>

      <button className="bg-zinc-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/30 dark:hover:bg-slate-700">
        Button C
      </button>

      <button className="rounded-r bg-zinc-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/30 dark:hover:bg-slate-700">
        Button D
      </button>
    </div>
  )
}
