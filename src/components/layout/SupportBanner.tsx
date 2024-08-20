'use client'

import Link from 'next/link'

export function SupportBanner() {
  return (
    <div className="mb-2 border-b border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-2">
        <Link
          href="https://github.com/kiko-g/bagger-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 transition hover:opacity-80"
        >
          <span className="text-sm/none font-medium">Enjoy BaggerUI? Give it a star on GitHub</span>
          <span aria-hidden="true" role="img">
            ⭐️
          </span>
        </Link>
      </div>
    </div>
  )
}
