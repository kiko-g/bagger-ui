'use client'

import React, { useState } from 'react'

type Props = {
  labelText?: string
}

export function InputSimple({ labelText }: Props) {
  const inputId = 'input-simple'
  const [value, setValue] = useState('')

  return (
    <div className="flex w-full flex-col">
      <label
        htmlFor={inputId}
        className="mb-0.5 text-sm font-semibold tracking-tighter text-zinc-700 dark:text-zinc-300"
      >
        {labelText || 'Label'}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder="Text Placeholder"
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded border border-zinc-300 bg-zinc-50 px-2 py-2 text-xs font-normal transition-all placeholder:font-light placeholder:text-zinc-400 hover:border-zinc-700/80 focus:border-zinc-700 focus:accent-zinc-700 focus:ring-0 focus:ring-zinc-700 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-blue-500/70 dark:hover:bg-blue-500/5 dark:focus:border-blue-500/80 dark:focus:ring-0 dark:focus:ring-blue-500 lg:px-3.5 lg:py-2.5 lg:text-sm"
      />
    </div>
  )
}
