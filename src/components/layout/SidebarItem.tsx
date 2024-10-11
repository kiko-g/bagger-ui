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
          ? 'border-l-2 border-primary-600 bg-primary-600/10 text-black hover:opacity-80 dark:border-primary-600 dark:bg-primary-600/10 dark:text-white'
          : 'border-dimmed border-l hover:bg-slate-500/10 dark:hover:bg-slate-600/30',
        'flex cursor-pointer items-center justify-start gap-2 py-0.5 pl-3 text-sm transition ease-in-out',
      )}
    >
      <div className="hidden w-full items-center gap-1.5 pr-4 md:flex lg:pr-12">
        <span>{name}</span>
        {isNew && (
          <span className="inline-flex items-center rounded-full bg-primary-700 px-[5px] py-[3px] text-white">
            <span className="text-3xs font-semibold leading-none tracking-tight">New</span>
          </span>
        )}
      </div>
    </Link>
  )
}
