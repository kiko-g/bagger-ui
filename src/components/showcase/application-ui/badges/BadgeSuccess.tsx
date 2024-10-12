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
          ? 'border-primary-600 bg-primary-600/10 text-primary-900 dark:border-primary-500 dark:bg-primary-400/30 dark:text-white'
          : 'border-primary-700 bg-primary-600 text-white dark:border-primary-600 dark:bg-primary-600 dark:text-white',
      )}
    >
      <div className="text-sm">Success</div>
      <CheckIcon className="h-4 w-4" />
    </div>
  )
}
