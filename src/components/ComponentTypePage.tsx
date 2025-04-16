"use client"

import React, { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { strIncludes } from "@/utils"
import type { ComponentCardType, ComponentSample, QuickNavigation } from "@/types"

import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "@/components/ComponentShowcase"

import { BookDashedIcon, CircleOffIcon, PuzzleIcon } from "lucide-react"

type Props = {
  title: string
  description?: React.ReactNode
  sample?: ComponentSample
  examples?: ComponentCardType[]
  combos?: ComponentCardType[]
}

export function ComponentTypePage({ title, description, sample, examples, combos }: Props) {
  const [search, setSearch] = useState("")
  const filteredExamples = useMemo(() => examples?.filter((item) => strIncludes(item.name, search)), [examples, search])
  const filteredCombos = useMemo(() => combos?.filter((item) => strIncludes(item.name, search)), [combos, search])

  const quickNav: QuickNavigation = useMemo(() => {
    const singles =
      sample && sample.nodes.length > 0
        ? sample.nodes.map((node) => ({
            name: node.item,
            href: `#${node.item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          }))
        : []
    const levels = [
      {
        name: "Examples",
        items: filteredExamples?.map((item) => ({
          name: item.name,
          href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        })),
      },
      {
        name: "Combos",
        items:
          filteredCombos?.length === 0
            ? []
            : filteredCombos?.map((item) => ({
                name: item.name,
                href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
              })),
      },
    ]
    return [singles, levels].flat()
  }, [filteredExamples, filteredCombos, sample])

  return (
    <Layout location={title} sidebar quickNav={quickNav}>
      <section className="mb-40 w-full pt-6 lg:pt-8 xl:pt-10">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter lg:mb-3 lg:text-4xl">{title}</h2>

        {sample && (
          <div className="mb-0 border-zinc-200 dark:border-zinc-800">
            {description ? description : null}
            {sample.nodes.map((node, nodeIdx) => (
              <div key={`sample-${nodeIdx}`}>{node.component}</div>
            ))}
          </div>
        )}

        {filteredExamples && filteredExamples.length > 0 && (
          <>
            <h3
              id="examples"
              className="mb-2 flex flex-wrap items-center border-b border-zinc-200 pb-2 pt-16 text-base font-semibold tracking-tighter dark:border-zinc-800 md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl"
            >
              <a href="#examples" className="group flex w-full items-center gap-2">
                <span className="group-hover:underline">Examples</span>
                <BookDashedIcon className="size-5" />
              </a>
            </h3>

            <ul id="examples" className="grid grid-cols-1">
              {filteredExamples.map((item, itemIdx) => (
                <ComponentShowcase
                  index={itemIdx}
                  name={item.name}
                  path={item.path}
                  component={item.component}
                  key={`button-${itemIdx}-${item.name}`}
                />
              ))}
            </ul>
          </>
        )}

        {filteredCombos && filteredCombos.length > 0 && (
          <>
            <h3
              id="combos"
              className="mb-2 flex flex-wrap items-center border-b border-zinc-200 pb-2 pt-16 text-base font-semibold tracking-tighter dark:border-zinc-800 md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl"
            >
              <a href="#combos" className="group flex w-full items-center gap-2">
                <span className="group-hover:underline">Combos</span>
                <PuzzleIcon className="size-5" />
              </a>
            </h3>
            <ul id="combos" className={cn("grid grid-cols-1")}>
              {filteredCombos.map((item, itemIdx) => (
                <ComponentShowcase
                  index={itemIdx}
                  name={item.name}
                  path={item.path}
                  component={item.component}
                  key={`button-${itemIdx}-${item.name}`}
                />
              ))}
            </ul>
          </>
        )}
      </section>
    </Layout>
  )
}
