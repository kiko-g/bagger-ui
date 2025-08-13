"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSplitWithImage() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Split layout hero with image
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Pair a compelling message with an illustrative product screenshot or photography.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#">Try it now</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="#">See features</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-zinc-100 ring-1 ring-inset ring-zinc-900/5 dark:bg-white/5">
            <Image
              src="/og.png"
              alt="Product preview"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 36rem, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}


