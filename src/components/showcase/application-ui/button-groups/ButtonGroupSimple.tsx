'use client'

import React from 'react'

export function ButtonGroupSimple() {
  function myFunctionA() {
    // your onClick code here
  }

  function myFunctionB() {
    // your onClick code here
  }

  function myFunctionC() {
    // your onClick code here
  }

  function myFunctionD() {
    // your onClick code here
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={myFunctionA}
        className="rounded bg-sky-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/60 dark:hover:bg-sky-600"
      >
        Button A
      </button>

      <button
        onClick={myFunctionB}
        className="rounded bg-amber-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-amber-600/60 dark:hover:bg-amber-600"
      >
        Button B
      </button>

      <button
        onClick={myFunctionC}
        className="rounded bg-rose-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-rose-600/60 dark:hover:bg-rose-600"
      >
        Button C
      </button>

      <button
        onClick={myFunctionD}
        className="rounded bg-emerald-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-emerald-600/60 dark:hover:bg-emerald-600"
      >
        Button D
      </button>
    </div>
  )
}
