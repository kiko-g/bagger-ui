'use client'

import React from 'react'
import clsx from 'clsx'
import { CheckIcon } from '@heroicons/react/24/outline'

type Props = {
  outline?: boolean
}

export function BadgeSuccess({ outline }: Props) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center gap-0.5 rounded border px-2 py-1 lg:gap-1',
        outline
          ? 'border-teal-600 bg-teal-600/10 text-teal-950 dark:border-teal-500 dark:bg-teal-400/30 dark:text-white'
          : 'border-teal-700 bg-teal-600 text-white dark:border-teal-600 dark:bg-teal-500 dark:text-white',
      )}
    >
      <div className="text-sm">Success</div>
      <CheckIcon className="h-4 w-4" />
    </div>
  )
}
