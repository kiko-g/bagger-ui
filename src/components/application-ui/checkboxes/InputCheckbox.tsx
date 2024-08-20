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
        className="cursor-pointer rounded border border-gray-300 bg-white px-2 py-2 font-normal text-teal-600 placeholder:font-normal placeholder:text-gray-400 checked:bg-teal-600 indeterminate:bg-teal-600 hover:border-teal-600/80 hover:bg-teal-600/5 focus:border-teal-600 focus:accent-teal-600 focus:ring-0 focus:ring-teal-600 focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:text-blue-500 dark:placeholder:text-gray-500 dark:checked:bg-blue-500 dark:indeterminate:bg-blue-500 dark:hover:border-blue-500/70 dark:hover:bg-blue-500/50 dark:focus:border-blue-500/80 dark:focus:ring-0 dark:focus:ring-blue-500"
        {...(checked !== undefined && { checked })}
        {...(onChange && { onChange })}
      />
      <span className="ml-2 max-w-sm text-sm leading-[18px]">{labelText || 'Label'}</span>
    </label>
  )
}
