"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { HeroPattern } from "@/components/layout/HeroPattern"
import Link from "next/link"

export function HeroCenteredGradient() {
  return (
    <section className="relative overflow-hidden">
      <HeroPattern />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            <span className="inline-block size-1.5 rounded-full bg-emerald-500" />
            Now with motion and gradients
          </div>
          <h1 className="mt-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Design modern hero sections
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Beautiful, accessible, and production-ready hero layouts. Start fast with presets and customize as your
            brand evolves.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#">Get started</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#">Live preview</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


