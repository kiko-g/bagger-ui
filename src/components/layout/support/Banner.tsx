'use client'

import Link from 'next/link'

export function SupportBanner() {
  return (
    <div className="group mb-2 border-b border-transparent bg-transparent text-teal-950 transition hover:bg-teal-800/5 dark:text-teal-100 dark:hover:bg-teal-400/20">
      <div className="mx-auto max-w-screen-xl">
        <Link
          href="https://github.com/kiko-g/bagger-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-4 py-2 transition"
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
