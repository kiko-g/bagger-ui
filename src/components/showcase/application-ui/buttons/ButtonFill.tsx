'use client'

import React from 'react'

export function ButtonFill() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="group relative flex items-center justify-center gap-x-2 rounded-sm border-2 border-blue-500 px-8 py-3 text-blue-500 disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-600 dark:text-white"
    >
      <span className="absolute inset-y-0 left-0 w-[4px] bg-slate-700/60 transition-all group-hover:w-full dark:bg-slate-500/40"></span>
      <span className="relative text-sm font-medium group-hover:text-white">Button</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="z-20 mt-[1px] inline-flex h-5 w-5 transition group-hover:text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>
  )
}
