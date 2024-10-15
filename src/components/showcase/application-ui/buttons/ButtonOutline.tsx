'use client'

import React from 'react'

export function ButtonOutline() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-blue-500 bg-slate-700/5 px-4 py-2.5 text-sm font-normal text-blue-500 shadow-sm transition hover:bg-slate-700 hover:text-white focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-500 dark:bg-slate-500/5 dark:text-blue-500 dark:hover:bg-slate-700 dark:hover:text-white"
    >
      Button
    </button>
  )
}
