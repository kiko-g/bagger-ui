import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Lexend } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { CodeShowcaseDirect } from '@/components/CodeShowcaseDirect'
import { CodeShowcaseFromAPI } from '@/components/CodeShowcaseFromAPI'
import { H3, H4 } from '@/components/common/Headings'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const lexend = Lexend({ subsets: ['latin'] })

export default function Config() {
  const npmPackages = [
    {
      name: 'clsx',
      description: 'A simple JavaScript utility for conditionally joining clsx together.',
    },
    {
      name: '@heroicons/react',
      description: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    },
    {
      name: '@headlessui/react',
      description:
        'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    },
    {
      name: '@tailwindcss/typography',
      description:
        'This plugin gives you full control over your content’s typography by adding a new prose class that you can add to any parent element.',
    },
  ]

  return (
    <Layout location="Setup" sidebar>
      <section className="border-dimmed w-full border-b pb-2 pt-4 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, 'mb-3 text-xl font-semibold tracking-tighter lg:text-4xl')}>Setup</h2>
        <p className="max-w-3xl">
          This page covers the configuration of the tech stack, packages and tools used so that you can use our
          components to there full potential.
        </p>
      </section>

      <section className="border-dimmed w-full border-b pb-2 pt-4 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, 'mb-3 text-lg font-semibold tracking-tighter lg:text-3xl')}>
          Getting Started
        </h2>
        <p className="mb-3 max-w-5xl">
          A good starting point for this tech stack is to use Next.js, which is very popular and uses React, TypeScript
          and Tailwind CSS by default. We advise you to try it and you can{' '}
          <Link
            target="_blank"
            href="https://nextjs.org/docs"
            className="font-bold underline hover:text-primary hover:opacity-80 dark:hover:text-primary"
          >
            get started with the framework here
          </Link>
          .
        </p>
        <div className="py-6">
          <p className="mb-2">Here is a nice TLDR of the installation to get you started:</p>
          <CodeShowcaseDirect code="npx create-next-app@latest" language="bash" />
        </div>
      </section>

      <section className="border-dimmed w-full border-b pb-2 pt-4 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, 'mb-3 text-lg font-semibold tracking-tighter lg:text-3xl')}>
          Package Installation
        </h2>
        <p className="mb-3 max-w-5xl">
          Our components make use of a few npm packages. Make sure you install them to not deal with any warnings when
          copying your code.
        </p>

        <div className="py-6">
          <H3>Quick Install</H3>
          <p className="mb-2">You can copy and install all the recommended packages at once:</p>
          <CodeShowcaseDirect
            code={`npm i ${npmPackages.map((npmPackage) => npmPackage.name).join(' ')}`}
            language="bash"
          />
        </div>

        <div className="border-t py-6">
          <H3>Fragmented Install</H3>
          <ul className="flex flex-col gap-y-3">
            {npmPackages.map((npmPackage, npmPackageIdx) => (
              <li key={`npm-package-${npmPackageIdx}`}>
                <div className="mb-1.5 flex items-center gap-2">
                  <H4 noMargin>{npmPackage.name}</H4>
                  <a href={`https://www.npmjs.com/package/${npmPackage.name}`} target="_blank">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-50" />
                  </a>
                </div>
                <p className="mb-2">{npmPackage.description}</p>
                <CodeShowcaseDirect code={`npm i ${npmPackage.name}`} language="bash" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-24 w-full pb-2 pt-4 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, 'mb-3 text-lg font-semibold tracking-tighter lg:text-3xl')}>
          Tailwind Config File
        </h2>
        <p className="mb-3 max-w-5xl">
          This site uses a custom Tailwind config that extends the default Tailwind config. Copy our config to your{' '}
          <code className="font-bold text-primary dark:text-primary">tailwind.config.js</code> file that should be in
          the root of your project.
        </p>
        <div className="w-full rounded-xl">
          <CodeShowcaseFromAPI route="api/tailwind" language="javascript" />
        </div>
      </section>
    </Layout>
  )
}
