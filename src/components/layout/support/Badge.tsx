"use client"

import Link from "next/link"

export function SupportBadge() {
  return (
    <Link
      href="https://github.com/kiko-g/bagger-ui"
      target="_blank"
      rel="noopener noreferrer"
      className="border-secondary/20 bg-secondary/10 hover:bg-secondary/20 dark:border-secondary/50 dark:bg-secondary/20 dark:hover:bg-secondary/40 flex w-full items-center justify-start gap-1.5 rounded-full border px-2.5 py-1.5 text-xs leading-none font-medium transition md:w-auto"
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
