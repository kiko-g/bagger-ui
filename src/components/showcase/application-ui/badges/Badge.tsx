'use client'

import React from 'react'
import clsx from 'clsx'
import type { ColorVariant, RoundedVariant, SizeVariant } from '@/types'

type Props = {
  children: React.ReactNode
  outline?: boolean
  variant?: ColorVariant
  rounded?: RoundedVariant
  size?: SizeVariant
  className?: string
}

const baseVariants = {
  slate:
    'border-slate-600/60 bg-slate-500/10 text-slate-950 dark:bg-slate-400/30 dark:border-slate-500 dark:text-white',
  gray: 'border-gray-600/60 bg-gray-500/10 text-gray-950 dark:bg-gray-400/30 dark:border-gray-500 dark:text-white',
  zinc: 'border-zinc-600/60 bg-zinc-500/10 text-zinc-950 dark:bg-zinc-400/30 dark:border-zinc-500 dark:text-white',
  neutral:
    'border-neutral-600/60 bg-neutral-500/10 text-neutral-950 dark:bg-neutral-400/30 dark:border-neutral-500 dark:text-white',
  stone:
    'border-stone-600/60 bg-stone-500/10 text-stone-950 dark:bg-stone-400/30 dark:border-stone-500 dark:text-white',
  red: 'border-red-600/60 bg-red-500/10 text-red-950 dark:bg-red-400/30 dark:border-red-500 dark:text-white',
  orange:
    'border-orange-600/60 bg-orange-500/10 text-orange-950 dark:bg-orange-400/30 dark:border-orange-500 dark:text-white',
  amber:
    'border-amber-600/60 bg-amber-500/10 text-amber-950 dark:bg-amber-400/30 dark:border-amber-500 dark:text-white',
  yellow:
    'border-yellow-600/60 bg-yellow-500/10 text-yellow-950 dark:bg-yellow-400/30 dark:border-yellow-500 dark:text-white',
  lime: 'border-lime-600/60 bg-lime-500/10 text-lime-950 dark:bg-lime-400/30 dark:border-lime-500 dark:text-white',
  green:
    'border-green-600/60 bg-green-500/10 text-green-950 dark:bg-green-400/30 dark:border-green-500 dark:text-white',
  emerald:
    'border-emerald-600/60 bg-emerald-500/10 text-emerald-950 dark:bg-emerald-400/30 dark:border-emerald-500 dark:text-white',
  teal: 'border-teal-600/60 bg-teal-500/10 text-teal-950 dark:bg-teal-400/30 dark:border-teal-500 dark:text-white',
  cyan: 'border-cyan-600/60 bg-cyan-500/10 text-cyan-950 dark:bg-cyan-400/30 dark:border-cyan-500 dark:text-white',
  sky: 'border-sky-600/60 bg-sky-600/10 text-sky-950 dark:border-sky-600 dark:bg-sky-500/50 dark:text-white',
  blue: 'border-blue-600/60 bg-blue-600/10 text-blue-950 dark:border-blue-600 dark:bg-blue-500/50 dark:text-white',
  indigo:
    'border-indigo-600/60 bg-indigo-500/10 text-indigo-950 dark:bg-indigo-400/30 dark:border-indigo-500 dark:text-white',
  violet:
    'border-violet-600/60 bg-violet-500/10 text-violet-950 dark:bg-violet-400/30 dark:border-violet-500 dark:text-white',
  purple:
    'border-purple-600/60 bg-purple-500/10 text-purple-950 dark:bg-purple-400/30 dark:border-purple-500 dark:text-white',
  fuchsia:
    'border-fuchsia-600/60 bg-fuchsia-500/10 text-fuchsia-950 dark:bg-fuchsia-400/30 dark:border-fuchsia-500 dark:text-white',
  pink: 'border-pink-600/60 bg-pink-500/10 text-pink-950 dark:bg-pink-400/30 dark:border-pink-500 dark:text-white',
  rose: 'border-rose-600/60 bg-rose-500/10 text-rose-950 dark:bg-rose-400/30 dark:border-rose-500 dark:text-white',
}

const variants = {
  ...baseVariants,
  neutral: baseVariants.zinc,
  success: baseVariants.emerald,
  error: baseVariants.rose,
  warn: baseVariants.amber,
  info: baseVariants.sky,
  warning: baseVariants.amber,
}

const roundeds = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
  none: 'rounded-none',
}

const sizes = {
  sm: 'text-sm px-2 py-0.5',
  md: 'text-md px-3 py-1',
  lg: 'text-lg px-4 py-2',
}

export function Badge({ children, variant, outline, rounded, size, className }: Props) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1',
        outline ? 'border' : 'border-0',
        rounded ? roundeds[rounded as keyof typeof roundeds] : roundeds['sm'],
        size ? sizes[size as keyof typeof sizes] : sizes['sm'],
        variant ? variants[variant as keyof typeof variants] : variants['zinc'],
        className,
      )}
    >
      {children}
    </div>
  )
}
