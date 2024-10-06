'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  ArrowLongRightIcon,
  CursorArrowRaysIcon,
  MapIcon,
  ViewColumnsIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline'

type NavAction = {
  title: string
  text: string
  href: string
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  iconClasses: string
}

export function HeroGridNav() {
  const actions: NavAction[] = [
    {
      title: 'Moscow',
      text: 'Moscow is the capital and most populous city of Russia. Moscow is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe, as well as the largest city (by area) on the European continent.',
      href: '#',
      icon: ViewfinderCircleIcon,
      iconClasses: 'bg-teal-50 group-hover:bg-teal-600 group-hover:text-white text-teal-600',
    },
    {
      title: 'Prague',
      text: 'Prague is the capital and largest city in the Czech Republic, the 13th largest city in the European Union and the historical capital of Bohemia. Situated on the Vltava river, Prague is home to about 1.3 million people, while its metropolitan area is estimated to have a population of 2.7 million.',
      href: '#',
      icon: MapIcon,
      iconClasses: 'bg-orange-50 group-hover:bg-orange-600 group-hover:text-white text-orange-600',
    },
    {
      title: 'Paris',
      text: "Located in France, Paris is the capital and most populous city of the French Republic. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts.",
      href: '#',
      icon: ViewColumnsIcon,
      iconClasses: 'bg-sky-50 group-hover:bg-sky-600 group-hover:text-white text-sky-600',
    },
    {
      title: 'London',
      text: 'The capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia.',
      href: '#',
      icon: CursorArrowRaysIcon,
      iconClasses: 'bg-rose-50 group-hover:bg-rose-600 group-hover:text-white text-rose-600',
    },
  ]

  return (
    <div className="flex flex-col divide-y divide-transparent overflow-hidden rounded-lg border border-transparent bg-zinc-200 dark:border-blue-500/40 dark:bg-blue-500/10 md:grid md:grid-cols-2 md:gap-px md:divide-y-0">
      {actions.map((action, actionIdx) => (
        <Link
          href={action.href}
          key={action.title}
          className={clsx(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'group relative bg-white p-6 transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary hover:bg-zinc-100 dark:bg-blue-500/5 dark:hover:opacity-90',
          )}
        >
          <span className={clsx(action.iconClasses, 'inline-flex rounded-lg p-4 transition')}>
            <action.icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-lexend mt-3 block text-base font-semibold leading-6 text-zinc-900 dark:text-white">
            {action.title}
          </span>
          <span className="mt-2 text-sm tracking-tight text-zinc-500 dark:text-zinc-200">{action.text}</span>
          <span
            className="pointer-events-none absolute right-6 top-6 text-zinc-300 group-hover:text-zinc-500 dark:text-zinc-400 dark:group-hover:text-white"
            aria-hidden="true"
          >
            <ArrowLongRightIcon className="h-5 w-5 transition group-hover:-rotate-45 md:h-6 md:w-6" />
          </span>
        </Link>
      ))}
    </div>
  )
}
