'use client'

import React, { useState, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { ComponentShowcase } from '@/components/ComponentShowcase'
import { strIncludes } from '@/utils'
import clsx from 'clsx'

type ComponentCardType = {
  name: string
  path: string
  component: React.ReactNode
}

type Props = {
  title: string
  components: ComponentCardType[]
  description?: React.ReactNode
}

export function ComponentTypePage({ title, components, description }: Props) {
  const [search, setSearch] = useState('')
  const filteredComponents = useMemo(
    () => components.filter((item) => strIncludes(item.name, search)),
    [components, search],
  )
  const quickNav = useMemo(
    () =>
      filteredComponents.map((item) => ({
        name: item.name,
        href: `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      })),
    [filteredComponents],
  )

  return (
    <Layout location={title} sidebar quickNav={quickNav}>
      <section className="mb-36 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-4xl">{title}</h2>
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
            className="focus:border-primary-600focus:accent-primary-600 w-full border border-zinc-300 bg-zinc-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-primary-600/80 hover:bg-primary-600/5 focus:ring-0 focus:ring-primary-600 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-primary-600/80 dark:hover:bg-primary-600/5 dark:focus:border-primary-600/80 dark:focus:ring-0 dark:focus:ring-primary-600 lg:px-3.5 lg:py-2.5 lg:text-sm"
          />
        </div>

        <ul className={clsx('grid grid-cols-1')}>
          {filteredComponents?.length > 0 ? (
            filteredComponents.map((button, buttonIx) => (
              <ComponentShowcase
                name={button.name}
                path={button.path}
                Component={button.component}
                key={`button-${buttonIx}-${button.name}`}
              />
            ))
          ) : (
            <div>
              <p>No components found.</p>
            </div>
          )}
        </ul>
      </section>
    </Layout>
  )
}
