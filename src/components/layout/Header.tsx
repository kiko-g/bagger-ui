'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { LogoLink } from './LogoLink'
import { GithubIcon } from '../icons'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full border-b border-zinc-900/10 bg-zinc-100 bg-opacity-60 backdrop-blur-sm backdrop-filter dark:border-white/10 dark:bg-zinc-950 dark:bg-opacity-50 xl:px-4">
      <div className="flex items-center justify-between px-3 py-3 sm:px-3 lg:px-4 xl:px-1">
        <div className="flex items-center gap-3">
          <LogoLink />
          <span className="inline-flex items-center rounded-full bg-gradient-to-br from-orange-600/70 to-rose-600/70 px-1.5 py-0.5 text-xs/4 font-bold uppercase tracking-tight text-white">
            Beta
          </span>
        </div>

        <ul className="flex items-center justify-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link target="_blank" href="https://github.com/kiko-g/bagger-ui">
              <GithubIcon className="size-4" />
            </Link>
          </Button>

          <ThemeToggle />
        </ul>
      </div>
    </header>
  )
}
