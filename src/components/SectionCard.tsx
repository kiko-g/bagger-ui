"use client"

import Link from "next/link"
import { GridPattern } from "@/components/layout/GridPattern"
import { type MotionValue, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Section } from "@/utils/data"
import { cn } from "@/lib/utils"

export function SectionCard({ section }: { section: Section }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={section.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-linear-to-br from-slate-600/5 to-slate-600/0 transition-shadow hover:shadow-md hover:shadow-neutral-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      {section.pattern && <Pattern {...section.pattern} mouseX={mouseX} mouseY={mouseY} />}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-neutral-900/7.5 ring-inset group-hover:ring-neutral-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />

      {section.preview && (
        <div className="absolute inset-0 max-h-24 scale-80 rounded-2xl pt-5 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          {section.preview}
        </div>
      )}

      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <h3 className="pt-16 text-sm leading-7 font-semibold text-neutral-900 dark:text-white">
          <Link href={section.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {section.name}
          </Link>
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{section.description}</p>
      </div>
    </div>
  )
}

function Pattern({
  mouseX,
  mouseY,
  ...gridProps
}: Section["pattern"] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl mask-[linear-gradient(white,transparent)] transition duration-300 group-hover:opacity-50">
        <GridPattern
          x="50%"
          width={100}
          height={100}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/2 stroke-black/5 dark:fill-white/3 dark:stroke-white/6"
          {...gridProps}
        />
      </div>
      <motion.div
        className={cn("absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300")}
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-80 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}
