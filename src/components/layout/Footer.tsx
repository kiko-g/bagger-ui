"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { InstagramIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="mx-auto flex w-full items-center justify-between border-t bg-zinc-800 px-4 py-4 pt-4 backdrop-blur-xl sm:px-6 lg:px-8 lg:py-8 lg:pt-8 dark:bg-inherit">
      <div className="flex flex-col items-start justify-start gap-0">
        <p className="text-2xs leading-5 text-zinc-400 md:text-sm dark:text-zinc-500">
          Built by{" "}
          <Link
            target="_blank"
            href="https://github.com/kiko-g"
            className="inline-flex items-center gap-2 font-medium text-white hover:underline hover:opacity-80 dark:text-zinc-100"
          >
            Francisco Gonçalves
            <Image src="/profile-2.svg" alt="author" width={24} height={24} className="rounded-full" />
          </Link>
        </p>

        <p className="text-2xs leading-5 text-zinc-400 md:text-sm dark:text-zinc-500">
          Code is open source and available on{" "}
          <Link
            target="_blank"
            href="https://github.com/kiko-g/ui"
            className="inline-flex items-center gap-2 font-medium text-white hover:underline hover:opacity-80 dark:text-zinc-100"
          >
            GitHub
          </Link>
        </p>
      </div>

      <ul className="flex items-center gap-1">
        <li>
          <Button variant="ghost-dark" size="icon" asChild>
            <Link href="https://www.instagram.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="size-4 fill-white" />
            </Link>
          </Button>
        </li>

        <li>
          <Button variant="ghost-dark" size="icon" asChild>
            <Link href="https://www.twitter.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
              <XTwitterIcon className="size-4 fill-white" />
            </Link>
          </Button>
        </li>

        <li>
          <Button variant="ghost-dark" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/kikogoncalves/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="size-4 fill-white stroke-transparent text-white" />
            </Link>
          </Button>
        </li>
      </ul>
    </footer>
  )
}
