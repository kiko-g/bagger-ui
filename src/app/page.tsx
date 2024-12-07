'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ReactIcon, TailwindIcon, TypescriptIcon, ShadCnIcon } from '@/components/icons'
import { applicationUiNav, eCommerceNav, marketingNav, Section } from '@/utils/data'

import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'

export default function Home() {
  return (
    <Layout location="Home" sidebar>
      <Hero />
      <div className="mb-24 w-full">
        <p className="mb-4 max-w-4xl">
          Start exploring the types of components we have available and visit their individual pages where you can find
          the web components and their source code. Make sure you have checked out the{' '}
          <Link href="/setup" className="font-medium text-primary-600 transition hover:underline dark:text-primary-500">
            configuration
          </Link>{' '}
          page. Your setup should be similar, otherwise some components might not work as expected in your project.
        </p>

        <ComponentsSection items={applicationUiNav} title="Components" />
        <ComponentsSection items={eCommerceNav} title="eCommerce" />
        <ComponentsSection items={marketingNav} title="Marketing" />
      </div>
    </Layout>
  )
}

function ComponentsSection({ items, title }: { items: Section[]; title: string }) {
  return (
    <div className="mt-16 border-t border-zinc-900/10 pt-4 dark:border-white/10">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:xl:grid-cols-5 2xl:gap-5">
        {items.map((section) => (
          <SectionCard key={`showcase-${title}-${section.href}`} section={section} />
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const technologies = [
    { TechIcon: ReactIcon, name: 'React', color: 'text-[#149eca]', bgColor: '' },
    { TechIcon: TypescriptIcon, name: 'Typescript', color: 'text-[#3178c6]', bgColor: '' },
    { TechIcon: TailwindIcon, name: 'TailwindCSS', color: 'text-[#38bdf8]', bgColor: '' },
  ]

  return (
    <div className="max-w-xl space-y-3 py-4 lg:py-6">
      <div className="flex flex-wrap items-center gap-3">
        {technologies.map(({ TechIcon, name, color, bgColor }) => (
          <TechIcon key={name} className={`inline-flex h-5 w-5 align-middle ${color} ${bgColor} lg:h-7 lg:w-7`} />
        ))}
      </div>
      <h2
        className={clsx(
          'flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl',
        )}
      >
        Reusable React Typescript Components with TailwindCSS
      </h2>
    </div>
  )
}
