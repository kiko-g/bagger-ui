'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Lexend } from 'next/font/google'
import { ReactIcon, TailwindIcon, TypescriptIcon, ShadCnIcon } from '@/components/icons'
import { applicationUiNav, eCommerceNav, marketingNav, Section } from '@/utils/data'

import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'

const lexend = Lexend({ subsets: ['latin'] })

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
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:xl:grid-cols-5 2xl:gap-5">
        {items.map((section) => (
          <SectionCard key={`showcase-${title}-${section.href}`} section={section} />
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl lg:py-6 xl:max-w-[44rem]">
      <h2
        className={clsx(
          lexend.className,
          'flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl',
        )}
      >
        Reusable UI Components with
        <span>
          <ReactIcon className="ml-2 mr-1 inline-flex h-5 w-5 align-middle text-[#149eca] lg:h-7 lg:w-7" />
          <span>React</span>
          {', '}
        </span>
        <span>
          <TypescriptIcon className="-mt[1px] ml-2.5 mr-1.5 inline-flex h-5 w-5 rounded-sm align-middle text-[#3178c6] lg:h-7 lg:w-7" />
          <span>Typescript</span>
          {','}
        </span>
        <span>
          <TailwindIcon className="ml-2 mr-1.5 inline-flex h-5 w-5 align-middle text-[#38bdf8] lg:h-7 lg:w-7" />
          <span>TailwindCSS</span>
          {', and '}
        </span>
        <span>
          <ShadCnIcon className="-mt-1 ml-2 mr-1.5 inline-flex h-5 w-5 rounded-sm bg-[#08171d] align-middle text-white lg:h-7 lg:w-7" />
          <span>Shadcn</span>
        </span>
      </h2>
    </div>
  )
}
