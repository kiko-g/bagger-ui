"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { LogoLink } from "./LogoLink"
import { NavigationDrawer } from "./NavigationDrawer"
import { ThemeToggle } from "./ThemeToggle"

export function Header({ location }: { location: string }) {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full border-b border-zinc-900/10 bg-zinc-100 bg-opacity-60 backdrop-blur-sm backdrop-filter dark:border-white/10 dark:bg-zinc-950 dark:bg-opacity-50 xl:px-4">
      <div className="flex items-center justify-between px-3 py-3 sm:px-3 lg:px-4 xl:px-1">
        <div className="flex items-center gap-3">
          <LogoLink />
          <span className="inline-flex items-center rounded-full bg-gradient-to-br from-orange-600/70 to-rose-600/70 px-1.5 py-0.5 text-xs/4 font-bold uppercase tracking-tight text-white">
            Beta
          </span>
        </div>

        <ul className="flex items-center justify-center gap-0.5 md:gap-1">
          <Button variant="ghost" size="icon-sm" asChild className="hidden md:inline-flex">
            <Link target="_blank" href="https://github.com/kiko-g/bagger-ui">
              <GithubIcon />
            </Link>
          </Button>

          <ThemeToggle />
          <NavigationDrawer location={location} />
        </ul>
      </div>
    </header>
  )
}
