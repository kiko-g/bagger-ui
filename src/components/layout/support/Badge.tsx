'use client'

import Link from 'next/link'

export function SupportBadge() {
  return (
    <Link
      href="https://github.com/kiko-g/bagger-ui"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1.5 rounded-full border border-primary-600/20 bg-primary-600/10 px-2.5 py-1.5 text-xs font-medium leading-none transition hover:bg-primary-600/20 dark:border-primary-600/50 dark:bg-primary-600/20 dark:hover:bg-primary-600/40"
    >
      <span className="font-semibold">Enjoy BaggerUI?</span>
      <span className="font-normal">Give it a star on GitHub</span>
      <span aria-hidden="true" role="img" className="h-3 w-3">
        ⭐️
      </span>
    </Link>
  )
}
