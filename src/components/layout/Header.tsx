'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { LogoLink } from './LogoLink'
import { GithubIcon } from '../icons'

export function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full border-b border-zinc-900/10 bg-zinc-100 bg-opacity-60 backdrop-blur-sm backdrop-filter dark:border-white/10 dark:bg-zinc-950 dark:bg-opacity-50 xl:px-6">
      <div className="flex items-center justify-between px-3 py-3 sm:px-4 lg:px-6 xl:px-0">
        <div className="flex items-center gap-3">
          <LogoLink />
          <span className="inline-flex items-center rounded-full border border-amber-600 bg-gradient-to-br from-yellow-500/70 to-amber-600/70 px-1.5 py-0.5 text-xs/4 font-bold uppercase tracking-tight text-white dark:border-amber-500">
            Beta
          </span>
        </div>

        <ul className="flex items-center justify-center gap-1 lg:gap-2">
          <Link
            target="_blank"
            href="https://github.com/kiko-g/bagger-ui"
            className="flex items-center justify-center rounded-md p-0.5 opacity-50 transition hover:opacity-100"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </ul>
      </div>
    </header>
  )
}
