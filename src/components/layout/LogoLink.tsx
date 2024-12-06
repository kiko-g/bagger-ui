'use client'

import Link from 'next/link'
import { LogoIcon } from '@/components/icons/LogoIcon'

export function LogoLink() {
  return (
    <Link href="/" className="flex items-center justify-center gap-1.5 transition hover:opacity-80">
      <LogoIcon className="mt-[2px] h-7 w-7" />
      <span className="hidden font-extrabold lg:inline-block">Bagger UI</span>
    </Link>
  )
}
