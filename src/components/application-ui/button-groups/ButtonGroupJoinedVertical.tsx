'use client'

import React from 'react'

export function ButtonGroupJoinedVertical() {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <button className="w-full rounded-t bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button A
      </button>

      <button className="w-full rounded-none bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button B
      </button>

      <button className="w-full rounded-none bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button C
      </button>

      <button className="w-full rounded-b bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600">
        Button D
      </button>
    </div>
  )
}
