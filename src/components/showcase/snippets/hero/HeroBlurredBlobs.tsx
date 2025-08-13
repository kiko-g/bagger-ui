"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroBlurredBlobs() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-6rem] -translate-x-1/2 transform-gpu blur-3xl">
          <div className="aspect-[1155/678] w-[50rem] bg-gradient-to-tr from-primary to-secondary opacity-30 dark:opacity-40" />
        </div>
        <div className="absolute right-0 top-20 -translate-y-1/2 transform-gpu blur-2xl">
          <div className="aspect-[1155/678] w-[36rem] rotate-12 bg-gradient-to-tr from-fuchsia-500 to-indigo-500 opacity-20 dark:opacity-30" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Introducing</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Gradient blurred blobs hero
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Subtle background blobs with strong foreground contrast. Great for product landings and SaaS.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#">Start free</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#">Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


