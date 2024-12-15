'use client'

import Link from 'next/link'
import { GridPattern } from '@/components/layout/GridPattern'
import { type MotionValue, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Section } from '@/utils/data'
import { cn } from '@/lib/utils'

export function SectionCard({ section }: { section: Section }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={section.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      {section.pattern && <Pattern {...section.pattern} mouseX={mouseX} mouseY={mouseY} />}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={section.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {section.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{section.description}</p>
      </div>
    </div>
  )
}

function Pattern({
  mouseX,
  mouseY,
  ...gridProps
}: Section['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          x="50%"
          width={100}
          height={100}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/[0.05] dark:fill-white/[0.03] dark:stroke-white/[0.06]"
          {...gridProps}
        />
      </div>
      <motion.div
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-300',
          'from-sky-200 to-purple-200 opacity-10 dark:from-purple-200 dark:to-sky-200 dark:opacity-0',
          'group-hover:from-sky-200 group-hover:to-purple-200 group-hover:opacity-10 md:group-hover:opacity-30',
          'dark:group-hover:from-sky-200/30 dark:group-hover:to-purple-200/30 dark:group-hover:opacity-0 md:dark:group-hover:opacity-[15%]',
        )}
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
