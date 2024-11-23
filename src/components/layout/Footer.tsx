'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full items-center justify-between space-x-2 border-t border-zinc-900/10 bg-zinc-800 px-4 py-4 pt-4 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 sm:px-6 lg:px-8 lg:py-8 lg:pt-8">
      <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-zinc-400 dark:text-zinc-500">
        by{' '}
        <Link
          target="_blank"
          href="https://github.com/kiko-g"
          className="inline-flex items-center gap-2 text-white hover:underline hover:opacity-80 dark:text-zinc-100"
        >
          <span className="font-bold">Francisco Gonçalves</span>
          <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />
        </Link>
      </p>

      <div></div>
    </footer>
  )
}
