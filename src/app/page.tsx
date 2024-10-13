'use client'

import React from 'react'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { Hero } from '@/components/layout/Hero'
import { SectionCard } from '@/components/SectionCard'
import { applicationUiNav, eCommerceNav, marketingNav, Section } from '@/utils/data'

export default function Home() {
  return (
    <Layout location="Home" sidebar>
      <Hero />
      <div className="mb-24 w-full">
        <p className="mb-4 max-w-4xl">
          Start exploring the types of components we have available and visit their individual pages where you can find
          the web components and their source code. Make sure you have checked out the{' '}
          <Link href="/setup" className="font-bold transition hover:underline">
            <code>configuration</code>
          </Link>{' '}
          page. Your setup should be similar, otherwise some components might not work as expected in your project.
        </p>

        <ComponentsSection items={applicationUiNav} title="Application UI" />
        <ComponentsSection items={eCommerceNav} title="eCommerce" />
        <ComponentsSection items={marketingNav} title="Marketing" />
      </div>
    </Layout>
  )
}

function ComponentsSection({ items, title }: { items: Section[]; title: string }) {
  return (
    <div className="mt-16 border-t border-zinc-900/10 pt-4 dark:border-white/10">
      <h3 className="mb-3 text-xl font-bold">{title} Components</h3>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5">
        {items.map((section) => (
          <SectionCard key={`showcase-${title}-${section.href}`} section={section} />
        ))}
      </div>
    </div>
  )
}
