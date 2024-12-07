'use client'

import React, { useState, useMemo } from 'react'
import clsx from 'clsx'
import { Layout } from '@/components/Layout'
import { strIncludes } from '@/utils'
import type { ComponentCardType } from '@/types'
import { ComponentShowcase } from '@/components/ComponentShowcase'

type Props = {
  title: string
  component?: React.ReactNode
  examples: ComponentCardType[]
  description?: React.ReactNode
}

export function ComponentTypePage({ title, component, examples, description }: Props) {
  const [search, setSearch] = useState('')
  const filteredExamples = useMemo(() => examples.filter((item) => strIncludes(item.name, search)), [examples, search])
  const quickNav = useMemo(
    () =>
      filteredExamples.map((item) => ({
        name: item.name,
        href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      })),
    [filteredExamples],
  )

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

        <ul className={clsx('grid grid-cols-1')}>
          {filteredExamples?.length > 0 ? (
            filteredExamples.map((item, itemIdx) => (
              <ComponentShowcase
                name={item.name}
                path={item.path}
                component={item.component}
                key={`button-${itemIdx}-${item.name}`}
              />
            ))
          ) : (
            <div>
              <p>No component examples found matching your search.</p>
            </div>
          )}
        </ul>
      </section>
    </Layout>
  )
}
