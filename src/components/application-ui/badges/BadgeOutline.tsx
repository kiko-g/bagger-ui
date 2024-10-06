'use client'

import React from 'react'
import clsx from 'clsx'

function BadgeOutlineDemo() {
  return (
    <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
      <BadgeOutline>
        <span className="text-sm">Outline</span>
      </BadgeOutline>
      <BadgeOutline type="info">
        <span className="text-sm">Info</span>
      </BadgeOutline>
      <BadgeOutline type="success">
        <span className="text-sm">Success</span>
      </BadgeOutline>
      <BadgeOutline type="warning">
        <span className="text-sm">Warning</span>
      </BadgeOutline>
      <BadgeOutline type="error">
        <span className="text-sm">Error</span>
      </BadgeOutline>
    </div>
  )
}

type Props = {
  type?: undefined | 'success' | 'error' | 'warning' | 'info'
  noBubble?: boolean
  noBorder?: boolean
  children?: React.ReactNode
}

export function BadgeOutline({ type, noBubble = false, noBorder = false, children }: Props) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center gap-0.5 rounded-full border px-2 py-1 lg:gap-1.5',
        type === 'info' &&
          'border-sky-600 bg-sky-600/10 text-zinc-900 dark:border-sky-500 dark:bg-sky-400/30 dark:text-white',
        type === 'error' &&
          'border-rose-600 bg-rose-600/10 text-zinc-900 dark:border-rose-500 dark:bg-rose-400/30 dark:text-white',
        type === 'warning' &&
          'border-amber-600 bg-amber-600/10 text-zinc-900 dark:border-amber-500 dark:bg-amber-400/30 dark:text-white',
        type === 'success' &&
          'border-emerald-600 bg-emerald-600/10 text-zinc-900 dark:border-emerald-500 dark:bg-emerald-400/30 dark:text-white',
        type === undefined &&
          'border-slate-600 bg-slate-600/10 text-zinc-900 dark:border-slate-500 dark:bg-slate-400/30 dark:text-white',
        noBorder && 'border-0',
      )}
    >
      {noBubble ? null : (
        <span
          className={clsx(
            'inline-flex h-2 w-2 rounded-full',
            type === 'info' && 'bg-sky-600',
            type === 'error' && 'bg-rose-600',
            type === 'warning' && 'bg-amber-600',
            type === 'success' && 'bg-emerald-600',
            type === undefined && 'bg-slate-600',
          )}
        />
      )}
      {children ? children : <div className="text-sm">Outline Badge</div>}
    </div>
  )
}
