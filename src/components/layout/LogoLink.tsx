'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { Lexend } from 'next/font/google'
import { LogoIcon } from '@/components/icons/LogoIcon'

const lexend = Lexend({ subsets: ['latin'] })

export function LogoLink() {
  return (
    <Link href="/" className="flex items-center justify-center gap-1.5 transition hover:opacity-80">
      <LogoIcon className="mt-[2px] h-7 w-7" />
      <h1
        className={clsx(
          lexend.className,
          'inline-flex text-xl font-bold leading-none tracking-tight text-zinc-800 dark:bg-transparent dark:text-white',
        )}
      >
        BaggerUI
      </h1>
    </Link>
  )
}
