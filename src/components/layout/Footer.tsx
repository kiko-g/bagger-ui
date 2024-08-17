"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="max-w-8xl mx-auto flex w-full items-center justify-between space-x-2 bg-gray-800 px-4 py-4 pt-4 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-8 lg:pt-8">
      <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-300 dark:text-gray-400">
        by{" "}
        <Link
          target="_blank"
          href="https://github.com/kiko-g"
          className="inline-flex items-center gap-2 text-white hover:underline hover:opacity-80 dark:text-gray-300"
        >
          <span className="font-bold">Francisco Gonçalves</span>
          <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />
        </Link>
      </p>

      <div></div>
    </footer>
  )
}
