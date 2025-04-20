"use client"

import Link from "next/link"

export function SupportBadge() {
  return (
    <Link
      href="https://github.com/kiko-g/bagger-ui"
      target="_blank"
      rel="noopener noreferrer"
      className="border-primary/20 bg-primary/10 hover:bg-primary/20 dark:border-primary/50 dark:bg-primary/20 dark:hover:bg-primary/40 flex w-full items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 text-xs leading-none font-medium transition md:w-auto"
    >
      <span className="order-1 flex flex-row gap-1 lg:order-2">
        <span className="font-semibold">Enjoy BaggerUI?</span>
        <span className="font-normal">Give it a star on GitHub</span>
      </span>
      <span aria-hidden="true" role="img" className="size-3">
        ⭐️
      </span>
    </Link>
  )
}
