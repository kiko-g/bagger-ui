'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'

type Props = {
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'none'
  checked?: boolean
  labelText?: string
  isIntermediate?: boolean
  onChange?: () => void
}

export function Checkbox({ labelText, checked, isIntermediate = false, onChange, rounded }: Props) {
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
        className={cn(
          'cursor-pointer border border-zinc-900/20 bg-white px-2 py-2 font-normal text-blue-600 transition-all placeholder:font-normal placeholder:text-zinc-400 checked:bg-slate-700 indeterminate:bg-slate-700 hover:border-blue-600/80 hover:bg-slate-700/5 focus:border-blue-600 focus:accent-blue-600 focus:ring-0 focus:ring-blue-600 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:text-blue-500 dark:placeholder:text-zinc-500 dark:checked:bg-slate-700 dark:indeterminate:bg-slate-700 dark:hover:border-blue-500/70 dark:hover:bg-slate-700/50 dark:focus:border-blue-500/80 dark:focus:ring-0 dark:focus:ring-blue-500',
          rounded === 'sm' && 'rounded-sm',
          rounded === 'md' && 'rounded-md',
          rounded === 'lg' && 'rounded-lg',
          rounded === 'full' && 'rounded-full',
          rounded === 'none' && 'rounded-none',
        )}
        {...(checked !== undefined && { checked })}
        {...(onChange && { onChange })}
      />
      <span className="ml-2 max-w-sm text-sm leading-[18px]">{labelText || 'Label'}</span>
    </label>
  )
}
