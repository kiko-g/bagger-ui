'use client'

import React from 'react'

export function ButtonSimpleBorder() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-blue-500 bg-slate-700/50 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-500 dark:bg-slate-500/25 dark:hover:bg-slate-700"
    >
      Button
    </button>
  )
}
