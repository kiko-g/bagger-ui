'use client'

import React from 'react'

export function ButtonOutline() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-blue-500 bg-blue-500/5 px-4 py-2.5 text-sm font-normal text-blue-500 shadow-sm transition hover:bg-blue-500 hover:text-white focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-500 dark:bg-blue-500/5 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white"
    >
      Button
    </button>
  )
}
