'use client'

import Link from 'next/link'
import clsx from 'clsx'

export function SidebarItem({
  name,
  href,
  isActive,
  isNew,
}: {
  name: string
  href: string
  isActive: boolean
  isNew?: boolean
}) {
  return (
    <Link
      title={name}
      href={href}
      className={clsx(
        isActive
          ? 'border-primary-600 bg-zinc-500/10 dark:bg-primary-300/5'
          : 'border-zinc-900/10 hover:bg-zinc-500/5 dark:border-white/10 dark:hover:bg-zinc-50/10',
        'flex cursor-pointer items-center justify-start gap-2 border-l py-0.5 pl-3 text-sm transition ease-in-out',
      )}
    >
      <div className="hidden w-full items-center gap-1.5 pr-4 md:flex lg:pr-12">
        <span>{name}</span>
        {isNew && (
          <span className="inline-flex items-center rounded-full bg-teal-700 px-[5px] py-[3px] text-white dark:bg-teal-600">
            <span className="text-3xs font-semibold leading-none tracking-tight">New</span>
          </span>
        )}
      </div>
    </Link>
  )
}
