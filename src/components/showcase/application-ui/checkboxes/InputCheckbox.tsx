'use client'

import React, { useEffect, useRef } from 'react'

type InputCheckboxProps = {
  labelText?: string
  checked?: boolean
  isIntermediate?: boolean
  onChange?: () => void
}

export function InputCheckbox({ labelText, checked, isIntermediate = false, onChange }: InputCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIntermediate
    }
  }, [isIntermediate])

  return (
    <label className="inline-flex cursor-pointer items-start">
      <input
        ref={checkboxRef}
        type="checkbox"
        className="cursor-pointer rounded border border-zinc-300 bg-white px-2 py-2 font-normal text-primary-600 placeholder:font-normal placeholder:text-zinc-400 checked:bg-primary-600 indeterminate:bg-primary-600 hover:border-primary-600/80 hover:bg-primary-600/5 focus:border-primary-600 focus:accent-primary-600 focus:ring-0 focus:ring-primary-600 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:text-blue-500 dark:placeholder:text-zinc-500 dark:checked:bg-blue-500 dark:indeterminate:bg-blue-500 dark:hover:border-blue-500/70 dark:hover:bg-blue-500/50 dark:focus:border-blue-500/80 dark:focus:ring-0 dark:focus:ring-blue-500"
        {...(checked !== undefined && { checked })}
        {...(onChange && { onChange })}
      />
      <span className="ml-2 max-w-sm text-sm leading-[18px]">{labelText || 'Label'}</span>
    </label>
  )
}
