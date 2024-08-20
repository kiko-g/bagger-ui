'use client'

import React, { useState } from 'react'
import clsx from 'clsx'

import { Lexend } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'

import { AlertCustom } from '@/components/application-ui/alerts/AlertCustom'
import { CameraIcon, CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const lexend = Lexend({ subsets: ['latin'] })

const components = [
  {
    name: 'Alerts',
    node: (
      <div className="flex w-full flex-col items-center gap-3">
        <AlertCustom accent dismissible type="info">
          Content of your information alert provided through children.
        </AlertCustom>
        <AlertCustom accent dismissible type="success">
          Content of your success alert provided through children.
        </AlertCustom>
        <AlertCustom accent dismissible type="warning">
          Content of your warning alert provided through children.
        </AlertCustom>
        <AlertCustom accent dismissible type="error">
          Content of your error alert provided through children.
        </AlertCustom>
        <AlertCustom accent dismissible>
          Content of your alert provided through children.
        </AlertCustom>
      </div>
    ),
  },
]

export default function Backstage() {
  const [component, setComponent] = useState(components[0])

  return (
    <Layout location="Backstage" sidebar>
      <div className="my-1 w-full py-4 lg:py-6">
        <h2
          className={clsx(
            lexend.className,
            'flex flex-wrap items-center gap-2 text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl',
          )}
        >
          <span>Backstage</span>
          <span className="mt-[1px] bg-emerald-100 px-1 py-0.5 text-sm font-bold uppercase tracking-normal text-emerald-950">
            Dev
          </span>
        </h2>
        <p className="mb-3 max-w-5xl">Generate screenshots for component groups.</p>
        <div className="mb-2 flex items-center gap-2">
          <Listbox value={component} onChange={setComponent}>
            <ListboxButton className="relative flex w-auto items-center gap-1 bg-black/50 px-3 py-1.5 text-left text-sm/6 text-white transition duration-150 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 hover:bg-black/80 focus:outline-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
              <span>{component.name}</span>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </ListboxButton>

            <ListboxOptions
              anchor="bottom start"
              className="mt-2 w-48 border border-black/50 bg-black/50 px-1.5 py-1.5 text-sm text-white shadow-xl transition duration-150 dark:bg-white/10"
            >
              {components.map((item) => (
                <ListboxOption
                  key={item.name}
                  value={item}
                  className="group flex cursor-pointer items-center gap-2 px-2 py-1 data-[focus]:bg-white/10"
                >
                  <span className="text-sm/6 text-white">{item.name}</span>
                  <CheckIcon className="invisible size-4 stroke-white group-data-[selected]:visible" />
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>

          <button className="hidden bg-black/50 px-2 py-2 text-white transition hover:bg-black/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
            <CameraIcon className="h-5 w-5" />
          </button>
        </div>

        <article className="relative flex aspect-[8/5] w-full max-w-full items-center border border-slate-300 bg-slate-200 p-16 dark:border-black/30 dark:bg-black/20 lg:max-w-4xl">
          <section id="screenshot" className="w-full">
            {component.node}
          </section>
        </article>
      </div>
    </Layout>
  )
}
