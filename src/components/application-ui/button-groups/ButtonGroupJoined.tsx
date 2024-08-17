"use client"

import React from "react"

export function ButtonGroupJoined() {
  return (
    <div className="flex items-center">
      <button className="rounded-l bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button A
      </button>

      <button className="bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button B
      </button>

      <button className="bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button C
      </button>

      <button className="rounded-r bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button D
      </button>
    </div>
  )
}
