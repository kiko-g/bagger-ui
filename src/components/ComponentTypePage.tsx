'use client'

import React, { useState, useMemo } from 'react'
import clsx from 'clsx'
import { Layout } from '@/components/Layout'
import { strIncludes } from '@/utils'
import type { ComponentCardType, NavigationLevel } from '@/types'
import { ComponentShowcase } from '@/components/ComponentShowcase'
import { BookDashedIcon, LinkIcon, PuzzleIcon } from 'lucide-react'

type Props = {
  title: string
  description?: React.ReactNode
  component?: React.ReactNode
  examples: ComponentCardType[]
  combos?: ComponentCardType[]
}

export function ComponentTypePage({ title, description, component, examples, combos }: Props) {
  const [search, setSearch] = useState('')
  const filteredExamples = useMemo(() => examples.filter((item) => strIncludes(item.name, search)), [examples, search])
  const filteredCombos = useMemo(() => combos?.filter((item) => strIncludes(item.name, search)), [combos, search])

  const quickNav: NavigationLevel[] = useMemo(() => {
    return [
      {
        name: 'Examples',
        items: filteredExamples.map((item) => ({
          name: item.name,
          href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        })),
      },
      {
        name: 'Combos',
        items:
          filteredCombos?.length === 0
            ? []
            : filteredCombos?.map((item) => ({
                name: item.name,
                href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
              })),
      },
    ]
  }, [filteredExamples, filteredCombos])

  return (
    <Layout location={title} sidebar quickNav={quickNav}>
      <section className="mb-36 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter lg:mb-4 lg:text-4xl">{title}</h2>
        {description ? (
          description
        ) : (
          <p className="mb-3 max-w-4xl text-sm">
            Click the <strong>code</strong> tab buttons to see demos for every entry.
          </p>
        )}
        <div className="mb-4">
          <input
            type="search"
            id="searchComponent"
            name="searchComponent"
            placeholder="Search by component name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-sm border border-zinc-900/10 bg-white px-2 py-1.5 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-primary-600/80 hover:bg-primary-600/5 focus:border-primary-600 focus:bg-primary-600/5 focus:accent-primary-600 focus:ring-0 focus:ring-primary-600 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-primary-600/40 dark:hover:bg-primary-600/10 dark:focus:border-primary-600/80 dark:focus:bg-primary-600/10 dark:focus:ring-0 dark:focus:ring-primary-600 lg:px-3.5 lg:py-2 lg:text-sm"
          />
        </div>

        <h3
          id="examples"
          className="mb-2 flex flex-wrap items-center pt-16 text-base font-semibold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl"
        >
          <a href="#examples" className="group flex w-full items-center gap-2">
            <span className="group-hover:underline">Examples</span>
            <BookDashedIcon className="h-5 w-5" />
          </a>
        </h3>

        <ul id="examples" className={clsx('grid grid-cols-1 border-b border-zinc-200 pb-16')}>
          {filteredExamples?.length > 0 ? (
            filteredExamples.map((item, itemIdx) => (
              <ComponentShowcase
                index={itemIdx}
                name={item.name}
                path={item.path}
                component={item.component}
                key={`button-${itemIdx}-${item.name}`}
              />
            ))
          ) : (
            <div>
              <p>
                No component <strong>examples</strong> found matching your search.
              </p>
            </div>
          )}
        </ul>

        {/* Combos */}
        <h3
          id="combos"
          className="mb-2 flex flex-wrap items-center pt-16 text-base font-semibold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl"
        >
          <a href="#combos" className="group flex w-full items-center gap-2">
            <span className="group-hover:underline">Combos</span>
            <PuzzleIcon className="h-5 w-5" />
          </a>
        </h3>
        {filteredCombos && filteredCombos?.length > 0 ? (
          <ul id="combos" className={clsx('grid grid-cols-1')}>
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
        ) : (
          <div>
            <p>
              No component <strong>combos</strong> found matching your search.
            </p>
          </div>
        )}
      </section>
    </Layout>
  )
}
