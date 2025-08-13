"use client"

import React from "react"
import { GridPattern } from "@/components/layout/GridPattern"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroWithGridPattern() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -ml-150 h-72 w-400 dark:mask-[linear-gradient(white,transparent)]">
          <div className="from-primary to-secondary dark:from-primary/60 dark:to-secondary/30 absolute inset-0 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-40 dark:opacity-100">
            <GridPattern
              width={60}
              height={30}
              x={0}
              y={0}
              squares={[
                [4, 3],
                [2, 1],
                [7, 3],
                [10, 6],
              ]}
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
            Hero with subtle grid pattern
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Inspired by the gradient grid used across this project. Ideal for sophisticated, minimal pages.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="#">Explore components</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#">View on GitHub</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


