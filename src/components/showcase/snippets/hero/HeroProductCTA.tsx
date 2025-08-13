"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroProductCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] backdrop-blur md:p-12 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Turn visitors into customers
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
                Capture leads directly from the hero. Emails only; zero spam. Cancel anytime.
              </p>
              <form className="mt-6 flex max-w-md gap-2">
                <Input type="email" placeholder="Enter your email" className="h-11" />
                <Button type="submit" className="h-11">
                  Join
                </Button>
              </form>
            </div>
            <div className="from-primary/20 to-secondary/20 dark:from-primary/15 dark:to-secondary/15 relative h-48 rounded-xl bg-gradient-to-br ring-1 ring-zinc-900/5 ring-inset">
              <div className="absolute inset-6 rounded-lg border border-dashed border-zinc-300/70 dark:border-white/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
