'use client'

import React from 'react'
import clsx from 'clsx'

function BadgeSimpleDemo() {
  return (
    <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
      <BadgeSimple>
        <span className="text-sm">Simple</span>
      </BadgeSimple>
      <BadgeSimple type="info">
        <span className="text-sm">Info</span>
      </BadgeSimple>
      <BadgeSimple type="success">
        <span className="text-sm">Success</span>
      </BadgeSimple>
      <BadgeSimple type="warning">
        <span className="text-sm">Warning</span>
      </BadgeSimple>
      <BadgeSimple type="error">
        <span className="text-sm">Error</span>
      </BadgeSimple>
    </div>
  )
}

type Props = {
  type?: undefined | 'success' | 'error' | 'warning' | 'info'
  children?: React.ReactNode
}

export function BadgeSimple({ type, children }: Props) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center gap-0.5 rounded px-2 py-1 lg:gap-1.5',
        type === 'info' && 'bg-sky-600 text-white',
        type === 'error' && 'bg-rose-600 text-white',
        type === 'warning' && 'bg-amber-600 text-white',
        type === 'success' && 'bg-emerald-600 text-white',
        type === undefined && 'bg-zinc-600 text-white',
      )}
    >
      {children ? children : <div className="text-sm">Simple Badge</div>}
    </div>
  )
}
