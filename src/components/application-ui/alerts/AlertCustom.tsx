'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function AlertCustomDemo() {
  return (
    <>
      <AlertCustom type="info" rounded border>
        Content of your information alert provided through children.
      </AlertCustom>
      <AlertCustom type="success" accent dismissible>
        Content of your success alert provided through children.
      </AlertCustom>
      <AlertCustom type="warning" filled dismissible>
        Content of your warning alert provided through children.
      </AlertCustom>
      <AlertCustom type="error" filled rounded dismissible>
        Content of your error alert provided through children.
      </AlertCustom>
      <AlertCustom dismissible accent>
        <ul className="list-inside list-disc">
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>
      </AlertCustom>
    </>
  )
}

type Props = {
  children?: React.ReactNode
  type?: 'success' | 'info' | 'warning' | 'error'
  rounded?: boolean
  border?: boolean
  accent?: boolean
  dismissible?: boolean
  filled?: boolean
  noIcon?: boolean
}

export function AlertCustom({
  type,
  children,
  rounded = false,
  border = false,
  accent = false,
  dismissible = false,
  filled = false,
  noIcon = false,
}: Props) {
  const [show, setShow] = useState(true)

  function closeAlert() {
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className={clsx(
        'flex w-full items-start justify-start gap-3 py-3 pl-3',
        dismissible ? 'pr-3' : 'pr-5',
        border && 'border',
        accent && 'border-l-4',
        rounded && 'rounded',
        filled ? 'text-white' : '',
        type === 'info' &&
          (filled ? 'bg-sky-600' : 'border-sky-600 bg-sky-50 text-sky-700 dark:bg-sky-600/20 dark:text-sky-200'),
        type === 'error' &&
          (filled ? 'bg-rose-600' : 'border-rose-600 bg-rose-50 text-rose-700 dark:bg-rose-600/20 dark:text-red-200'),
        type === 'warning' &&
          (filled
            ? 'bg-amber-600'
            : 'border-amber-600 bg-amber-50 text-amber-700 dark:bg-amber-600/20 dark:text-amber-100'),
        type === 'success' &&
          (filled
            ? 'bg-emerald-600'
            : 'border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-600/20 dark:text-emerald-200'),
        type === undefined &&
          (filled
            ? 'bg-slate-600'
            : 'border-slate-600 bg-slate-50 text-slate-700 dark:bg-slate-600/20 dark:text-slate-200'),
      )}
    >
      {noIcon !== true && (
        <span className="mt-0.5 self-stretch">
          {type === 'info' && <InformationCircleIcon className="h-5 w-5" />}
          {type === 'error' && <ExclamationCircleIcon className="h-5 w-5" />}
          {type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5" />}
          {type === 'success' && <CheckBadgeIcon className="h-5 w-5" />}
          {type === undefined && <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />}
        </span>
      )}

      <div className="flex-1">{children}</div>

      {dismissible && (
        <button
          onClick={closeAlert}
          className={clsx(
            filled
              ? 'text-white hover:bg-white/20 dark:text-white'
              : 'text-zinc-700 hover:bg-black/10 dark:text-white dark:hover:bg-white/10',
            'ml-1 rounded p-0.5 transition lg:ml-2 lg:p-1',
          )}
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
