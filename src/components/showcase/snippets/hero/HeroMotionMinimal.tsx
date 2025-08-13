"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroMotionMinimal() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Minimal motion hero
            </h2>
          </motion.div>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Elements fade and rise into place to create a polished, premium feel with zero clutter.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <Button asChild size="lg">
              <Link href="#">Primary action</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#">Secondary</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="from-primary/15 dark:from-primary/20 pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </section>
  )
}
